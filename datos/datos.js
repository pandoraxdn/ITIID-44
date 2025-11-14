const axios = require("axios");

const API_BASE = "http://localhost:3000/api/dsm44";
const TOTAL_EMPLEADOS = 8000;
const YEAR = 2025;
const BATCH_SIZE = 20;

const AREAS = ["OFICINA", "PRODUCCION", "INVENTARIO"];
const TURNOS = ["MATUTINO", "VESPERTINO", "NOCTURNO", "MIXTO"];
const STATUS_ASISTENCIA = ["EN_TURNO", "FINALIZADO"];

function random(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const NOMBRES = [
  "Juan","Carlos","Luis","Miguel","Jose","Jorge","Felipe","Hector",
  "Marco","Ricardo","Fernando","Pablo","Rafael","Alberto","Andres",
  "Roberto","Eduardo","Cristian","Mario","Diego","Omar","Sergio",
  "Francisco","Adrian","Hernan","Erick","Kevin","Oscar","Manuel",
  "Víctor","Alan","Emilio","Ramiro","Leonardo","Esteban","Bruno",
  "Mauricio","Gustavo","Elías","Tomás",
];

const APELLIDOS = [
  "Hernandez","Martinez","Gomez","Perez","Lopez","Garcia",
  "Rodriguez","Sanchez","Ramirez","Cruz","Torres","Rivera",
  "Gonzalez","Flores","Vargas","Castillo","Ortega","Ruiz",
  "Aguilar","Chavez","Dominguez","Silva","Navarro","Salazar",
  "Mendoza","Ponce","Morales","Soto","Camacho","Cortés",
  "Arias","Palacios","Estrada","Valdez","Montoya","Ramos"
];

function generarNombreCompleto() {
  return {
    nombre: random(NOMBRES),
    apellido_p: random(APELLIDOS),
    apellido_m: random(APELLIDOS)
  };
}

function generarFechas2025() {
  const fechas = [];
  const start = new Date(`${YEAR}-01-01T00:00:00Z`);

  for (let d = 0; d < 365; d++) {
    const cur = new Date(start);
    cur.setUTCDate(cur.getUTCDate() + d);
    fechas.push(cur.toISOString().slice(0, 10));
  }
  return fechas;
}
const FECHAS_2025 = generarFechas2025();

function makeISO(fecha, hour, minute) {
  const [y, m, d] = fecha.split("-").map(Number);
  return new Date(y, m - 1, d, hour, minute, 0).toISOString();
}

async function safePost(url, body) {
  try {
    const r = await axios.post(url, body, { validateStatus: s => true });
    if (r.status >= 200 && r.status < 300) return r.data;
    console.error(`Error ${r.status} -> ${url}`, r.data);
    return null;
  } catch (e) {
    console.error(`Network error -> ${url}`, e.message);
    return null;
  }
}

async function runBatch(promises) {
  const results = await Promise.allSettled(promises);
  const fails = results.filter(r => r.status === "rejected" || r.value === null).length;

  if (fails) {
    console.warn(`⚠ Fallaron ${fails} de ${promises.length} requests`);
  }
}

async function main() {

  for (let i = 1; i <= TOTAL_EMPLEADOS; i++) {

    const dataNombre = generarNombreCompleto();
    const empleadoPayload = {
      nombre: dataNombre.nombre,
      apellido_p: dataNombre.apellido_p,
      apellido_m: dataNombre.apellido_m,
      area: random(AREAS),
      turno: random(TURNOS),
      salarioDiario: 200 + Math.random() * 350,
      activo: true
    };

    const resEmpleado = await safePost(`${API_BASE}/empleados`, empleadoPayload);
    const idEmpleado = resEmpleado?.id_empleado;

    if (!idEmpleado) {
      console.error("No se pudo crear empleado", i);
      continue;
    }

    console.log(`Empleado ${i} creado ID=${idEmpleado}`);

    let currentBatch = [];

    for (const fecha of FECHAS_2025) {

      currentBatch.push(
        safePost(`${API_BASE}/empleados/create-asistencia`, {
          fecha,
          horaEntrada: makeISO(fecha, 8, 0),
          horaSalida: makeISO(fecha, 17, 0),
          entrada: makeISO(fecha, 8, 0),
          salida: makeISO(fecha, 17, 0),
          status: random(STATUS_ASISTENCIA),
          empleado: idEmpleado
        })
      );

      currentBatch.push(
        safePost(`${API_BASE}/empleados/create-produccion`, {
          fecha,
          turno: random(TURNOS),
          piezas: Math.floor(Math.random() * 300),
          empleado: idEmpleado
        })
      );

      if (currentBatch.length >= BATCH_SIZE) {
        await runBatch(currentBatch);
        currentBatch = [];
      }
    }

    if (currentBatch.length > 0) {
      await runBatch(currentBatch);
    }

    console.log(`Completado ID ${idEmpleado}\n`);
  }
}

main();

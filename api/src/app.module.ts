import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tareas/tarea.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tareas/entities/tarea.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { SensorModule } from './sensor/sensor.module';
import { Empleado } from './empleados/entities/empleado.entity';
import { RegistroAsistencia } from './empleados/entities/registro-asistencia.entity';
import { RegistroProduccion } from './empleados/entities/registro-produccion.entity';
import { EmpleadosModule } from './empleados/empleados.module';

@Module({
    imports: [
        MongooseModule.forRoot("mongodb://localhost:27017/DSM44"),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "najimi",
            password: "pass",
            database: "dsm442025",
            entities:  [ Usuario ],
            synchronize: true,
            autoLoadEntities: true,
        }),
        TypeOrmModule.forRoot({
            type: "mariadb",
            host: "localhost",
            port: 3306,
            username: "najimi",
            password: "pass",
            database: "dsm44",
            entities:  [ Tarea ],
            synchronize: true,
            autoLoadEntities: true,
        }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "najimi",
            password: "pass",
            database: "empresadsm44",
            entities:  [ Empleado, RegistroAsistencia, RegistroProduccion ],
            synchronize: true,
            autoLoadEntities: true,
        }),
        TareaModule,
        UsuariosModule,
        SensorModule,
        EmpleadosModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

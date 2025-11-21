import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { appTheme } from '../themes/appTheme';
import { useLocation } from '../hooks/useLocation';

export const LocationScreenGoogleMaps = () => {

    const { location, error } = useLocation();

    if (error) {
        return (
          <View style={styles.center}>
            <Text style={styles.error}>{error}</Text>
          </View>
        );
    }

    if (!location) {
        return (
          <View style={styles.center}>
            <ActivityIndicator size="large" />
            <Text>Obteniendo ubicación...</Text>
          </View>
        );
    }

    const { latitude, longitude } = location.coords;

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <MapView 
                provider="google"
                style={ styles.map } 
                initialRegion={{
                  latitude: 19.4326,
                  longitude: -99.1332,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05,
                }}
            />
            <Marker
              coordinate={{ latitude: 19.4326, longitude: -99.1332 }}
              title="CDMX"
              description="Ciudad de México"
            />
            <View style={styles.infoBox}>
                <Text style={styles.info}>Latitud: {latitude}</Text>
                <Text style={styles.info}>Longitud: {longitude}</Text>
                <Text style={styles.ok}>Ubicación obtenida desde el hook ✔</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 18,
    padding: 20,
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 15,
    elevation: 4,
  },
  info: {
    fontSize: 16,
  },
  ok: {
    marginTop: 5,
    color: "green",
    fontWeight: "bold",
  },
});


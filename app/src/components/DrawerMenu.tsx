import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { appTheme } from '../themes/appTheme';
import { BtnTouch } from './BtnTouch';

interface Props {
    title:      string;
    navigate:   () => void;
}

const BtnDrawer = ( { title, navigate } : Props ) => {
    return(
        <TouchableOpacity
            onPress={ () => navigate }
        >
            <View
                style={appTheme.menuBtn}
            >
                <Text
                    style={appTheme.textBtn}
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export const DrawerMenu = ( { navigation }:DrawerContentComponentProps ) => {

    const { authState, logout } = useContext( AuthContext );

    const assets: string = "./../../assets";

    return(
        <DrawerContentScrollView>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Image
                    style={appTheme.avatar}
                    source={ (authState.isLoggedIn && authState.favoriteImage != "") ? { uri: `data:image/jpeg;base64,${authState.favoriteImage}`} : require(assets + "/capi.jpg") }
                />
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            marginTop: 10
                        }}
                    >
                        Username: { (authState.isLoggedIn) ? authState.username : "capibara" }
                    </Text>
                </View>
                <View>
                    <BtnTouch
                        titulo='Cerrar sesión'
                        color='gray'
                        action={ () => logout() }
                    />
                </View>
                <View
                    style={appTheme.menuContainer}
                >
                    <BtnDrawer
                        title='Pokedex'
                        navigate={ () => navigation.navigate("PokemonNavigator") }
                    />
                    <BtnDrawer
                        title='Crud Tareas'
                        navigate={ () => navigation.navigate("TareaNavigator") }
                    />
                    <BtnDrawer
                        title='Stack Navigator'
                        navigate={ () => navigation.navigate("StackNav") }
                    />
                    <BtnDrawer
                        title='Image Picker'
                        navigate={ () => navigation.navigate("ImagePickerScreen") }
                    />
                    <BtnDrawer
                        title='Crud Usuarios'
                        navigate={ () => navigation.navigate("UserNavigator") }
                    />
                    <BtnDrawer
                        title='Configuración'
                        navigate={ () => navigation.navigate("SettingsScreen") }
                    />
                    <BtnDrawer
                        title='Graficos'
                        navigate={ () => navigation.navigate("GraficosScreen") }
                    />
                    <BtnDrawer
                        title='Graficos Sensor'
                        navigate={ () => navigation.navigate("SensorData") }
                    />
                    <BtnDrawer
                        title='Ubicación usuario'
                        navigate={ () => navigation.navigate("LoginScreen") }
                    />
                    <BtnDrawer
                        title='Escaner QR'
                        navigate={ () => navigation.navigate("QrScannerScreen") }
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

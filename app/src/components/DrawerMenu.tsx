import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { appTheme } from '../themes/appTheme';

export const DrawerMenu = ( { navigation }:DrawerContentComponentProps ) => {

    const { authState } = useContext( AuthContext );

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
                <View
                    style={appTheme.menuContainer}
                >
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("PokemonNavigator") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Pokedex
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("TareaNavigator") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Crud Tareas
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("StackNav") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Stack Navigator
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("ImagePickerScreen") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Image Picker
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("UserNavigator") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Crud Usuarios
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("SettingsScreen") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Configuración
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLoginUser } from '../../hooks/useLoginUser';
import { appTheme } from '../../themes/appTheme';

export const LoginScreen = () => {

    const { 
        isLoading, 
        state, 
        handleInputChange, 
        handleLogin,
        request
    } = useLoginUser();

    return(
        <View
            style={{
                ...appTheme.marginGlobal,
            }}
        >
            <View
                style={{ alignItems: "center" }}
            >
                {
                    ( isLoading ) && 
                    <ActivityIndicator 
                        style={{ height: 100 }}
                        size={ 100 }
                        color="purple"
                    />
                }
                {
                    (request === false) &&
                    <Text 
                        style={{ fontSize: 30, color: "pink", fontWeight: "bold" }}
                    >
                        { 'Contraseña incorrecta \n' }
                        { 'Envío de datos faltantes \n' }
                    </Text>
                }
                <TextInput
                    style={ appTheme.textInput }
                    value={ state.email }
                    onChangeText={ (text) => handleInputChange('correo', text) }
                    placeholder='E-mail'
                    keyboardType="email-address"
                    editable={ isLoading }
                />
                <TextInput
                    style={ appTheme.textInput }
                    value={ state.password }
                    secureTextEntry={ true }
                    onChangeText={ (text) => handleInputChange('password', text) }
                    placeholder='Contraseña'
                    editable={ isLoading }
                />
                <TouchableOpacity
                    onPress={ handleLogin } 
                    disabled={ !isLoading }
                >
                    <View
                        style={{ 
                            backgroundColor: "purple",
                            height: 50,
                            width: 100,
                            justifyContent: "center",
                            borderRadius: 20
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                color: "white",
                                alignSelf: "center"
                            }}
                        >
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

}

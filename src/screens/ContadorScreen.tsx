import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BtnTouch } from '../components/BtnTouch';

export const ContadorScreen = () => {

    const initialValue: number = 10;

    const [ contador, setContador ] = useState(initialValue);

    const add = () => setContador(contador + 1);
    const dec = () => (contador != 0) ? setContador(contador - 1)  : setContador(0);
    const reset = () => setContador(initialValue);

    return(
        <View
            style={ style.root }
        >
            <Text
                style={ style.text }
            >
                ContadorScreen: { contador }
            </Text>
            <BtnTouch
                titulo='añadir'
                color='blue'
                action={ () => add() }
            />
            <BtnTouch
                titulo='reiniciar'
                color='gray'
                action={ () => reset() }
            />
            <BtnTouch
                titulo='decrementar'
                color='violet'
                action={ () => dec() }
            />
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        alignItems: "center",
        alignContent: "center",
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
        color: "violet",
        borderColor: "black",
        borderWidth: 4
    }
});


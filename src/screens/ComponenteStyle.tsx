import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ComponenteStyle = () => {

    return(
        <View
            style={style.root}
        >
            <View
                style={{
                    backgroundColor: "blue",
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    alignSelf: "flex-end",
                    borderColor: "black",
                    borderWidth: 7
                }}
            />
            <View
                style={{
                    backgroundColor: "violet",
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    borderColor: "black",
                    borderWidth: 7
                }}
            />
            <View
                style={{
                    backgroundColor: "pink",
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    alignSelf: "center",
                    borderColor: "black",
                    borderWidth: 7
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-evenly"
    }
});


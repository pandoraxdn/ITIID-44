import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ScreenIII = () => {

    return(
        <View
            style={ style.root }
        >
            <Text>
                ScreenIII
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        flex: 1
    }
});


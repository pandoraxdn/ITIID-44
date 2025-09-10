import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ScreenII = () => {

    return(
        <View
            style={ style.root }
        >
            <Text>
                ScreenII
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        flex: 1
    }
});


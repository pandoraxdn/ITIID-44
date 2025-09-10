import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../../navigator/StackNav';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnTouch } from '../../components/BtnTouch';

interface Props extends StackScreenProps<RootStackParams,"ScreenI">{};

export const ScreenI = ( { navigation } : Props ) => {

    return(
        <View
            style={ style.root }
        >
            <Text>
                ScreenI
            </Text>
            <BtnTouch
                titulo='->'
                color='pink'
                action={ () => navigation.navigate("ScreenII") }
            />
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        flex: 1
    }
});


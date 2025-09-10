import React from 'react';
//import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigator/StackNav';
//import { PrimerScreen } from './src/screens/PrimerScreen';
//import { MiPrimerDiseno } from './src/screens/MiPrimerDiseno';
//import { PrimerComponente } from './src/screens/PrimerComponente';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { ComponenteStyle } from './src/screens/ComponenteStyle';
//import { ContadorReducerScreen } from './src/screens/ContadorReducerScreen';

const App = () => {

    return(
        <NavigationContainer>
            <StackNav/>
        </NavigationContainer>
    );
}

export default App;

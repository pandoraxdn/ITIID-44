import React from 'react';
import { View } from 'react-native';
//import { PrimerScreen } from './src/screens/PrimerScreen';
//import { MiPrimerDiseno } from './src/screens/MiPrimerDiseno';
//import { PrimerComponente } from './src/screens/PrimerComponente';
//import { ContadorScreen } from './src/screens/ContadorScreen';
import { ComponenteStyle } from './src/screens/ComponenteStyle';

const App = () => {

    return(
        <View
            style={{ flex: 1 }}
        >
            <ComponenteStyle/>
        </View>
    );
}

export default App;

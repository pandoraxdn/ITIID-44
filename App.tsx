import React from 'react';
import { View } from 'react-native';
//import { PrimerScreen } from './src/screens/PrimerScreen';
import { MiPrimerDiseno } from './src/screens/MiPrimerDiseno';

const App = () => {

    return(
        <View
            style={{ flex: 1 }}
        >
            <MiPrimerDiseno/>
        </View>
    );
}

export default App;

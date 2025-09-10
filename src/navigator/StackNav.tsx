import { createStackNavigator } from "@react-navigation/stack";
import { ScreenI } from "../screens/stack/ScreenI";
import { ScreenII } from "../screens/stack/ScreenII";
import { ScreenIII } from "../screens/stack/ScreenIII";

export type RootStackParams = {
    ScreenI:    undefined;
    ScreenII:   undefined;
    ScreenIII:  undefined;
}

export const StackNav = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="ScreenI"
                component={ ScreenI }
            />
            <Stack.Screen
                name="ScreenII"
                component={ ScreenII }
            />
            <Stack.Screen
                name="ScreenIII"
                component={ ScreenIII }
            />
        </Stack.Navigator>
    );
}

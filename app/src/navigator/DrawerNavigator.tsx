import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNav } from "./StackNav";
import { PokemonNavigator } from "./PokemonNavigator";
import { TareaNavigator } from "./TareaNavigator";
import { useWindowDimensions } from "react-native";
import { DrawerMenu } from "../components/DrawerMenu";
import { ImagePickerScreen } from "../screens/ImagePickerScreen";
import { UserNavigator } from "./UserNavigator";
import { SettingsScreen } from "../screens/SettingsScreen";
import { LoginScreen } from "../screens/user/LoginScreen";

export type RootDrawerNavigator = {
    StackNav: undefined;
    PokemonNavigator: undefined;
    TareaNavigator: undefined;
    ImagePickerScreen: undefined;
    UserNavigator:  undefined;
    SettingsScreen: undefined;
}

const Navigator = () => {

    const Drawer = createDrawerNavigator<RootDrawerNavigator>();
    const { width } = useWindowDimensions();

    return( 
        <Drawer.Navigator
            initialRouteName="PokemonNavigator"
            screenOptions={{
                headerShown: true,
                drawerType: width >= 768 ? "permanent" : "front",
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: "white",
                    width: width * 0.7
                }
            }}
            drawerContent={ (props) => <DrawerMenu {...props}/> }
        >
            <Drawer.Screen
                name="StackNav"
                component={StackNav}
            />
            <Drawer.Screen
                name="PokemonNavigator"
                component={PokemonNavigator}
            />
            <Drawer.Screen
                name="TareaNavigator"
                component={TareaNavigator}
            />
            <Drawer.Screen
                name="ImagePickerScreen"
                component={ImagePickerScreen}
            />
            <Drawer.Screen
                name="UserNavigator"
                component={UserNavigator}
            />
            <Drawer.Screen
                name="SettingsScreen"
                component={SettingsScreen}
            />
        </Drawer.Navigator>
    );
}

export const DrawerNavigator = () => {

    const { authState } = useContext(AuthContext);

    return ( authState.isLoggedIn ) ? <Navigator/> : <LoginScreen/>;

}

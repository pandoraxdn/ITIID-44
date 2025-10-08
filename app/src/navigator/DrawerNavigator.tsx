import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNav } from "./StackNav";
import { PokemonNavigator } from "./PokemonNavigator";
import { TareaNavigator } from "./TareaNavigator";
import { useWindowDimensions } from "react-native";
import { DrawerMenu } from "../components/DrawerMenu";

export type RootDrawerNavigator = {
    StackNav: undefined;
    PokemonNavigator: undefined;
    TareaNavigator: undefined;
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
        </Drawer.Navigator>
    );
}

export const DrawerNavigator = () => {
    return (
        <Navigator/>
    );
}

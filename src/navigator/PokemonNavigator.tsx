import { createStackNavigator } from "@react-navigation/stack";
import { HomePokemon } from "../screens/pokemon/HomePokemon";

export type RootStackParams = {
    HomePokemon:    undefined;
}

export const PokemonNavigator = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return(
        <Stack.Navigator
            initialRouteName="HomePokemon"
            screenOptions={{
                headerMode: "float",
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="HomePokemon"
                component={ HomePokemon }
                options={{ title: "Pantalla incial" }}
            />
        </Stack.Navigator>
    );
}

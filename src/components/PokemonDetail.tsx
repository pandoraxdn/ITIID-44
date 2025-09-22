import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTypeColorPokemon } from '../hooks/useTypeColorPokemon';
import { PokemonSimple } from '../interfaces/pokemonInterfaces';

interface Props{
    pokemon: PokemonSimple;
}

export const PokemonDetail = ( { pokemon }: Props ) => {

    const { color, isLoading } = useTypeColorPokemon( pokemon.id );

    return(
        <ScrollView
            style={{ ...StyleSheet.absoluteFillObject }}
        >
            {/*Type*/}
            <View>
                <Text
                    style={{
                        marginTop: 380,
                        marginHorizontal: 20
                    }}
                >
                    Type(s) 
                </Text>
                {
                    (pokemon.types) &&
                    pokemon.types.map( ({type}) => (
                        <Text
                            key={type.name}
                            style={{
                                fontSize: 20,
                                color: "white",
                                marginRight: 10,
                                marginHorizontal: 20, 
                                borderRadius: 5,
                                backgroundColor: (isLoading) ? "gray" : color[0]
                            }}
                        >
                            { type.name }
                        </Text>
                    ))
                }
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({

});


import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

function Detalhes(props) {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={props.voltar}>
                    <Text>Voltar</Text>
                </TouchableOpacity>

                <Text>{props.filme.nome}</Text>
                <Text>Sinopse</Text>
                <Text>{props.filmes.sinopse}</Text>

            </View>
        </View>
    )
}

export default Detalhes
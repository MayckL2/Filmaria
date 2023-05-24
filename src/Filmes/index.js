import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Detalhes from '../Detalhes'

function Filmes({ data }) {
    const [verModal, setVerModal] = useState(false)

    return (
        <View>
            <Text>{data.nome}</Text>

            <Image source={{ uri: data.foto }} />

            <View>
                <TouchableOpacity onPress={() => setVerModal = (true)}>
                    <Text>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType='slide' visible={verModal}>
                <Detalhes filme={data} voltar={() => setVerModal(false)} />
            </Modal>
        </View>
    )
}

export default Filmes
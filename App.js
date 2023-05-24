import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import Filmes from './src/Filmes';
import Api from './src/Services/api';
import { ActivityIndicator } from 'react-native-paper';

export default function App() {
  const [filmes, setFilmes] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadFilmes() {
      const response = await Api.get('r-api/?api=filmes')

      setFilmes(response.data)
      setLoading(false)
    }

    loadFilmes()
  }, [])

  if (loading) {
    return (
      <View>
        <ActivityIndicator color='black' size={45} />
      </View>
    )
  } else {
    return (
      <View>
        <FlatList 
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({item})=> <Filmes nome={item}/>}  
        />
      </View>
    )
  }
    
}

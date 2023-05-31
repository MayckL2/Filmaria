import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import api from './src/service/api';
import Filmes from './src/Filmes';

function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      // console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();

  }, []);

  if(loading) {
    return(
      <View style={styles.loading}>
        <ActivityIndicator color='#121212' size={45} />
      </View>
    )
  } else {
    return(
      <View style={styles.container}>
        <FlatList 
          data={filmes}
          keyExtractor={ item => String(item.id) }
          renderItem={ ({ item }) => <Filmes data={ item } /> }
        />
      </View>
    );
  } 
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  act: {
    size: 'large',
    color: '#0000ff',
  },

});

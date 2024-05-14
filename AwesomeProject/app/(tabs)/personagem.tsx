import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';
import MD5 from 'react-native-md5'; 

const MarvelCharacterSearch: React.FC = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterInfo, setCharacterInfo] = useState<any | null>(null);

  const handleSearch = async () => {
    try {
      const ts = new Date().getTime();
      const publicKey = '9cc635f2e3ce6a0c245a855215c9e412'; 
      const privateKey = 'b4b60fe05387edee9d5230a9de6deba9db0714d5'; 
      const hash = MD5.hex_md5(ts + privateKey + publicKey);
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?name=${characterName}&apikey=${publicKey}&ts=${ts}&hash=${hash}`
      );
      const data = await response.json();
      setCharacterInfo(data.data); 
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={styles.label}>Sugestão: Thor</Text>
        <Text style={styles.label}>Nome do Personagem:</Text>
        <TextInput
          style={styles.input}
          value={characterName}
          onChangeText={(text) => setCharacterName(text)}
        />
        <Button title="Pesquisar" onPress={handleSearch} />
      </View>

      {characterInfo && (
        <View>
          <Text>Resultados Encontrados: {characterInfo.count}</Text>
          <Text>Nome do Personagem: {characterInfo.results[0].name}</Text>
          <Image
            source={{ uri: `${characterInfo.results[0].thumbnail.path}.${characterInfo.results[0].thumbnail.extension}` }}
            style={{ width: 300, height: 300 }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    width: '100%', 
    marginBottom: 8, 
  },
  input: {
    height: 40,
    width: '100%', // Define a largura do TextInput
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16, // Adiciona espaço abaixo do TextInput
  },
});

export default MarvelCharacterSearch;

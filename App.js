import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const [resultado, setResultado] = useState();

  function calcular(){
    if((alcool / gasolina) << 0.7) {
      setResultado("Abasteça com álcool seu verme !!!");
    } else {
      setResultado("melhor abastecer com gasolina o álcool ta mais de oito mil !!!");
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Combustível Calculator </Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/originals/ed/ee/1d/edee1d1c31da5b622aad0c9dd35e9950.jpg',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Quanto ta o litro do álcool ??? </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={alcool}
          placeholder='álcool'
          onChangeText={(texto)=>setAlcool(texto)}
      />
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Quanto ta o litro da gasolina ??? </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder='gasolina'
          value={gasolina}
          onChangeText={(texto)=>setGasolina(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={calcular}>
            <Text style={styles.textoBotao}> Calcular </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.texto}> {resultado} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "url('https://wallpapersmug.com/download/2048x1152/db1982/vegeta-artwork.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 50,
    textShadow: '2px 0px #00ccff'
  },
  textoBloco:{
    color: '#fff',
    fontSize:40,
    textShadow: '2px 0px #00ccff'
  },
  input:{
    color: '#fff',
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    textAlign: 'center'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#008',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  },
  logo:{
    width: 80,
    height: 70,
    margin: 5
  }
});
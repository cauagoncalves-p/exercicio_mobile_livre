import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nós – Tripulação dos Sonhos</Text>
      <View style={{alignItems: 'center',justifyContent: 'center', flex:0.5}}>
        <Text style={styles.titledescribe}>
          Assim como na Grand Line, nós acreditamos que cada jornada é feita de
          coragem, amizade e sonhos impossíveis que merecem ser conquistados.
          Inspirados pelo universo de One Piece, seguimos como uma verdadeira
          tripulação: cada um com sua personalidade única, talentos diferentes e
          uma mesma meta — chegar cada vez mais longe juntos.
        </Text>

        <Text style={styles.titledescribe}>
          Aqui, cada desafio é visto como uma ilha misteriosa, cada conquista
          como um tesouro encontrado, e cada aprendizado como uma nova rota no
          nosso mapa. Assim como Luffy nunca abandona sua tripulação,
          acreditamos na força da união e no poder de acreditar em algo maior do
          que nós mesmos.
        </Text>

        <Text style={styles.titledescribe}>
          Navegamos em busca do nosso “One Piece” — que não é apenas um tesouro
          material, mas sim a realização dos nossos objetivos, a amizade
          verdadeira e a vontade de sempre seguir em frente, independente das
          tempestades.
        </Text>

        <Text style={styles.titledescribe}>
          Somos sonhadores, navegantes e guerreiros desta grande aventura
          chamada vida. E você, vai embarcar com a gente? ⚓
        </Text>

        <Image source={require('../assets/one_piece.png')} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: '#84c4f8ff',
    fontWeight: '900',
    textAlign:"center"
  },
  titledescribe: {
    margin: 20,
    textAlign: 'justify',
  },
  img: {
    height: 150,
    width: 400,
  },
});

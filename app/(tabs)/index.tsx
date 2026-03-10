import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const textoParaExibir = Platform.OS === 'android' 
    ? 'Oi eu sou o VItor no Android' 
    : 'Oi eu sou o Vitor para IOS';

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        {textoParaExibir}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: '#d500f9', 
    
    textShadowColor: '#d500f9', 
    textShadowOffset: { width: 0, height: 0 }, 
    textShadowRadius: 15, 
  }
});
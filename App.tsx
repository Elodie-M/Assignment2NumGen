/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
  <Text style={styles.title}>Assignment 2</Text>
  <Text style={styles.subtitle}>Random Number Generator</Text>

  <View style={styles.numberBox}>
    <Text style={styles.numberText}>...</Text>
  </View>

  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Generate</Text>
  </TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  numberBox: {
  width: 180,
  height: 180,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
},
numberText: {
  fontSize: 60,
  fontWeight: 'bold',
  color: '#7f5539',
},
button: {
  backgroundColor: '#b08968',
  paddingVertical: 14,
  paddingHorizontal: 30,
  borderRadius: 12,
  alignItems: 'center',
  marginTop: 25,
},

buttonText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Random Number Generator</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.numberText}>...</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Statistics</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b08968',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#8b5e3c',
    paddingVertical: 14,
    paddingHorizontal: 14,
  },

  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

numberText: {
  fontSize: 60,
  fontWeight: 'bold',
  color: 'white',
},
buttonRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 18,
    gap: 12,
  },

button: {
  flex: 1,
  backgroundColor: '#7f5539',
  paddingVertical: 14,
  alignItems: 'center',
  borderRadius: 3,
},

buttonText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default App;
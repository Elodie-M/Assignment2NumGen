/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function HomeScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.numberText}>...</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Statistics')}>
            <Text style={styles.buttonText}>View Statistics</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function StatisticsScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statsContent}>
        <Text style={styles.statText}>Number 1:   0 times</Text>
        <Text style={styles.statText}>Number 2:   0 times</Text>
        <Text style={styles.statText}>Number 3:   0 times</Text>
        <Text style={styles.statText}>Number 4:   0 times</Text>
        <Text style={styles.statText}>Number 5:   0 times</Text>
        <Text style={styles.statText}>Number 6:   0 times</Text>
        <Text style={styles.statText}>Number 7:   0 times</Text>
        <Text style={styles.statText}>Number 8:   0 times</Text>
        <Text style={styles.statText}>Number 9:   0 times</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Clear Statistics</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
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
    flexDirection: 'row',
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
statsContent: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},

statText: {
  color: 'white',
  fontSize: 16,
  marginBottom: 28,
},
backButton: {
  marginRight: 12,
},

backArrow: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Random Number Generator',
            headerLeft: () => null,
            headerStyle: { backgroundColor: '#8b5e3c' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
          }}/>
          <Stack.Screen
            name="Statistics"
            component={StatisticsScreen}
            options={{
              title: 'Statistics',
              headerStyle: { backgroundColor: '#8b5e3c' },
              headerTintColor: 'white',
              headerTitleStyle: { fontWeight: 'bold' },
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

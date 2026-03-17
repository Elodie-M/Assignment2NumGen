/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  //FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const StatisticsContext = createContext<any>(null);

const initialStatistics = [
  {number: 1, count: 0},
  {number: 2, count: 0},
  {number: 3, count: 0},
  {number: 4, count: 0},
  {number: 5, count: 0},
  {number: 6, count: 0},
  {number: 7, count: 0},
  {number: 8, count: 0},
  {number: 9, count: 0},
];

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}: any) {
  const [currentNumber, setCurrentNumber] = useState('...');
  const [isGenerating, setIsGenerating] = useState(false);
  const {statistics, setStatistics} = useContext(StatisticsContext);
  const generateNumber = () => {
  if (isGenerating) return;

  setIsGenerating(true);

  let finalRandom = 1;

  const interval = setInterval(() => {
    finalRandom = Math.floor(Math.random() * 9) + 1;
    setCurrentNumber(finalRandom.toString());
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    const updatedStatistics = statistics.map((item: any) =>
      item.number === finalRandom ? {...item, count: item.count + 1} : item,
    );

    setStatistics(updatedStatistics);
    setIsGenerating(false);
  }, 1000);
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.numberText}>{currentNumber}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={generateNumber} disabled={isGenerating}>
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
});

export default function App() {
  const [statistics, setStatistics] = useState(initialStatistics);

  return (
    <StatisticsContext.Provider value={{statistics, setStatistics}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Random Number Generator',
              headerLeft: () => null,
              headerStyle: {backgroundColor: '#8b5e3c'},
              headerTintColor: 'white',
              headerTitleStyle: {fontWeight: 'bold'},
            }}
          />
          <Stack.Screen
            name="Statistics"
            component={StatisticsScreen}
            options={{
              title: 'Statistics',
              headerStyle: {backgroundColor: '#8b5e3c'},
              headerTintColor: 'white',
              headerTitleStyle: {fontWeight: 'bold'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StatisticsContext.Provider>
  );
}
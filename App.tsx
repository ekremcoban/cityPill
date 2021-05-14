/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import AdviceScreen from './src/screens/AdviceScreen';
import AdvicePlacesScreen from './src/screens/AdvicePlacesScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
         <Stack.Screen name="TAVSİYELER" component={AdviceScreen} />
         <Stack.Screen name="NERELERİ GÖRMELİ" component={AdvicePlacesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 export default App;

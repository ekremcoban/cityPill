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
import AdviceWhatToEatScreen from './src/screens/AdviceWhatToEatScreen';
import AdviceWhereToEatScreen from './src/screens/AdviceWhereToEatScreen';
import AdviceWhereToFunScreen from './src/screens/AdviceWhereToFunScreen';
import NotesScreen from './src/screens/NotesScreen';
import GoToCityCenterScreen from './src/screens/GoToCityCenterScreen';
import FromAirportScreen from './src/screens/FromAirportScreen';
import FromTrainStationScreen from './src/screens/FromTrainStationScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
         <Stack.Screen name="TAVSİYELER" component={AdviceScreen} />
         <Stack.Screen name="NERELERİ GÖRMELİ" component={AdvicePlacesScreen} />
         <Stack.Screen name="NE YEMELİ" component={AdviceWhatToEatScreen} />
         <Stack.Screen name="NEREDE YEMELİ" component={AdviceWhereToEatScreen} />
         <Stack.Screen name="EĞLENCE NEREDE" component={AdviceWhereToFunScreen} />
         <Stack.Screen name="NOTLARIM" component={NotesScreen} />
         <Stack.Screen name="ŞEHİR MERKEZİNE GİDİŞ" component={GoToCityCenterScreen} />
         <Stack.Screen name="HAVALİMANINDAN" component={FromAirportScreen} />
         <Stack.Screen name="TREN İSTASYONUNDAN" component={FromTrainStationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 export default App;

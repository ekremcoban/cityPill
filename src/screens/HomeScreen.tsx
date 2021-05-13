import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cards from '../component/Cards';

const data = [
  {
    id: 0,
    title: 'ISTANBUL',
    img: require('../assets/img/ist.jpeg'),
  },
  {
    id: 1,
    title: 'MOSTAR',
    img: require('../assets/img/mostar.jpeg'),
  },
  {
    id: 2,
    title: 'SARAYBOSNA',
    img: require('../assets/img/bosna.jpeg'),
  },
]

const cards = data.map(c => <Cards {...c} />)

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      {cards}
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
});

export default HomeScreen;

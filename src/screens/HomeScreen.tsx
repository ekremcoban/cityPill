import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CityCards from '../components/CityCards';
import {ScrollView} from 'react-native-gesture-handler';

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
    title: 'NOVI SAD',
    img: require('../assets/img/novisad.jpeg'),
  },
  {
    id: 3,
    title: 'OHRID',
    img: require('../assets/img/ohrid.jpeg'),
  },
  {
    id: 4,
    title: 'PRIZREN',
    img: require('../assets/img/prizren.jpeg'),
  },
  {
    id: 5,
    title: 'SARAYBOSNA',
    img: require('../assets/img/bosna.jpeg'),
  },
];

const cards = data.map(c => <CityCards key={c.id} {...c} />);

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.page}>{cards}</View>
    </ScrollView>
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

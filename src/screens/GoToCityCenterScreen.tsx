import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AdviceCard from '../components/AdviceCard';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: 0,
    title: 'HAVALİMANINDAN',
    img: require('../assets/img/airport.jpeg'),
  },
  {
    id: 1,
    title: 'TREN İSTASYONUNDAN',
    img: require('../assets/img/train.png'),
  },
];

const cards = data.map(c => <AdviceCard key={c.id} {...c} />);

function GoToCityCenterScreen() {
  const route = useRoute();
  const {title, img} = route.params;

  return (
    <ScrollView>
      <View style={styles.frame}>{cards}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    width: '80%',
    height: 300,
    resizeMode: 'cover',
  },
});

export default GoToCityCenterScreen;

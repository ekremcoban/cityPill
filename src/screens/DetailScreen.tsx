import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Selection from '../component/Selection';

const data = [
  {
    id: 0,
    title: 'ŞEHİR MERKEZİNE GİDİŞ',
    img: require('../assets/img/cityCentre.jpeg'),
  },
  {
    id: 1,
    title: 'NOTLARIM',
    img: require('../assets/img/notes.jpeg'),
  },
  {
    id: 2,
    title: 'TAVSİYELER',
    img: require('../assets/img/advice.jpeg'),
  },
];

const selection = data.map(s => <Selection key={s.id} {...s} />);

function DetailScreen() {
  const route = useRoute();
  const {title, img} = route.params;

  return <View style={styles.frame}>{selection}</View>;
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
  },
});

export default DetailScreen;

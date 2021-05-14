import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AdviceCard from '../component/AdviceCard';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: 0,
    title: 'NERELERİ GÖRMELİ',
    img: require('../assets/img/nereleriGormeli.png'),
  },
  {
    id: 1,
    title: 'NE YEMELİ',
    img: require('../assets/img/neYemeli.png'),
  },
  {
    id: 2,
    title: 'NEREDE YEMELİ',
    img: require('../assets/img/neredeYemeli.png'),
  },
  {
    id: 3,
    title: 'EĞLENCE NEREDE',
    img: require('../assets/img/fun.png'),
  },
];

const cards = data.map(c => <AdviceCard key={c.id} {...c} />);

function CityListScreen() {
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

export default CityListScreen;

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

function CityListScreen() {
  const route = useRoute();
  const {title, img} = route.params;

  return (
    <View style={styles.frame}>
      <Image style={styles.pic} source={img} />
      <Text>{title}</Text>
    </View>
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

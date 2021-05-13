import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';

function DetailsScreen() {
  const route = useRoute();
  const { title, img } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Image style={styles.pic} source={img} />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    width: '80%',
    height: 300,
    resizeMode: 'cover',
  },
});

export default DetailsScreen;
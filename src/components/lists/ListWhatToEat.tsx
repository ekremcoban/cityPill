import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const ListWhatEat = (props: Props) => {
    const {title, img} = props;

  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={img} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 10,
    alignItems: 'center',
    borderBottomColor: '#999',
  },
  title: {
      fontSize: 17,
  },
  pic: {
    width: '100%',
    height: windowHeight/2 - 100,
    resizeMode: 'cover',
  },
});

type Props = {
    id: Number,
    title: string,
    img: any
}

export default ListWhatEat;

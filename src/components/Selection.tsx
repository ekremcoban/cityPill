import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Selection(props: Props) {
  const {title, img} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{width: '100%', height: '33%'}}
      onPress={() => navigation.navigate(title, props)}>
      <View style={styles.container}>
        <Image style={styles.pic} source={img} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    paddingTop: 10,
  },
  pic: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    // borderRadius: 60,
  },
});

type Props = {
  title: string;
  img: any;
};

export default Selection;

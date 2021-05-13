import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Cards(props: Props) {
  const {title, img} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CityList', props)}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.pic} source={img} />
        </View>
        <View style={styles.righttContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    height: 150,
    width: '90%',
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 1,
    alignSelf: 'center',
    paddingStart: 10,
    // backgroundColor: 'yellow',
  },
  pic: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 60,
  },
  righttContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'orange',
  },
  title: {
    fontSize: 20,
  },
});

type Props = {
  title: string;
  img: any;
};

export default Cards;

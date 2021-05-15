import React from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function ListNotes(props: Props) {
  const {title} = props;

  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <View style={styles.middle}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => props.delete(title) }>
          <Text style={styles.cross}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    // backgroundColor: 'orange',
  },
  left: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  middle: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  cross: {
    fontSize: 25,
    color: 'red',
  },
});

type Props = {
  title: string;
  delete: Function;
};

export default ListNotes;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ListWherePlace(props: Props) {
    const { id, title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    // backgroundColor: 'orange',
  },
  text: {
    fontSize: 20,
  },
});

type Props = {
    id: Number,
    title: string
};

export default ListWherePlace;

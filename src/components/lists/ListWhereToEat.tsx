import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ListWhereToEat(props: Props) {
    const { id, title, food } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{food}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    // backgroundColor: 'orange',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 17,
  },
});

type Props = {
    id: Number,
    title: string,
    food: string,
};

export default ListWhereToEat;

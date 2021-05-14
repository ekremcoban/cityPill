import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ListWhereToFun(props: Props) {
    const { id, title, detail } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{detail}</Text>
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
    detail: string,
};

export default ListWhereToFun;

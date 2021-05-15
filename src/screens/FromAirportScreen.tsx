import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function FromAirportScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>OTOBÜS</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailText}>E9: Yarım saatte bir</Text>
          <Text style={styles.detailText}>E10: 20 dakikada bir</Text>
          <Text style={styles.detailText}>E11: 20 dakikada bir</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>METRO</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailText}>M21: Yarım saatte bir</Text>
          <Text style={styles.detailText}>M12: 20 dakikada bir</Text>
          <Text style={styles.detailText}>N13: 20 dakikada bir</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>UBER</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailText}>Yarım saat, 120 TL</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderBottomWidth: 1,
    // backgroundColor: 'orange',
  },
  title: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
  },
  detail: {
    paddingStart: 20,
  },
  detailText: {
    fontSize: 15,
  }
});

type Props = {
  id: Number;
  title: string;
};

export default FromAirportScreen;

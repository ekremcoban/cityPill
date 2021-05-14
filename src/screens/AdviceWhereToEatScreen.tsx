import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import wherePlaces from '../leaflet/wherePlaces';
import ListWhereToEat from '../components/lists/ListWhereToEat';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: 0,
    title: 'KURUFASÜLYECİ ALİ BABA',
    food: 'Kurufasulye',
  },
  {
    id: 1,
    title: 'BORSAM TAŞFIRIN RIHTIM',
    food: 'Lahmacun',
  },
  {
    id: 2,
    title: 'ALİ MUHİDDİN HACI BEKİR',
    food: 'Lokum',
  },
];

class AdviceWhereToEatScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs['mapRef'].injectJavaScript(`
        L.Routing.control({
          show: false,
          router: new L.Routing.osrmv1({
            language: 'tr',
            profile: 'foot',
          }),
          waypoints: [
            L.latLng(41.016201949856054, 28.963423276413458),
            L.latLng(40.9934281696994, 29.02488583012885),
            L.latLng(40.99096700528199, 29.02359837209422)
          ],
          lineOptions: {
            styles: [
                    {color: 'black', opacity: 0.05, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: '#398aca', opacity: 1, weight: 4}
                ],
        }
        }).addTo(mymap);
        
        L.marker([41.016201949856054, 28.963423276413458]).addTo(mymap)
        .bindPopup('Start Point')
        .openPopup();
        `);
    }, 2000);
  }

  render() {
    return (
      <View style={styles.frame}>
        <ScrollView style={{flex: 1,}}>
          <View style={styles.viewList}>
            {data.map(d => (
              <ListWhereToEat key={d.id} {...d} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.viewMap}>
          <WebView
            ref={'mapRef'}
            source={{html: wherePlaces}}
            style={styles.mapRef}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
  },
  viewList: {
    flex: 1,
    margin: 10,
    // backgroundColor: 'green',
  },
  viewMap: {
    flex: 2,
  },
  mapRef: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
});

export default AdviceWhereToEatScreen;

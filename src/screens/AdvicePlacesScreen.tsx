import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import wherePlaces from '../leaflet/wherePlaces';
import ListWherePlace from '../components/lists/ListWherePlace';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: 0,
    title: 'Ayasofya Camii',
  },
  {
    id: 1,
    title: 'Yerebatan Sarnıcı',
  },
  {
    id: 2,
    title: 'Süleymaniye Camii',
  },
];

class AdvicePlacesScreen extends Component {
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
            L.latLng(41.008364384219284, 28.979799488583907),
            L.latLng(41.00857828601789, 28.97787799784599),
            L.latLng(41.01632319215363, 28.964196213190505)
          ],
          lineOptions: {
            styles: [
                    {color: 'black', opacity: 0.05, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: '#398aca', opacity: 1, weight: 4}
                ],
        }
        }).addTo(mymap);
        
        L.marker([41.008364384219284, 28.979799488583907]).addTo(mymap)
        .bindPopup('Start Point')
        .openPopup();
        `);
    }, 1500);
  }

  render() {
    return (
      <View style={styles.frame}>
        <ScrollView style={{flex: 1,}}>
          <View style={styles.viewList}>
            {data.map(d => (
              <ListWherePlace key={d.id} {...d} />
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

export default AdvicePlacesScreen;

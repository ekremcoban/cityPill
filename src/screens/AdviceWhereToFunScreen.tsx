import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import wherePlaces from '../leaflet/wherePlaces';
import ListWhereToFun from '../components/lists/ListWhereToFun';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: 0,
    title: 'Türk Telekom Arena',
    detail: 'Galatasaray Stadı',
  },
  {
    id: 1,
    title: 'Şükrü Saraçoğlu Stadyumu',
    detail: 'Fenerbahçe Stadı',
  },
  {
    id: 2,
    title: 'Vodafone Park',
    detail: 'Beşiktaş Stadı',
  },
];

class AdviceWhereToFunScreen extends Component {
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
            L.latLng(41.10338083725539, 28.99126445511572),
            L.latLng(40.98793574688441, 29.036844755111883),
            L.latLng(41.03958959454177, 28.99414088394924)
          ],
          lineOptions: {
            styles: [
                    {color: 'black', opacity: 0.05, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: '#398aca', opacity: 1, weight: 4}
                ],
        }
        }).addTo(mymap);
        
        L.marker([41.10338083725539, 28.99126445511572]).addTo(mymap)
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
              <ListWhereToFun key={d.id} {...d} />
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

export default AdviceWhereToFunScreen;

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import wherePlaces from '../../wherePlaces';

class AdvicePlacesScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
    this.refs['mapRef'].injectJavaScript(`
        L.Routing.control({
          show: false,
          waypoints: [
            L.latLng(41.01809926611338, 29.00856835843875),
            L.latLng(40.88688641127476, 29.186640955537502),
            L.latLng(40.81831905125059, 29.285431003343092),
            L.latLng(40.81191220859712, 29.365444423703714)
          ]
        }).addTo(mymap);
        
        L.marker([41.01809926611338, 29.00856835843875]).addTo(mymap)
        .bindPopup('Start Point')
        .openPopup();
        `)
    }, 1200);
  }

  render() {
    return (
      <View style={styles.frame}>
        <Text>TEST</Text>
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
  viewMap: {
    flex: 1,
    margin: 10,
    // backgroundColor: 'green',
},
  mapRef: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
});
export default AdvicePlacesScreen;

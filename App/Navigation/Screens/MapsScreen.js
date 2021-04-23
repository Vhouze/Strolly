import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Dimensions} from 'react-native';
import {data} from '../../Components/Maps/Data';

const origin = { latitude: 3.367857, longitude: -76.531143 };
const destination = { latitude: 3.366294, longitude: -76.531968 };

function Map({navigation}) {
    console.log(data)
    return (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={{
            latitude: 48.866667,
            longitude: 2.333333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            showsUserLocation={true} >
            <Marker
            key= {data[0].id}
            coordinate=
            {{latitude: data[0].latitude,
               longitude:  data[0].longitude}}
            title={data[0].title}
            description={data[0].description}
            pinColor = {data[0].color}
            /> 



          <MapViewDirections
            origin={{latitude: data[0].latitude, longitude:  data[0].longitude}}
            destination={{latitude: data[1].latitude, longitude:  data[1].longitude}}
            apikey={'AIzaSyA3b6kWKtzDr1O2qlDCIG0F7X3ctyS481o'}
          />
            <Marker
            key= {data[1].id}
            coordinate=
            {{latitude: data[1].latitude,
               longitude:  data[1].longitude}}
            title={data[1].title}
            description={data[1].description}
            pinColor = {data[1].color}
            />

        </MapView>
    </View>
  );
}

export default function MapsScreen() {
  return (
    <Map></Map>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    map: {
      // width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
      ...StyleSheet.absoluteFillObject,
    },
});
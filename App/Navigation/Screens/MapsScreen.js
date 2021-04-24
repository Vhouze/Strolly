import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Dimensions, ColorPropType} from 'react-native';
import {dataMap} from '../../Components/Maps/DataMap';
import getDirections from 'expando-react-native-google-maps-directions';
// import Geolocation from '@react-native-community/geolocation';
// geolocation.setRNConfiguration(config);
// Geolocation.getCurrentPosition(info => console.log(info));
import Color from '../../Constant/Color';

const exdata = {

 destination: {
   latitude: dataMap[0].latitude,
   longitude: dataMap[0].longitude,
 },
 params: [
   {
     key: "travelmode",
     value: "walking"        // may be "walking", "bicycling" or "transit" as well
   },
   {
     key: "dir_action",
     value: "navigate"       // this instantly initializes navigation using the given travel mode
   }
 ],
// waypoints: [
//   {
//     latitude: -33.8600025,
//     longitude: 18.697452
//   },
//   {
//     latitude: -33.8600026,
//     longitude: 18.697453
//   },
//      {
//     latitude: -33.8600036,
//     longitude: 18.697493
//   }
// ]
}

const travel = () => {getDirections(exdata)};


function Map({navigation}) {
    console.log(dataMap)
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
            showsUserLocation={true}
            showsBuildings = {true}
            >
            <Marker
            key= {dataMap[0].id}
            coordinate=
            {{latitude: dataMap[0].latitude,
               longitude:  dataMap[0].longitude}}
            title={dataMap[0].title}
            description={dataMap[0].description}
            pinColor = {dataMap[0].color}
            onPress={travel}
            /> 



          <MapViewDirections
            origin={{latitude: dataMap[0].latitude, longitude:  dataMap[0].longitude}}
            destination={{latitude: dataMap[1].latitude, longitude:  dataMap[1].longitude}}
            apikey={'AIzaSyA3b6kWKtzDr1O2qlDCIG0F7X3ctyS481o'}
            mode="WALKING"
           
            strokeColor= {Color.second}
            strokeWidth={5}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)}}


          />
            <Marker
            key= {data[1].id}
            coordinate=
            {{latitude: dataMap[1].latitude,
               longitude:  dataMap[1].longitude}}
            title={dataMap[1].title}
            description={dataMap[1].description}
            pinColor = {dataMap[1].color}

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
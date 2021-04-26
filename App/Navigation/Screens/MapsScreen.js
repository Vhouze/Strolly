import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Dimensions, ColorPropType} from 'react-native';
import {dataMap} from '../../Components/Maps/DataMap';
import getDirections from 'expando-react-native-google-maps-directions';
// import Geolocation from '@react-native-community/geolocation';
// geolocation.setRNConfiguration(config);
// Geolocation.getCurrentPosition(info => console.log(info));
import Color from '../../Constant/Color';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';


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

}

const travel = () => {getDirections(exdata)};


function Map({navigation}) {


  const [distance, setDistance] = useState(0);
  const [duree, setDuree] = useState(0);

    return (
      <View style={styles.screen}>
        <View style={styles.containerMap}>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: dataMap[0].latitude,
                longitude: dataMap[0].longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0221,
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
               /// onStart={(params) => {
               ///   console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
               /// }}
                onReady={(result) => {
                 setDistance(result.distance)
                 setDuree(Math.trunc(result.duration))
                 console.log(result)
                }}
              />

                <Marker
                key= {dataMap[1].id}
                coordinate=
                {{latitude: dataMap[1].latitude,
                   longitude:  dataMap[1].longitude}}
                title={dataMap[1].title}
                description={dataMap[1].description}
                pinColor = {dataMap[1].color}

                />

            </MapView>
            </View>
            <View style={styles.info}>
              <ScrollView>
                <View style={{flexDirection : 'row', marginTop: 10}}>
                  <Text style={{alignItems:'center',marginRight: 10}}>
                  Distance: {distance}  km
                  </Text>
                  <Text style={{marginLeft: 10}}>
                  Durée: {duree} minutes
                  </Text>
                </View>

              </ScrollView>
            </View>
      </View>
  
  );
}

export default function MapsScreen() {
  return (
    <Map></Map>
  );
}

const styles = StyleSheet.create({

    screen:{
      flex: 15,   
      backgroundColor: Color.first,
      paddingHorizontal: 20,
      paddingVertical: 15,
    
    },

    containerMap: {
      flex:6, 
      marginBottom: 25,     
    },

    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius: 20,
    },

    info:{
      flex:9,
      backgroundColor:"pink",
      borderRadius: 20,
      alignItems:'center',
    },
});
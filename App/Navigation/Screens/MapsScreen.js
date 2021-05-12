import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView, Button, Dimensions, ColorPropType} from 'react-native';
import {dataMap} from '../../Components/Maps/DataMap';
import getDirections from 'expando-react-native-google-maps-directions';
// import Geolocation from '@react-native-community/geolocation';
// geolocation.setRNConfiguration(config);
// Geolocation.getCurrentPosition(info => console.log(info));
import Color from '../../Constant/Color';
import MyCarousel from '../../Components/Maps/Carousel';
import * as Location from 'expo-location';
import {useSelector, useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




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

  

  //const [location, setLocation] = useState({coords : {
  //  latitude: dataMap[0].latitude,
  //  longitude: dataMap[0].longitude}});
//
  const [errorMsg, setErrorMsg] = useState(null);

  const localisation = useSelector ((state) => state.coords);
  console.log(localisation)

  useEffect(()=> {
  },[localisation])

  const back = () => { navigation.goBack()} 

 // useEffect(() => {
 //   (async () => {
 //     let { status } = await Location.requestForegroundPermissionsAsync();
 //     if (status !== 'granted') {
 //       setErrorMsg('Permission to access location was denied');
 //       return;
 //     }
//
 //     let location = await Location.getCurrentPositionAsync({});
 //     setLocation(location);
 //   })();
 // }, []);
//
 


  const [distance, setDistance] = useState(0);
  const [duree, setDuree] = useState(0);

    return (
      <View style={styles.screen}>
       <TouchableOpacity onPress={back} style={{top:38, left: 10 , position : 'absolute'}}>
         <MaterialCommunityIcons name="arrow-left-circle" color={Color.first} size= {37} /> 
       </TouchableOpacity>
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
                >
                  <Image source={require('../../Assets/img/Map/beer.png')} style={{height: 35, width:35 }} />
                </Marker>
                 

              <MapViewDirections
                origin={{latitude: localisation.latitude, longitude:  localisation.longitude}}
                destination={{latitude: dataMap[0].latitude, longitude:  dataMap[0].longitude}}
                apikey={'AIzaSyA3b6kWKtzDr1O2qlDCIG0F7X3ctyS481o'}
                mode="WALKING"
                
                strokeColor= {Color.first}
                strokeWidth={6}
               /// onStart={(params) => {
               ///   console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
               /// }}
                onReady={(result) => {
                 setDistance(result.distance)
                 setDuree(Math.trunc(result.duration))
               
                }}
              />


            </MapView>
            </View>
            <View style={{flex: 5}}>
              <MyCarousel></MyCarousel>
            </View>
            <View style={styles.info}>
              <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={{marginHorizontal : 25}}>
                <View style={{flexDirection : 'row', marginTop: 10, borderBottomWidth: 3, paddingBottom: 5,}}>
                  <Text style={{alignItems:'center',marginRight: 10}}>
                  Distance: <Text style={{color: Color.first, fontWeight:'bold'}}> {distance}  </Text>km
                  </Text>
                  <Text style={{marginLeft: 10}}>
                  Durée: <Text style={{color: Color.first, fontWeight:'bold'}}>{duree} </Text> minutes
                  </Text>
                </View>
            
                <View>
                  <Text style={{fontSize: 18, fontWeight:'bold', borderBottomWidth: 3, paddingBottom: 5 , paddingTop: 10}}>Description</Text>
                  <Text style={{textAlign: "justify"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui eget eros scelerisque auctor id et tellus. Donec sit amet congue urna, vitae euismod neque. Aenean sagittis leo ut porttitor fermentum. Etiam maximus massa quis ultrices eleifend. Aliquam non metus vel nunc varius finibus vel sit amet lacus. Nunc id velit ipsum. Duis vel egestas urna. Nullam gravida sapien eget nunc pellentesque, volutpat mollis est venenatis. Quisque id interdum quam, non tempus ante.

Phasellus eros tellus, condimentum sed vestibulum a, hendrerit vel enim. Donec mollis porttitor nisl ut volutpat. Sed ac aliquam sem. Vivamus eget nisi vitae ex pretium varius. Duis imperdiet, dolor vitae consequat elementum, dui massa bibendum enim, vitae dapibus nunc eros non est. Nunc ac euismod erat. Aenean commodo congue mi, ut finibus diam scelerisque quis. Phasellus pellentesque vehicula lacus, congue vestibulum turpis vestibulum et. Cras iaculis volutpat mollis.

Quisque porta dolor elit, non tincidunt turpis aliquet aliquam. Praesent sollicitudin scelerisque ipsum laoreet commodo. Fusce facilisis ut massa vitae elementum. Donec nec dignissim enim, ac laoreet quam. Curabitur nunc orci, ultrices id iaculis vel, pretium in orci. Vestibulum tincidunt sollicitudin arcu ac faucibus. Ut ac tincidunt arcu, sit amet molestie neque. Mauris a mi quis nisl suscipit pellentesque et id ante. Duis consectetur purus mauris, non cursus velit tristique eu. Praesent efficitur ut dui eu consectetur. Maecenas odio ipsum, ultricies et tortor non, scelerisque malesuada massa. Maecenas in dictum turpis, vel bibendum magna. Pellentesque dapibus urna eget vehicula ornare. Nunc fringilla leo sed erat congue, at pulvinar purus tempus. Duis nec malesuada lorem. Nulla facilisi.
                  </Text>
                  
                </View>
                </View>

              </ScrollView>
            </View>
            <View style={{flex : 2}}></View>
            <TouchableOpacity onPress={travel} style={{ position : 'absolute', right: 15, top: 38}}>
              <View  style={{ backgroundColor: Color.first, width: 110, height: 35, borderRadius: 30, justifyContent:'center', alignContent:'center', alignSelf:"center", textAlign:'center'}}>
                <Text style={{color: "white" , fontSize: 20, fontWeight:'bold',  textAlign:'center'}}>Let's GO</Text>
              </View>
            </TouchableOpacity>
      </View>
  
  );
}

export default function MapsScreen({navigation}) {
  return (
    <Map navigation = {navigation}></Map>
  );
}

const styles = StyleSheet.create({



    screen:{
      flex: 15,   
      backgroundColor: "white",
      paddingHorizontal: 18,
    
    },

    containerMap: {
      flex:7, 
      marginBottom: 25,  
      marginTop: 90,   
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
      backgroundColor:Color.second,
      borderRadius: 20,
      alignItems:'center',
      marginTop: 20,

    },
});
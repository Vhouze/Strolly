import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, {useState,useEffect, version} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView, Button, Dimensions, ColorPropType,Platform, Linking} from 'react-native';
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

  const data = useSelector ((state) => state.barPick);

  const [errorMsg, setErrorMsg] = useState(null);

  const localisation = useSelector ((state) => state.coords);

  useEffect(()=> {
  },[localisation])

  const back = () => { navigation.goBack()} 

 
  const smsOperator = Platform.select({ios: '&', android: '?'});

  const callOperator = Platform.select({ ios : 'tel' , android: 'tel'})
  
  const message = "Hello ! J'ai trouvé un super endroit pour passer un moment ensemble sur Barz. Retrouve-moi à " + data.title + ". L'adresse de l'établissement est la suivante : " + data.address

  const [distance, setDistance] = useState(0);
  const [duree, setDuree] = useState(0);
  const [showHours, setShowHours] = useState(false);
  const [dropdownButtonIcon, setDropdownButtonIcon] = useState("chevron-down");

  function DropdownHours() {
    if (showHours) {
      setDropdownButtonIcon("chevron-down")
      setShowHours(false)
    } else {
      setDropdownButtonIcon("chevron-up")
      setShowHours(true)
    }
  }
    return (
      <View style={styles.screen}>

        <TouchableOpacity onPress={travel} style={{ position : 'absolute', right: 15, top: 38}}>
            <View  style={{ backgroundColor: Color.first, width: 110, height: 35, borderRadius: 30, justifyContent:'center', alignContent:'center', alignSelf:"center", textAlign:'center'}}>
                <Text style={{color: "white" , fontSize: 20, fontWeight:'bold',  textAlign:'center'}}>Let's GO</Text>
            </View>
        </TouchableOpacity>

       <TouchableOpacity onPress={back} style={{top:38, left: 10 , position : 'absolute'}}>
         <MaterialCommunityIcons name="arrow-left-circle" color={Color.first} size= {37} /> 
       </TouchableOpacity>
        <View style={styles.containerMap}>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: localisation.latitude,
                longitude: localisation.longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0221,
                }}
                showsUserLocation={true}
                showsBuildings = {true}
                >
                <Marker
                key= {dataMap[0].id}
                coordinate=
                {{latitude: parseFloat(data.latitude),
                   longitude:  parseFloat(data.longitude)}}
                title={data.title}
                pinColor = {Color.first}
                >
                   </Marker>
                <Marker
                key= {5267}
                coordinate=
                {{latitude:localisation.latitude,
                   longitude:  localisation.longitude}}
                title={data.title}
                pinColor = {Color.second}

                >
                 
    
                </Marker>
                 

              <MapViewDirections
                origin={{latitude: localisation.latitude, longitude:  localisation.longitude}}
                destination={{latitude: parseFloat(data.latitude), longitude:  parseFloat(data.longitude)}}
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
            <View style={{alignContent: 'center', marginBottom: 15,  alignItems: 'center', backgroundColor: Color.first, height: 28, borderRadius: 20, justifyContent:'center'}}>
                <View style={{flexDirection : 'row'}}>
                  <Text style={{alignItems:'center',marginRight: 10 ,fontSize: 18,fontWeight:'bold'}}>
                  Distance: <Text style={{color: 'white', fontWeight:'bold',fontSize: 18,fontWeight:'bold'}}> {distance}  </Text>km
                  </Text>
                  <Text style={{marginLeft: 10,fontSize: 18,fontWeight: 'bold'}}>
                  Durée: <Text style={{color: 'white' , fontWeight:'bold',fontSize: 18,}}>{duree} </Text> minutes
                  </Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false}>

            <View style={{marginRight: 20, flex : 9}}>
            
               <View   numberOfLines={3 }   style={{paddingVertical: 12, flexDirection:'row', flex: 1,  alignItems: 'center', borderTopWidth: 1 , borderTopColor: Color.second, borderBottomWidth: 1, borderBottomColor: Color.second,}}>
                 <MaterialCommunityIcons name="map-marker" color={Color.first} size= {28} style={{marginRight:5}} />
                 <Text> Adresse : <Text> {data.address} </Text></Text>
               </View>

               <View style={{flexDirection:'row', flex: 1,  alignItems: 'center',paddingVertical: 12,   }}>
                 <MaterialCommunityIcons name="antenna" color={Color.first} size= {28} style={{marginRight:5,}}/>
                 <Text> Site : <Text  style={{color:'blue', textDecorationLine: 'underline'}} onPress={() => Linking.openURL('https://'+data.website)}> {data.website} </Text></Text>
               </View>

               <View style={{paddingVertical: 12, flexDirection:'row', flex: 1,  alignItems: 'center',  borderTopWidth: 1 , borderTopColor: Color.second, borderBottomWidth: 1, borderBottomColor: Color.second,}}>
                 <TouchableOpacity onPress={() => Linking.openURL(`${callOperator}:${data.phoneNumber}`)} style={{flexDirection:'row',  alignItems: 'center',  }}>
                    <MaterialCommunityIcons name="phone" color={Color.first} size= {28} style={{marginRight:5}} />
                    <Text > Téléphone : <Text > {data.phoneNumber} </Text></Text>
                 </TouchableOpacity>
               </View>

               <View style={{paddingVertical: 12, flexDirection:'row', flex: 1, alignItems: 'center', borderTopColor: Color.second, borderBottomWidth:1, borderBottomColor: Color.second,}}>
                 <TouchableOpacity onPress={() => Linking.openURL(`sms:${smsOperator}body=${message}`)} style={{flexDirection:'row',  alignItems: 'center'}} >
                     <MaterialCommunityIcons name="account-group" color={Color.first} size= {28} style={{marginRight:5}} />
                     <Text > Partager l'établissement avec un(e) ami(e) </Text>
                 </TouchableOpacity>
               </View>
                
              


               <View style={{flex : 4, marginTop: 5}}>
                <View style={{ flexDirection:'row', alignItems: 'center',}}>
                 <MaterialCommunityIcons name="clock-time-four-outline" color={Color.first} size= {28} style={{marginRight:5}} />
                  <Text style={{fontSize: 17, fontWeight:'bold', marginRight: 10}}>
                      Horaires
                  </Text>
                  <TouchableOpacity onPress={() => {DropdownHours()}} >
                     <MaterialCommunityIcons name={dropdownButtonIcon} color={Color.first} size= {24} />
                  </TouchableOpacity>
                </View>
                {showHours && <View style={{marginLeft: 20, marginTop: 10, }}>
                 <View style={{marginVertical: 3}} >
                   <Text style={{fontSize: 15}} > Lundi : <Text>
                    {data.lundi} </Text> </Text> 
                 </View>
                 <View style={{marginVertical: 3}}>
                   <Text style={{fontSize: 15}} > Mardi : <Text>
                    {data.mardi} </Text> </Text> 
                 </View>
                 <View style={{marginVertical: 3}}>
                   <Text style={{fontSize: 15}} > Mercredi : <Text>
                    {data.mercredi} </Text> </Text> 
                 </View>
                 <View style={{marginVertical: 3}}>
                   <Text style={{fontSize: 15}} > Jeudi : <Text>
                    {data.jeudi} </Text> </Text> 
                 </View>
                 <View style={{marginVertical: 3}}>
                   <Text style={{fontSize: 15}} > Vendredi : <Text>
                    {data.vendredi} </Text> </Text> 
                 </View>
                 <View style={{marginVertical: 3}}>
                   <Text style={{fontSize: 15}} > Samedi : <Text>
                    {data.samedi} </Text> </Text> 
                 </View>
                 <View style={{marginVertical: 3}}>
                   <Text style={{fontSize: 15}} > Dimanche : <Text>
                    {data.samedi} </Text> </Text> 
                 </View>
                 </View>}
                 
            </View>    


            </View>
           </ScrollView>

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
      flex:4, 
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

  
});
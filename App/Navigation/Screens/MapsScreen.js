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
      flex: 10,   
      backgroundColor: "white",
      paddingHorizontal: 18,
    
    },

    containerMap: {
      flex:0, 
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
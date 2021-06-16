import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import {useSelector, useDispatch} from 'react-redux';
import {dataMap} from '../../Components/Maps/DataMap';
import Color from '../../Constant/Color';
import {localisation} from '../../Store/Actions/actions';


// {latitude : 48.862725, longitude: 2.287592} 

export default function LocalisationScreenTwo({navigation}) {
    
  const dispatch = useDispatch();

  const move = () => {navigation.navigate('Mood Screen')};



  const setLocalisation = () => {
     
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(localisation(location));
    })();
     
     navigation.navigate('Mood Screen') 
    
  };


  return (
    <View style={styles.container}>
      <View style= {{ borderBottomLeftRadius:55, borderBottomRightRadius: 55 ,backgroundColor: Color.first , flex : 10, alignContent:'center', justifyContent:'center', alignItems:'center', }}>
          <View style={{flex: 3, paddingTop: 40 }}>
            <Text style={{fontSize: 33, color: Color.second, fontWeight:'bold',borderBottomWidth: 4, borderColor: Color.second  }}>Choix de la localisation</Text>
          </View>
          <View style={styles.slogan}>
            <Text style={{fontSize : 20, textAlign:'center'}}>Nous te conseillons de choisir la localisaiton personnalisée pour une expérience optimale</Text>
          </View>
          <View style={{flex: 4}}>
            <TouchableOpacity onPress={setLocalisation} >
              <View  style={styles.log}>
                <Text style={styles.logText}>Me localiser</Text>
              </View>
            </TouchableOpacity>
        </View>
        </View>
        <View style={{flex : 6,  alignContent:'center', justifyContent:'center', alignItems:'center'}} >
          <TouchableOpacity onPress={move} style={{flex : 4, paddingTop: 70}}  >
      
              <Text style={styles.default}>Prendre Lyon comme position actuelle</Text>
      
          </TouchableOpacity>
          <View style={{flex : 10 , alignContent:'center', justifyContent:'center', alignItems:'center', marginTop: 100, marginBottom: 50}}>
            <Text style={styles.nom}>Trend|by</Text>
          </View>
          </View>
    </View>
  );
}

  
const styles = StyleSheet.create({
  nom:{
    color: Color.first,
    fontWeight:'bold',
    fontSize: 48,
  },
  default:{
    color: Color.first,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 20
  },
  container:{
    flex:1,
    backgroundColor:Color.second, 
  },
  slogan:{
    flex: 3,
    marginHorizontal:20 ,
  },

  logText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 22,
    width: '100%',
    textAlign: 'center',
    
  },
  log:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'black',
    borderRadius: 50,
    width:300,
    height: 60,
  },

});
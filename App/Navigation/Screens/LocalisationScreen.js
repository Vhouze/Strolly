import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import {useSelector, useDispatch} from 'react-redux';
import {dataMap} from '../../Components/Maps/DataMap';
import Color from '../../Constant/Color';
import {localisation} from '../../Store/Actions/actions';


// {latitude : 48.862725, longitude: 2.287592} 

export default function LocalisationScreen({navigation}) {
    
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
      <View style={{alignContent:'center', justifyContent:'center', alignItems:'center', flex : 6}}>
        <Text style={{fontSize: 42, color: Color.second, }}>Bienvenue !</Text>
      </View>
      <View style={styles.slogan}>
        <Text style={{fontSize : 18}}>Nous avons besoin de te localiser afin de te proposer les meilleurs ambiances autour de chez toi.</Text>
      </View>
      <View style={styles.connection}>
        <TouchableOpacity onPress={setLocalisation} >
          <View  style={styles.log}>
            <Text style={styles.logText}>Me localiser</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={move} >
          <View style={{alignContent:'center', justifyContent:'center', alignItems:'center', marginTop: 200}} >
            <Text style={styles.default}>Prendre Lyon comme position actuelle</Text>
          </View>
        </TouchableOpacity>
        <View style={{alignContent:'center', justifyContent:'center', alignItems:'center', marginTop: 100, marginBottom: 50}}>
          <Text style={styles.nom}>Barz</Text>
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
    fontSize: 15
  },
  container:{
    flex:1,
    marginHorizontal:50,
  },
  slogan:{
    flex:3,
    marginHorizontal:20,
    marginBottom: 50,
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
    backgroundColor:Color.first,
    borderRadius: 50,
    width:300,
    height: 60,
    marginVertical: 20,
    marginBottom: 60,
    marginTop: 40,
  },

});
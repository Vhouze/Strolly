import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Color from '../../Constant/Color';
import LottieView from 'lottie-react-native';

// {latitude : 48.862725, longitude: 2.287592} 

export default function LocalisationScreenOne({navigation}) {
    
  const dispatch = useDispatch();

  const move = () => {navigation.navigate('Localisation Screen Two')};



  return (
    <View style={styles.container}>
      <View style={{alignContent:'center', justifyContent:'center', alignItems:'center', flex : 3, }}>
        <Text style={{fontSize: 42, color: Color.second, }}>Bienvenue !</Text>
      </View>
      <View style={{flex: 7, marginBottom: 70}}>
        <LottieView  source={require("../../assets/img/boussole.json")}  autoPlay />
      </View>
      <View style={{ flex: 10, backgroundColor: Color.first, borderTopRightRadius: 65, borderTopLeftRadius: 65}}>
         <View style={styles.slogan}>
           <Text style={{fontSize : 18, textAlign:'center'}}>Nous avons besoin de te localiser afin de te proposer les meilleurs ambiances autour de chez toi.</Text>
         </View>
         <TouchableOpacity onPress={move} style={{borderRadius: 40, marginHorizontal: 50,  backgroundColor: Color.second}} >
           <Text style={{fontSize: 30,color: 'white',  textAlign:'center'}}>Continuer</Text>
         </TouchableOpacity>
           <View style={{alignContent:'center', justifyContent:'center', alignItems:'center', marginTop: 50, marginBottom: 50}}>
             <Text style={styles.nom}>Trend|by</Text>
           </View>
        </View>
    </View>
  );
}

  
const styles = StyleSheet.create({
  nom:{
    color: Color.second,
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
  },
  slogan:{
    marginHorizontal: 30,
    marginBottom: 50,
    paddingTop: 40
   
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
  },

});
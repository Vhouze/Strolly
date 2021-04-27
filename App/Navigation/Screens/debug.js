import React, {useState} from 'react';
import {Animated, View, Text, Button,StyleSheet, Image } from 'react-native';
import Color from '../../Constant/Color';
import * as Animatable from 'react-native-animatable';

export default function debug(navigation) {

    const nextPage = () => {

 
        navigation.navigate(('Swipe Screen'))
        
    
    };



    return (
      
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Color.first }}>
  
        <Button name='next' onPress={nextPage}/>

      </View>



    );
}


const styles = StyleSheet.create({
  
  containerProfil:{
    flexDirection:'row',
    marginVertical: 15,
    alignItems: 'center',
  },

});

import React, {useState} from 'react';
import {Animated, View, Text, Button,StyleSheet, Image } from 'react-native';
import Color from '../../Constant/Color';
import * as Animatable from 'react-native-animatable';

export default function ProfilScreen() {



    return (
      
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Color.first }}>
          <Image 
          style={{width: 160, height: 160,borderRadius: 200 / 2, overflow: "hidden", borderWidth: 3,borderColor: Color.second, alignItems:'center', justifyContent:'center', marginBottom:30, marginTop:30,}} 
          source={{uri: 'https://pbs.twimg.com/profile_images/1377261846827270149/iUn8fDU6_400x400.jpg'}} 
          />
          <View style={styles.containerProfil}>
            <Text style={{fontSize:15}}>Vous êtes connecté en tant que </Text><Text style={{fontSize:24, fontWeight:'bold', color: Color.second }}>Thomas</Text>
          </View>   
  


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

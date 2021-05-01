import React, {useState,useEffect} from 'react';
import {Animated, View, Text, Button,StyleSheet, Image, FlatList } from 'react-native';
import Color from '../../Constant/Color';
import * as Animatable from 'react-native-animatable';
import Emoji from 'react-native-emoji';
import {FavMoodData} from '../../Components/Profil/DataProfil.js';


export default function ProfilScreen() {

console.log(FavMoodData)

const favMoodList = ({item})=>{
  return (
  <View style={{flexDirection:'row'}}>
    <Text>{item.title}</Text>
    <Emoji name={item.emoji} style ={{fonstSize:20}}/>
  </View>
  );

};


    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
          <Image 
          style={{width: 160, height: 160,borderRadius: 200 / 2, overflow: "hidden", borderWidth: 3,borderColor: Color.first, alignItems:'center', justifyContent:'center', marginBottom:30, marginTop:30,}} 
          source={{uri: 'https://pbs.twimg.com/profile_images/1377261846827270149/iUn8fDU6_400x400.jpg'}} 
          /> 
          <View>
            <View style={styles.favMoood}>
              <Text>Tes moods favoris </Text>
              <FlatList
                      scrollEnabled = {false}
                      keyExtractor={(item) => item.id}
                      data={FavMoodData} 
                      renderItem={favMoodList} 
              />
            </View>
            <Text>Tes lieux favoris</Text>
          </View>
      </View>



    );
}


const styles = StyleSheet.create({
  
  favMoood:{
     borderTopColor: Color.first,
     borderBottomColor: Color.first,
     borderTopWidth: 2, 
     borderBottomWidth:2,
     width:'80%'

  },
  containerProfil:{
    flexDirection:'row',
    marginVertical: 15,
    alignItems: 'center',
  },

});

import { View, Text, Button,StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import React , { useRef, useEffect, useState }from 'react';
import Color from '../../Constant/Color';
import MoodList from '../../Components/Mood/MoodList';
import {dataMood} from '../../Components/Mood/DataMood'
import * as Animatable from 'react-native-animatable';

export default function HomeScreen({navigation}) {



const zoomOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  1: {
    opacity: 0,
    scale: 0,
  },
};



      
  const renderMoodList= ({item}) => {
      return <MoodList title={item.title} color={item.color} image={item.image} navigation={navigation}/>
  };
 
    return (




      <View style={{ flex: 1, backgroundColor: Color.first}}>

        <Animatable.View animation="zoomIn" duration = {2000} direction="alternate" style={{flex:1}}>


        <FlatList 
        keyExtractor={(item) => item.id}
        data={dataMood} 
        renderItem={renderMoodList} 
        numColumns={2} /> 
      
        </Animatable.View>


      

        

      
      </View>
    );
  }
  const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
});
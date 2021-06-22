import {ImageBackground ,  View, Text, Button,StyleSheet, FlatList, TouchableOpacity, Platform, StatusBar } from 'react-native';
import React , { useState }from 'react';
import Color from '../../Constant/Color';
import MoodList from '../../Components/Mood/MoodList';
import {dataMood} from '../../Components/Mood/DataMood'
import * as Animatable from 'react-native-animatable';
import {useSelector, useDispatch} from 'react-redux';

export default function HomeScreen({navigation}) {
const user = useSelector((state) => state.connectedUser);


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

        
      <View style={{ flex: 1, }}>
         <ImageBackground source={require('../../assets/img/background.jpg')} style={styles.image}>
        <View style={{ flex: 1}}>
          <StatusBar barStyle = 'dark-content' />
          <View style={{flex: 3, marginTop: 70, marginLeft: 40}}>
            <View style={{flexDirection:'row', marginBottom:10}}>
              <Text style={{ fontSize: 30}}> Hello </Text>
              <Text style={{color: Color.second,fontWeight:'bold',  fontSize: 30}}> {user.pseudo} </Text>
              <Text style={{ fontSize: 30}}> ! </Text>
          </View>
          <View style={{flex: 1}}>
              <Text style={{ fontSize: 20}}> Quel est votre mood aujourd'hui ?</Text>
          </View>
        </View>

        

        <Animatable.View animation="zoomIn" duration = {2000} direction="alternate" style={{flex:21}}>


        <FlatList 
        keyExtractor={(item) => item.id}
        scrollEnabled = {false}
        data={dataMood} 
        renderItem={renderMoodList} 
        numColumns={2} /> 
      
        </Animatable.View>
      </View>
      </ImageBackground>
      </View>
    
    );
  }

  const styles = StyleSheet.create({
    fadingContainer: {
      padding: 20,
      backgroundColor: "powderblue"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  });
import { View, Text, Button,StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Color from '../../Constant/Color';
import MoodList from '../../Components/Mood/MoodList';
import {dataMood} from '../../Components/Mood/DataMood'



export default function HomeScreen({navigation}) {

    const move = () => {navigation.navigate('Swipe Screen')};



      
  const renderMoodList= ({item}) => {
      return <MoodList title={item.title} color={item.color} image={item.image} navigation={navigation}/>
  };
 
      
    
  



    return (
      <View style={{ flex: 1}}>
        <Text>Mood Screen</Text>
        <FlatList 
        keyExtractor={(item) => item.id}
        data={dataMood} 
        renderItem={renderMoodList} 
        numColumns={2} /> 
        <Button onPress={move} title="next"/>


      



      </View>
    );
  }
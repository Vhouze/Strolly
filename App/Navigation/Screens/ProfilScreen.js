import React, {useState,useEffect} from 'react';
import {Animated, View, Text, Button,StyleSheet, Image, FlatList } from 'react-native';
import Color from '../../Constant/Color';
import * as Animatable from 'react-native-animatable';
import Emoji from 'react-native-emoji';
import {FavMoodData} from '../../Components/Profil/DataProfil.js';


export default function ProfilScreen() {



const favMoodList = ({item})=>{
  return (
  <View style={{flexDirection:'row', backgroundColor: Color.second, borderRadius: 20, alignContent: 'center', alignItems: 'center', width: 180, height: 30, justifyContent:'center', marginHorizontal: 7}}>
    <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{item.title}</Text>
    <Emoji name={item.emoji} style ={{fontSize:19, }}/>
  </View>
  );

};


    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <Image 
          style={{width: 160, height: 160,borderRadius: 200 / 2, overflow: "hidden", borderWidth: 3,borderColor: Color.first, alignItems:'center', justifyContent:'center', marginBottom:30, marginTop:30,}} 
          source={{uri: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg'}} 
          /> 
          <Text style={{fontSize: 36}}>Ton Profil</Text>
          </View>
          <View style={{flex: 1}}>
            <View style={styles.cont}>
            <View style={styles.favMoood}>
              <Text style={{fontSize: 20, marginVertical: 15, marginLeft: 20}}>Tes moods favoris </Text>
              <FlatList
                      horizontal={true}
                      keyExtractor={(item) => item.id.toString()}
                      data={FavMoodData} 
                      renderItem={favMoodList} 
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      style={{marginBottom: 20}}
              />
            </View>
            </View>
            <Text style={{fontSize: 20, marginVertical: 15, marginLeft: 20}}> Tes lieux favoris</Text>
            <View style={{marginLeft: 20, backgroundColor: Color.second, borderRadius: 20, alignContent: 'center', alignItems: 'center', width: 110, height: 25, justifyContent:'center', marginHorizontal: 7}}>
            <Text style={{color:'white', fontSize:17, fontWeight:'bold'}}>Cosy café</Text>
   
          </View>
          </View>
      </View>



    );
}


const styles = StyleSheet.create({
  
  cont:{     
    borderTopColor: Color.first,
    borderBottomColor: Color.first,
    borderTopWidth: 2, 
    borderBottomWidth:2,
    width: '90%'
  },
  favMoood:{

     width:'100%'

  },
  containerProfil:{
    flexDirection:'row',
    alignItems: 'center',
  },

});

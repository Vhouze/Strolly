import React, {useState,useEffect} from 'react';
import {Animated, View, Text, Button,StyleSheet, Image,ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import Color from '../../Constant/Color';
import * as Animatable from 'react-native-animatable';
import Emoji from 'react-native-emoji';
import {FavMoodData} from '../../Components/Profil/DataProfil.js';


export default function ProfilScreen({navigation}) {



const favMoodList = ({item})=>{
  return (
  <View style={{flexDirection:'row', backgroundColor: Color.second, borderRadius: 20, alignContent: 'center', alignItems: 'center', width: 180, height: 30, justifyContent:'center', marginHorizontal: 7}}>
    <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{item.title}</Text>
    <Emoji name={item.emoji} style ={{fontSize:19, }}/>
  </View>
  );

};


    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <ImageBackground source={require('../../assets/img/background.jpg')} style={styles.image}>
        <View style={{alignSelf: 'flex-end', marginHorizontal:10, marginVertical: 5}}>
          <TouchableOpacity
            style={{
              borderWidth:3,
              borderColor: Color.first,
              alignItems:'center',
              justifyContent:"center",
              width:60,
              height:60,
              backgroundColor:Color.second,
              borderRadius:60,

            }}
            onPress={() => navigation.navigate('History Screen')}
          >
            <Icon name="hourglass" type='antdesign'  size={38} color={Color.first} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <Image 
          style={{width: 160, height: 160,borderRadius: 200 / 2, overflow: "hidden", borderWidth: 3,borderColor: Color.first, alignItems:'center', justifyContent:'center', marginBottom:30, marginTop:30,}} 
          source={{uri: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg'}} 
          /> 
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
            <View style={{backgroundColor:'white', marginTop: 25, paddingBottom: 25 , marginHorizontal:15, borderTopRightRadius: 42,  borderTopLeftRadius: 42,  borderWidth: 4, borderColor: Color.second }}>
              <Text style={{fontSize: 20, marginVertical: 15, marginLeft: 20}}> Tes lieux favoris</Text>
              <View style={{marginLeft: 20, backgroundColor: Color.second, borderRadius: 20, alignContent: 'center', alignItems: 'center', width: 110, height: 25, justifyContent:'center', marginHorizontal: 7}}>
              <Text style={{color:'white', fontSize:17, fontWeight:'bold'}}>Cosy café</Text>
            </View>
          </View>
          </View>
        </ImageBackground>
      </View>



    );
}


const styles = StyleSheet.create({
  
  cont:{     

    width: '100%',
  },
  favMoood:{
     backgroundColor:'white',
     borderTopRightRadius: 42, 
      borderTopLeftRadius: 42, 
      borderWidth: 4, 
      borderColor: Color.second,
      paddingBottom: 14 ,
      marginHorizontal: 15
    
      
   

  },
  containerProfil:{
    flexDirection:'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

import React, {useState,useEffect} from 'react';
import {Animated, View, Text, Button,StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Color from '../../Constant/Color';
import * as Animatable from 'react-native-animatable';
import Emoji from 'react-native-emoji';
import {FavMoodData} from '../../Components/Profil/DataProfil.js';
//import {data} from '../../test.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const data = [
    {
      "placeUrl": "https://www.google.com/maps/place/L'+Antiquaire/@45.7683331,4.828893,16z/data=!4m9!1m2!2m1!1sbar+lyon+69001!3m5!1s0x47f4eafe19af9dff:0x1842eb2d36a4ec0b!8m2!3d45.7678949!4d4.8306154!15sCg5iYXIgbHlvbiA2OTAwMVogCg5iYXIgbHlvbiA2OTAwMSIOYmFyIGx5b24gNjkwMDGSAQxjb2NrdGFpbF9iYXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnZiVGhIZUVOUkVBRQ?hl=fr",
      "title": "L'Antiquaire",
      "quote": "Cocktails et alcools du monde servis dans un bar tamisé cosy avec murs en briques et ventilateurs vintage.",
      "rating": "4,6",
      "reviewCount": 551,
      "category": "Bar à coquetels",
      "attributes": "·  Service aux tables  ·  Commandes à emporter  ·  Livraison",
      "address": "20 Rue Hippolyte Flandrin, 69001 Lyon, France",
      "plusCode": "QR9J+56 Lyon, France",
      "website": "",
      "phoneNumber": "+33 6 34 21 54 65",
      "jeudi": "18h00–1h00",
      "vendredi": "18h00–3h00",
      "samedi": "18h00–3h00",
      "dimanche": "18h00–1h00",
      "lundi": "18h00–1h00",
      "mardi": "18h00–1h00",
      "mercredi": "18h00–1h00",
      "imgUrl": "https://lh5.googleusercontent.com/p/AF1QipNvFAWZMjyd4eOZEGbLhBzBEHvmDiL4YlR6P53s=w408-h272-k-no",
      "isClaimed": "True",
      "latitude": 45.7679375,
      "longitude": 4.830562499999999,
      "query": "https://www.google.com/maps/search/bar+lyon+69001/@45.7489043,4.8731266,14.02z",
      "timestamp": "2021-05-06T19:12:53.268Z",
      "openingHours": "",
      "mood": "['afterwork']"
    },
    {
      "placeUrl": "https://www.google.com/maps/place/Soul+brothers/@45.7683331,4.828893,16z/data=!4m9!1m2!2m1!1sbar+lyon+69001!3m5!1s0x47f4ebbc3314eea5:0x4af69ee9ed462e77!8m2!3d45.7652348!4d4.8348094!15sCg5iYXIgbHlvbiA2OTAwMVogCg5iYXIgbHlvbiA2OTAwMSIOYmFyIGx5b24gNjkwMDGSAQNiYXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUk5Yemx1V25oUlJSQUI?hl=fr",
      "title": "Soul brothers",
      "quote": "",
      "rating": "5,0",
      "reviewCount": 55,
      "category": "Bar",
      "attributes": "·  Service aux tables",
      "address": "5 Rue Neuve, 69001 Lyon, France",
      "plusCode": "QR8M+4W Lyon, France",
      "website": "bar-soul-brothers-lyon.fr",
      "phoneNumber": "+33 4 82 91 99 33",
      "jeudi": "16h00–1h00",
      "vendredi": "16h00–1h00",
      "samedi": "16h00–1h00",
      "dimanche": "Fermé",
      "lundi": "Fermé",
      "mardi": "16h00–1h00",
      "mercredi": "16h00–1h00",
      "imgUrl": "https://lh5.googleusercontent.com/p/AF1QipNB2QrQv-mDi-n1tnKkrDakFr5PHAnqg9iR8SWR=w494-h240-k-no",
      "isClaimed": "True",
      "latitude": 45.76531249999998,
      "longitude": 4.8348125000000115,
      "query": "https://www.google.com/maps/search/bar+lyon+69001/@45.7489043,4.8731266,14.02z",
      "timestamp": "2021-05-06T19:12:56.738Z",
      "openingHours": "",
      "mood": "['bolDair']"
    },]


export default function SwipeScreen({navigation}) {


    const swipe = (dir) => {
        if (dir == 'left') { let i = i + 1 };

        if (dir== 'right') { navigation.navigate('Maps Screen') };
    };

    const back = () => { navigation.goBack()} 
    


    var attributeClean = data[0].attributes.split(" · ")
    attributeClean=  attributeClean.join(',')
    attributeClean = attributeClean.split('·  ')
    attributeClean = attributeClean.join(',')
    attributeClean = attributeClean.split(',')
    
    for( var j = 0; j < attributeClean.length; j++){ 
    
            if ( attributeClean[j] === '') { 
      
            attributeClean.splice(j, 1); 
        }
    
    };

    
    const attributesRender = ({item})=>{
        return (

        <View style={{flexDirection:'row', backgroundColor: Color.second, borderRadius: 20, alignContent: 'center', alignItems: 'center', height: 30, justifyContent:'center', marginHorizontal: 7}}>
            <Text style={{color:'white', fontSize:15, fontWeight:'bold', paddingHorizontal: 10}}>{item}</Text>
        </View>
     );
  
    };

    return (
      
      <View style={styles.screen}>


  

          <View  style={styles.imgContainer}>
             <Image style={styles.img} source={{uri:data[0].imgUrl}}  />
             <TouchableOpacity onPress={back} style={{top:38, left: 10 , position : 'absolute'}}>
                <MaterialCommunityIcons name="arrow-left-circle" color={'red'} size= {37} /> 
             </TouchableOpacity>
          </View>

          <View  style={styles.txtContainer}>

              <View style={styles.title}>
                  <View style={styles.encadrage}>
                     <Text style = {{fontSize: 35, fontWeight:"bold",}}>{data[0].title}</Text>
                  </View> 
              </View>

              <View style={styles.attributes}>
                <View style={{backgroundColor: Color.first, borderRadius: 20, alignContent: 'center', alignItems: 'center', height: 30, justifyContent:'center', marginBottom: 40, marginHorizontal: 40, }}>
                    <Text style={{fontSize: 25,color:'white',  fontWeight:'bold'}}>{data[0].category}</Text>
                </View>
                <FlatList
                        horizontal={true}
                        keyExtractor={(index) => {index.toString()}}
                        data={attributeClean} 
                        renderItem={attributesRender} 
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={{flex: 1}}
                />

              </View>

              <View style={styles.quote}>
                <Text style={{fontWeight:'bold', textDecorationLine: 'underline', marginBottom:6,}}> Détail du mood: </Text>
                <Text>{data[0].quote}</Text>
              </View>

          <View style={styles.buttonContainer} >

            <TouchableOpacity style={{marginHorizontal: 50}} onPress={() => swipe('left')}>
                <View>
                    <MaterialCommunityIcons name="close-circle" color={Color.second} size= {110} /> 

                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{marginHorizontal: 50}} onPress={() => swipe('right')}>
                <View>
                    <MaterialCommunityIcons name="checkbox-marked-circle" color={Color.first} size= {110} /> 
                </View>
            </TouchableOpacity>

          </View>
              
     </View>






       

      </View>



    );
}


const styles = StyleSheet.create({

  buttonContainer:{
    flex: 2.3,
    flexDirection:'row',
    marginTop: 30
    
    
  },
  quote : {
    flex: 1,
    alignItems:'center', 
    justifyContent:'center',
    marginHorizontal: 10,
    borderWidth: 4,
    borderColor: Color.first,
    borderRadius: 30,

  }, 

  attributes:{
    flex: 1.5,
  },  

  encadrage:{
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: Color.first,  
    borderBottomColor: Color.first,
  },

  title:{
      flex: 1,
      alignItems:'center', 
      justifyContent:'center',



  },

  img:{
    width: '100%',
    height:'100%',
  },

  imgContainer:{
      flex: 4

    },

  txtContainer:{
    borderTopWidth: 9,
    borderTopColor: Color.first,
    flex: 7,
    },
  
  screen:{
      flex:10,
      backgroundColor:'white',

         },


});

import React, {useState,useEffect} from 'react';
import {Animated, View, Text, Button,StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Color from '../../Constant/Color';
import * as Animatable from 'react-native-animatable';
import Emoji from 'react-native-emoji';
import {FavMoodData} from '../../Components/Profil/DataProfil.js';
import database from '../../test.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {barPick} from '../../Store/Actions/actions';

export default function SwipeScreen({navigation}) {

  const [index,setIndex] = useState(0);

  const dispatch = useDispatch();

  const randomInt = function randomNumber() {
    return Math.floor(Math.random() * 10000).toString();
  }
     const data = useSelector ((state) => state.dataBack);

    const swipe = (dir) => {
        if (dir == 'left')
          setIndex(index + 1)

        if (dir== 'right') { 
          dispatch(barPick(data[index]));
          navigation.navigate('Maps Screen') 
      
      };
    };

    const back = () => { navigation.goBack()}     
    useEffect(()=> {
    },[index])


    var attributeClean = data[index].attributes.split(" · ")
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
             <Image style={styles.img} source={{uri:data[index].imgUrl}}  />
             <TouchableOpacity onPress={back} style={{top:38, left: 10 , position : 'absolute'}}>
                <MaterialCommunityIcons name="arrow-left-circle" color={'red'} size= {37} /> 
             </TouchableOpacity>
          </View>

          <View  style={styles.txtContainer}>

              <View style={styles.title}>
                  <View style={styles.encadrage}>
                     <Text numberOfLines={1} adjustsFontSizeToFit style = {{fontSize: 35, fontWeight:"bold",}}>{data[index].title}</Text>
                  </View> 
              </View>

              <View style={styles.attributes}>
                <View style={{backgroundColor: Color.first, borderRadius: 20, alignContent: 'center', alignItems: 'center', height: 30, justifyContent:'center', marginBottom: 40, marginHorizontal: 40, }}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{fontSize: 25,color:'white',  fontWeight:'bold'}}>{data[index].category}</Text>
                </View>
                <FlatList
                        horizontal={true}
                        keyExtractor={randomInt}
                        data={attributeClean} 
                        renderItem={attributesRender} 
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={{flex: 1}}
                />

              </View>

              <View style={styles.quote}>
                <Text style={{fontWeight:'bold', textDecorationLine: 'underline', marginBottom:6,}}> Détail du mood: </Text>
                <Text style={{alignItems:'center' }}>{data[index].quote}</Text>
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
    flex: 1.1,
    alignItems:'center', 
    justifyContent:'center',
    alignContent: 'center',
    marginHorizontal: 10,
    borderWidth: 4,
    borderColor: Color.first,
    borderRadius: 30,
    paddingHorizontal: 30,

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

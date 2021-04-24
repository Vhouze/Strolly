import React , {useState} from 'react';
import * as Animatable from 'react-native-animatable';

import {TouchableOpacity, View, Text, StyleSheet,ImageBackground, Platform, TouchableNativeFeedback} from 'react-native';
import Color from '../../Constant/Color';

const MoodList = function moodList ({navigation, id, title , image}){
  
    const [action,setAction]=useState(null)


    const nextPage = () => {

        setAction ('fadeOut')
        
        setTimeout(() => {
        navigation.navigate(('Swipe Screen'),{title : title})
        setAction (null);}, 1000)
        
        
        ;
    };

    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android'&& Platform.Version >= 21){
        TouchableCmp=TouchableNativeFeedback;
    }
    return(
        <View style={styles.gridItem}>
        <Animatable.View animation={action} duration = {1000}  style={{flex:1}}>
            <TouchableCmp style={{flex:1}} onPress={nextPage}>
      
            <View style={{...styles.container}} >
                <ImageBackground source={{uri:image}} style={styles.bgImage}>
                <Text style ={styles.title} numberofLines={2}>{title}</Text>
                </ImageBackground>
            </View>
        </TouchableCmp>
        </Animatable.View>
    </View>
    );
};




const styles = StyleSheet.create({

    bgImage:{
        width: '100%',
        height:'100%',
        borderRadius: 20,
        justifyContent: 'center',
        overflow: "hidden", 
        borderWidth: 3,
        borderColor: Color.second, 
        
    },

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden': 'visible',
        elevation: 5,
    },
    container: {
        flex:1,
        
        shadowColor: Color.second,
        shadowOpacity: 1,
        shadowRadius: 25,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
        

        

    },
    title:{
        fontSize: 22,
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowRadius:8,
    }
});
    

export default MoodList; 
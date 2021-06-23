import React , {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity, View, Text, StyleSheet,ImageBackground, Platform, TouchableNativeFeedback} from 'react-native';
import Color from '../../Constant/Color';
import {dataBack, moodPick} from '../../Store/Actions/actions';
import {GetShops} from '../../Components/StrollyAPI/Data';

const MoodList = function moodList ({navigation, id, title , image}){


    const getData = (latitude,longitude,rayon,mood) => {
        return (GetShops(latitude,longitude,rayon,mood).then(res => 
          {if (res) {
                if (Object.keys(res).length == 0) {
                    alert("Pas de lieux correspondant à ce mood près de chez vous pour l'instant. Soon!")
                    return "none";
                }
                dispatch(dataBack(res))
                return "ok";
            }
            else
              return null;
          }
        ))
    };
  


    const latitude = useSelector ((state) => state.coords.latitude);
    const longitude = useSelector ((state) => state.coords.longitude);
    const mood = useSelector ((state) => state.moodPick);
    const rayon = 2000

    const dispatch = useDispatch();
    const [action,setAction]=useState(null)


    const nextPage = () => {

        dispatch(moodPick(title));

        getData(latitude,longitude,rayon,title).then((res) => {
            if (res != null && res == "ok")
                navigation.navigate(('Swipe Screen'),{title : title})
            else if (res == null)
                alert("Error: loading failed.")
        });
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
        borderWidth:4,
    

        borderColor: Color.second,
    },

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden': 'visible',
        
    },
    container: {
        flex:1,
        padding: 10,
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
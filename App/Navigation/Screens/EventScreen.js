import { View, Text, Button,StyleSheet, FlatList, Alert, TouchableOpacity, Platform, StatusBar } from 'react-native';
import React from 'react';
import Color from '../../Constant/Color';
import MoodList from '../../Components/Mood/MoodList';
import LottieView from 'lottie-react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function EventScreen({navigation}) {

    const notif = () => {
        Alert.alert(
          "Demande prise en compte",
          "Tu recevras une notification !",
          [
            { text: "OK" }
          ]
        );
    };

    return (
        <View style={{alignItems:"center", flex:1, backgroundColor: Color.second, alignItems: 'center',justifyContent: 'center',}}>
            <LottieView source={require("../../assets/img/confet.json")} loop ={false} autoPlay />
            <View style={{ marginHorizontal: 30,  alignItems: 'center',justifyContent: 'center',}}>   
              <View style={{flex : 5}}>
                <Text style={{borderBottomWidth: 3, borderColor: Color.first , textAlign:'center' ,fontSize: 40,color: Color.first,  fontWeight:'bold', marginVertical:40}}>Trend|by Club </Text>
                <Text style= {{textAlign:'center',fontSize: 20}}>Devient un membre de la communauté et profite de nombreux avantages ! </Text>
              </View>     
                <LottieView  style={{flex : 6, marginBottom: 100,  marginTop: 80}} source={require("../../assets/img/emoji.json")}  autoPlay />
              <View style={{flex :3.3, marginTop: 150}}>
                <Text style={{marginBottom: 40, fontSize: 20}}>Le club arrive bientôt à Lyon, encore un peu de patience...</Text>
                <TouchableOpacity onPress = {notif} style={{borderRadius : 30, alignItems: 'center',justifyContent: 'center', backgroundColor: Color.first}}  >
                    <Text style={{color: 'white', fontSize: 28, fontWeight:'bold', textAlign:'center'}}> Recevoir une notification</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
}
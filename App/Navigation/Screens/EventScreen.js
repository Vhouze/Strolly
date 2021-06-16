import { View, Text, Button,StyleSheet, FlatList, TouchableOpacity, Platform, StatusBar } from 'react-native';
import React from 'react';
import Color from '../../Constant/Color';
import MoodList from '../../Components/Mood/MoodList';
import LottieView from 'lottie-react-native';


export default function EventScreen({navigation}) {

    const notif = = () => {
      };

    return (
        <View style={{alignItems:"center", flex:1, backgroundColor: Color.second}}>
            <Text>Trend|by Club </Text>
            <Text>Devient un membre de la communauté Trend|by et profite de nombreux avantages ! </Text>
             <LottieView source={require("../../assets/img/emoji.json")}  autoPlay />
            <LottieView source={require("../../assets/img/confet.json")} loop ={false} autoPlay />
            <Text>Le club arrive bientôt à Lyon, encore un peu de patience...</Text>
            <TouchableOpacity>
                <Text> Recevoir une notification</Text>
            </TouchableOpacity>
        </View>
    )
}
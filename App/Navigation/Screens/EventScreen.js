import { View, Text, Button,StyleSheet, FlatList, TouchableOpacity, Platform, StatusBar } from 'react-native';
import React from 'react';
import Color from '../../Constant/Color';
import MoodList from '../../Components/Mood/MoodList';

export default function EventScreen({navigation}) {
    return (
        <View style={{alignItems:"center"}}>
            <Text style={{justifyContent: "center"}}>Event Screen</Text>
        </View>
    )
}
import React, {useState,useEffect} from 'react';
import {View, Text, Button,StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import {HistoryItem} from "./../../Components/Profil/DataHistory"
import Color from '../../Constant/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

export default function HistoryScreen({navigation}) {
    const data = useSelector ((state) => state.history);

    const renderHistory = ({item})=>{
        return (<HistoryItem navigation={navigation} id={item.id} title={item.title} rating={item.rating} comment={item.comment}/>);
    };

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{top:22, left: 10 , position : 'absolute'}}>
                    <MaterialCommunityIcons name="arrow-left-circle" color={Color.first} size= {37} /> 
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20}}>
                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 25, margin: 10}}>Historique des activités</Text>
                </View>
                <View style={styles.cont}>
                    <FlatList
                        keyExtractor={(item) => item.id.toString()}
                        data={data} 
                        renderItem={renderHistory} 
                        style={{marginBottom: 20}}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{     
      borderTopColor: Color.first,
      borderBottomColor: Color.first,
      borderTopWidth: 2, 
      borderBottomWidth:2,
      alignItems:"center",
    },
});
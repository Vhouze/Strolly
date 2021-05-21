import React from 'react';
import {Rating} from "./../Model"
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import Color from '../../Constant/Color';

export  const dataHistory = [
    new Rating(0, "Cafe theatre", 4, "plutot pas mal pour passer l'apres midi"),
    new Rating(1, "Docks", 5, "Bar parfait pour revoir ses potes"),
    new Rating(2, "Mac Carthy", 3, "Les billards sont vraiment pas mal mais sinon c'est bondé h24")
];

export function HistoryItem({id, title, rating, comment}) {
    return (
        <View style={styles.box}>
            <View>
                <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{title}</Text>
            </View>
            <View style={{flexDirection:"column", alignItems: "flex-start", flexWrap:"wrap", flex:1}}>
                <Text style={{width:"50%", color:'white', fontSize:20, fontWeight:'bold'}}>{"Avis : " + rating + "/5"}</Text>
                <Text style={{width:"50%", color:'white', fontSize:20, fontWeight:'bold'}}>{comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{     
        backgroundColor: Color.second,
        borderRadius: 20,
        width: 350,
        height: 100,
        marginHorizontal: 7,
        marginVertical: 7,
        padding: 2,
    },

  });
  
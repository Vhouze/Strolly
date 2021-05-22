import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Color from '../../Constant/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function HistoryItem({navigation, id, title, rating, comment}) {
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const starImgFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png"
    const starImgCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png"

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= rating
                                            ? {uri: starImgFilled}
                                            : {uri: starImgCorner}
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={styles.box}>
            <View style={{flexDirection:"row", alignItems: "flex-start", flexWrap:"wrap", flex:1}}>
                <Text style={{flex: 1,color:'white', fontSize:20, fontWeight:'bold'}}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Review Edit Screen", {id: id, title: title, rating: rating, comment: comment})}>
                    <MaterialCommunityIcons name="pencil-outline" color={'white'} size= {29} /> 
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"column", alignItems: "flex-start", flexWrap:"wrap", flex:1}}>
                <View style={{flexDirection:"column", width: "50%"}}>
                    <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Avis donné:</Text>
                    <CustomRatingBar/>
                </View>
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
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: "row",
    },
    starImgStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    }
  });
  
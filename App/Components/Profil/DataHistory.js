import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
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
            <View style={styles.titleBox}>
                <Text style={{flex: 1,color:'white', fontSize:20, textAlign: "center"}}>{title}</Text>
                <TouchableOpacity style={{margin: 2}} onPress={() => navigation.navigate("Review Edit Screen", {id: id, title: title, rating: rating, comment: comment})}>
                    <MaterialCommunityIcons name="pencil-outline" color={'white'} size= {29} /> 
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems: "flex-start", flex:1}}>
                <View style={{flexDirection:"column", width: "50%"}}>
                    <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Avis donné:</Text>
                    <CustomRatingBar/>
                </View>
                <ScrollView>
                    <Text style={{ color:Color.second, fontSize:10, fontWeight:'bold'}}>{comment}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{     
        backgroundColor: Color.second,
        borderRadius: 2,
        width: 350,
        height: 100,
        marginHorizontal: 7,
        marginVertical: 7,
        padding: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5
        
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: "row",
    },
    starImgStyle: {
        width: 16,
        height: 16,
        resizeMode: 'cover'
    },
    titleBox: {
        flexDirection:"row",
        alignItems: "flex-start",
        flexWrap:"wrap",
        flex:1,
    }
  });
  
import React, {useState,useEffect} from 'react';
import {View, Text, Button,StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import {HistoryItem} from "./../../Components/Profil/DataHistory"
import Color from '../../Constant/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import { updateHistory } from "./../../Store/Actions/actions"

export default function ReviewEditScreen({route, navigation}) {
    const dispatch = useDispatch();
    const {id, title} = route.params;
    const [rating, setRating] = useState(route.params.rating);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [comment, setComment] = useState(route.params.comment);
    const starImgFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png"
    const starImgCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png"

    function Confirm() {
        //TODO send rating and comment in db
        dispatch(updateHistory({id: id, title: title, comment: comment, rating: rating}));
        alert("Review updated!");
        navigation.goBack();
    }
    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setRating(item)}
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
    return(
        <View>
            <View  style={styles.imgContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{top:22, left: 10 , position : 'absolute'}}>
                    <MaterialCommunityIcons name="arrow-left-circle" color={'red'} size= {37} /> 
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20}}>
                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 25, margin: 10}}>Modifier l'avis</Text>
                </View>
                <View style={styles.cont}>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>{title}</Text>
                    <CustomRatingBar/>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => setComment(value)}
                        value={comment}
                    />
                    <TouchableOpacity onPress={() => Confirm()}
                        style={{borderWidth:2,
                            borderColor: Color.first,
                            borderRadius: 20,
                            width: 50,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text>Valider</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    cont:{
      borderTopColor: Color.first,
      borderBottomColor: Color.first,
      borderTopWidth: 2, 
      borderBottomWidth:2,
      width: '90%',
      padding: 10,
      alignItems: 'center',
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: "row",
        marginTop: 30
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    }
});
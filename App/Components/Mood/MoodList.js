import React from 'react';

import {TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback} from 'react-native';

const MoodList = function moodList ({navigation, id, title , image}){

    const nextPage = () => {navigation.navigate(('Swipe Screen'),{title : title})};

    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android'&& Platform.Version >= 21){
        TouchableCmp=TouchableNativeFeedback;
    }
    return(
        <View style={styles.gridItem}>
            <TouchableCmp style={{flex:1}}
            onPress={nextPage}>
            <View style={{...styles.container,...{backgroundColor: 'white'}}} >
                <Text style ={styles.title} numberofLines={2}>{title}</Text>
            </View>
        </TouchableCmp>
    </View>
    );
};




const styles = StyleSheet.create({
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
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0 , height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title:{
        fontSize: 22,
        textAlign: 'right',
    }
});
    

export default MoodList; 
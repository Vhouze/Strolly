import React, {useState} from 'react';
import {Animated, View, Text, Button,StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';

export default function ProfilScreen() {

  const value = useState(new Animated.ValueXY({x:0, y:0}))[0]

  function moveBall(){ 
    Animated.timing(value, { 
      toValue: { x: 100, y:100 },
      duration:1000,
      useNativeDriver: false
    }).start()
  }

    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.View style={value.getLayout()}>
          <View style={{ width:100, height: 100, borderRadius: 100/2, backgroundColor:'red' }}/>
        </Animated.View>
        <TouchableOpacity onPress={moveBall}><Text>Click</Text></TouchableOpacity>
      </View>
    );
}


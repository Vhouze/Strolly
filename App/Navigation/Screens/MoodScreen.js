import { View, Text, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {

    const move = () => {navigation.navigate('Swipe Screen')};

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mood Screen</Text>
        <Button onPress={move} title="next"/>
      </View>
    );
  }
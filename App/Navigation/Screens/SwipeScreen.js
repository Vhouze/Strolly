import { View, Text, Button } from 'react-native';
import * as React from 'react';

export default function SwipeScreen({navigation}) {

  const move = () => {navigation.navigate('Maps Screen')};

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Swipe Screen</Text>
        <Button onPress={move} title="next"/>
      </View>
    );
  }

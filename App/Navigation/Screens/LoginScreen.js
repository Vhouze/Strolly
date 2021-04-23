import { View, Text, Button } from 'react-native';
import * as React from 'react';

export default function LoginScreen({navigation}) {

    const move = () => { navigation.navigate('Mood Screen')};

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button onPress={move} title="next"/>
      </View>
    );
  }

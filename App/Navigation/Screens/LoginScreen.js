import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { render } from 'react-dom';
import Color from '../../Constant/Color';
import {GetCafe} from '../../Components/StrollyAPI/Data';


export default function LoginScreen({navigation}) {
  const [email, setText] = useState('Guest');
  const [password, setPass] = useState('');  
  const move = () => {
    navigation.navigate('Mood Screen')
  };

  const moveLogin = () => {
    navigation.navigate('Sign Screen')
  };

  const getData = () => {
    GetCafe().then(res => 
      {if (res) {
        console.log("1er element :")
        console.log(res[0])
      }
        else
          alert("data loading failed.")
      })  
  };


  return (
    <View style={styles.container}>
      <StatusBar barStyle = 'dark-content' />
      <Text style={styles.logo}>Barz</Text>
      <Button onPress={getData} title='lol'/>
      <View style={styles.slogan}>
        <Text style={{fontSize : 20}}>L'ambiance en un clic</Text>
      </View>
      <View style={styles.connection}>
        <TouchableOpacity onPress={moveLogin} >
          <View  style={styles.log}>
            <Text style={styles.logText} >Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={move} >
          <View  style={styles.log}>
            <Text style={styles.logText}> Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={move} >
          <View  style={styles.log}>
            <Text style={styles.logText} >Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={{color: Color.second , fontSize: 16}}>Ici pour la première fois ?  </Text>
          <TouchableOpacity onPress={moveLogin}>
            <Text style={styles.loginTextBis}>Sign up</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

  
const styles = StyleSheet.create({
  slogan:{
    flex:1,
    marginHorizontal:50,
  },
  connection:{
    flex:5,    
  },
  logText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 22,
    width: '100%',
    textAlign: 'center',
  },
  log:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Color.first,
    borderRadius: 50,
    width:300,
    height: 60,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:70,
    color:Color.first,
    flex:3,
    marginTop: 90,
  },
  bottom:{
    flex:2,
    flexDirection:'row',
  },
  loginTextBis :{
    color:Color.first,
    fontWeight:'bold',
    fontSize: 16,
  }
  
});
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { render } from 'react-dom';
import {Strolly_postRegister, Strolly_postLogin} from '../../Components/StrollyAPI/User';
import Color from '../../Constant/Color';

export default function SignScreen({navigation}) {
  const [email, setText] = useState('');
  const [password, setPass] = useState('');  
  const login = () => {
    Strolly_postLogin(email, password).then(res => 
      {if (res)
        navigation.navigate('Mood Screen')
        else
          alert("login failed.")
      })  
  };
  const move = () => {
    navigation.navigate("Localisation Screen")
  }
  const register = () => {
    if (email == "" || password == "")
      return;
    Strolly_postRegister(email, password).then(res => 
      {if (res)
        alert("account created.")
        else
          alert("account creation failed.")
      })  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Trendby</Text>
      <View style={styles.slogan}>
        <Text style={{fontSize : 20, marginBottom: 40}}>L'ambiance en un clic</Text>
      </View>
    
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Username..." 
          placeholderTextColor="white"
          onChangeText={email => setText(email)}
          // value={state.email}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="white"
          onChangeText={password => setPass(password)}
          />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={login} style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={register}  style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={move}>
        <Text style={styles.loginTextBis}>Continue as Guest</Text>
      </TouchableOpacity>
     
    </View>
  );
}

  
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color: Color.first,
    marginBottom:40,
  },
  inputView:{
    width:"80%",
    backgroundColor: Color.second,
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:Color.first,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
    fontSize: 20,
    fontWeight:'bold',
  },
  loginTextBis:{
    margin: 15,
    color:"grey"
  },

  slogan:{

    marginHorizontal:50,
  },
});
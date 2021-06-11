import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView  } from 'react-native';
import React, { useState } from 'react';
import { render } from 'react-dom';
import {useDispatch} from 'react-redux';
import {Strolly_postRegister, Strolly_postLogin} from '../../Components/StrollyAPI/User';
import Color from '../../Constant/Color';
import {loginUser} from "../../Store/Actions/actions"

export default function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setText] = useState('');
  const [password, setPass] = useState('');  
  const register = () => {
    if (email == "" || password == "")
      return;
    Strolly_postRegister(email, password).then(res => 
      {if (res) {
        alert("account created.")
        navigation.navigate('Sign Screen')
      } else
          alert("account creation failed.")
      })  
  };
  const move = () => {
    dispatch(loginUser({id: 0, pseudo: "Invité"}))
    navigation.navigate("Localisation Screen")
  }
  const moveLogin = () => {
    navigation.navigate('Sign Screen')
  };

  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.upScreen}>
        <View style={styles.topNav}>
          <TouchableOpacity style={styles.registerContainer} onPress={moveLogin} >
            <Text style={styles.register}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.content}>Ready to register to our Application and find the best place to drink ?</Text>
      </View>
      <View style={styles.downScreen}>
        <View style={styles.inputContainer}>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Username..." 
              placeholderTextColor="grey"
              onChangeText={email => setText(email)}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="grey"
              onChangeText={password => setPass(password)}
              />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={register} >
            <View  style={styles.signin}>
              <Text style={styles.signinText} >Sign Up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={move}>
            <Text style={styles.loginTextBis}>Continue as Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
}

  
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Color.second,
  },
  upScreen: {
    flex: 4,
  },
  downScreen: {
    flex: 4,
    backgroundColor: Color.first,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  topNav: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    height: 25,
  },
  arrow: {
    width: 18,
    height: 18,
  },
  registerContainer: {
    flex: 1,
  },
  register: {
    flex: 1,
    color: 'black',
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    marginLeft: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto',
    flex: 2,
  },
  content: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 24,
    flex: 3,
    marginLeft: 20,
    marginRight: 6,
  },
  inputContainer: {
    flex: 3,
    alignItems: 'center',
    margin: 20,
  },
  buttonContainer: {
    flex: 5,
  },
  inputView:{
    width:"80%",
    backgroundColor: 'white',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent: 'center',
    padding:20,
    flex: 1,
  },
  inputText:{
    height:50,
    color:"black"
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  signin: {
    // width: '80%',
    // backgroundColor: 'black',
    // borderRadius: 25,
    // margin: 20,
    // justifyContent: 'center'
    backgroundColor: 'black',
    borderRadius:25,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 10,
    height: 50,
  },
  signinText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  logGoogle: {
    backgroundColor: 'white',
    borderRadius:25,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 10,
    height: 50,
    flexDirection: 'row',
  },
  logoGoogle: {
    margin: 20,
    width: 38,
    height: 38,
  },
  logTextGoogle: {
    flex: 9,
    fontWeight: 'bold',
    color: 'grey',
  },
  logFacebook: {
    backgroundColor: "#1877F2",
    borderRadius:25,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 10,
    height: 50,
    flexDirection: 'row',
  },
  logoFacebook: {
    margin: 20,
    width: 40,
    height: 40,
  },
  logTextFacebook: {
    flex: 9,
    fontWeight: "bold",
    color: 'white',
  },
  blank: {
    flex: 1,
  },
  loginTextBis: {
    color: 'black',
    textAlign: 'right',
    margin: 20,
  }
  // logo:{
  //   fontWeight:"bold",
  //   fontSize:50,
  //   color: Color.first,
  //   marginBottom:40,
  // },
  // forgot:{
  //   color:"white",
  //   fontSize:11
  // },
  // loginBtn:{
  //   width:"80%",
  //   backgroundColor:Color.first,
  //   borderRadius:25,
  //   height:50,
  //   alignItems:"center",
  //   justifyContent:"center",
  //   marginTop:40,
  //   marginBottom:10
  // },
  // loginText:{
  //   color:"white",
  //   fontSize: 20,
  //   fontWeight:'bold',
  // },
  // loginTextBis:{
  //   margin: 15,
  //   color:"grey"
  // },

  // slogan:{

  //   marginHorizontal:50,
  // },
});
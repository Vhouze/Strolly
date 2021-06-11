import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView  } from 'react-native';
import React, { useState } from 'react';
import { render } from 'react-dom';
import {useDispatch} from 'react-redux';
import {Strolly_postRegister, Strolly_postLogin} from '../../Components/StrollyAPI/User';
import Color from '../../Constant/Color';
import {loginUser} from "../../Store/Actions/actions"

export default function SignScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setText] = useState('');
  const [password, setPass] = useState('');  
  const login = () => {
    Strolly_postLogin(email, password).then(res => 
      {
        if (res) {
          dispatch(loginUser({id: res.id, pseudo: res.pseudo}))
          navigation.navigate('Mood Screen')
        }
        else
          alert("login failed.")
      })  
  };
  const move = () => {
    dispatch(loginUser({id: 0, pseudo: "Invité"}))
    navigation.navigate("Localisation Screen")
  }
  const moveSignup = () => {
    navigation.navigate('Register Screen')
  };

  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.upScreen}>
        <View style={styles.topNav}>
          <TouchableOpacity style={styles.registerContainer} onPress={moveSignup} >
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.content}>We will give you the place you deserve for a drink. Ready to sign in and find the best place to drink ?</Text>
      </View>
      <View style={styles.downScreen}>
        <View style={styles.inputContainer}>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Username..." 
              placeholderTextColor="grey"
              onChangeText={email => setText(email)}
              // value={state.email}
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
        <View style={styles.viewForgot}>
          <Text style={styles.forgot}>forgot password ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={login} >
            <View  style={styles.signin}>
              <Text style={styles.signinText} >Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={move} >
            <View  style={styles.logGoogle}>
              <Image style={styles.logoGoogle} source={require('../../assets/logo_google.png')}/>
              <Text style={styles.blank}></Text>
              <Text style={styles.logTextGoogle} >Continue with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={move} >
            <View  style={styles.logFacebook}>
              <Image style={styles.logoFacebook} source={require('../../assets/logo_facebook.png')}/>
              <Text style={styles.blank}></Text>
              <Text style={styles.logTextFacebook}> Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={move}>
            <Text style={styles.loginTextBis}>Continue as Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text style={styles.logo}>Trendby</Text>
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
      </TouchableOpacity> */}

    </SafeAreaView >
  );
}

  
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Color.second,
  },
  upScreen: {
    flex: 2,
  },
  downScreen: {
    flex: 3,
    backgroundColor: Color.first,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  topNav: {
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
  viewForgot: {
    flex: 1,
  },
  buttonContainer: {
    flex: 6,
  },
  forgot: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'Roboto',
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
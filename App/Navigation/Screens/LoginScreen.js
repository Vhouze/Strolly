import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, StatusBar, Image, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { render } from 'react-dom';
import Color from '../../Constant/Color';
import {GetShops} from '../../Components/StrollyAPI/Data';


export default function LoginScreen({navigation}) {
  const [email, setText] = useState('Guest');
  const [password, setPass] = useState('');  

  const moveLogin = () => {
    navigation.navigate('Sign Screen')
  };
  const moveSignup = () => {
    navigation.navigate('Register Screen')
  };
  const getData = () => {
    GetShops(0.00, 0.00, 0, "bolDair").then(res => 
      {if (res) {
        console.log(Object.keys(res).length)
        console.log("1er element :")
        console.log(res[0])
      }
        else
          alert("data loading failed.")
      })  
  };


  return (
    // <View style={styles.container}>
    //   <StatusBar barStyle = 'dark-content' />
    //   <Text style={styles.logo}>Trendby</Text>
    //   <View style={styles.slogan}>
    //     <Text style={{fontSize : 20}}>L'ambiance en un clic</Text>
    //   </View>
    //   <View style={styles.connection}>
    //     <TouchableOpacity onPress={moveLogin} >
    //       <View  style={styles.log}>
    //         <Text style={styles.logText} >Login</Text>
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={move} >
    //       <View  style={styles.log}>
    //         <Text style={styles.logText}> Continue with Facebook</Text>
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={move} >
    //       <View  style={styles.log}>
    //         <Text style={styles.logText} >Continue with Google</Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.bottom}>
    //     <Text style={{color: Color.second , fontSize: 16}}>Ici pour la première fois ?  </Text>
    //       <TouchableOpacity onPress={moveLogin}>
    //         <Text style={styles.loginTextBis}>Sign up</Text>
    //       </TouchableOpacity>
    //     </View>
    // </View>
    <SafeAreaView  style={styles.container}>
      <View style={styles.upScreen}>
        <StatusBar barStyle = 'dark-content' />
        <Image style={styles.logo} source={require('../../assets/logo.png')}/>
        <Text style={styles.logofont}>Trend|by</Text>
      </View>
      <View style={styles.lowScreen}>
        <Text style={styles.welcome}>Bonjour</Text>
        <Text style={styles.content}>Merci d'avoir téléchargé Trend|by ! Pour que te conseiller des sorties sur mesure, nous avons besoin de savoir qui tu es.  </Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={moveLogin} >
            <View  style={styles.signin}>
              <Text style={styles.signinText} >Se connecter</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.div}></Text>
          <TouchableOpacity onPress={moveSignup} >
            <View  style={styles.signup}>
              <Text style={styles.signupText} >S'inscrire</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
}

  
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.first,
    justifyContent:'center',
    flex: 1,
  },
  upScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width:105,
    height: 165,
    alignItems: 'center',
    justifyContent:'center',
  },
  logofont: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 50,
    color:Color.second,
  },
  lowScreen: {
    backgroundColor: Color.second,
    justifyContent: 'center',
    flex: 1,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  welcome: {
    margin: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto',
    flex: 1,
  },
  content: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 24,
    flex: 2,
    marginLeft: 20,
    marginRight: 6,
  },
  buttons: {
    flexDirection: 'row',
    flex: 1,
    // alignContent: 'space-between',
    // margin: 20,
    // alignContent: 'space-between',
  },
  // slogan:{
  //   flex:1,
  //   marginHorizontal:50,
  // },
  // connection:{
  //   flex:5,    
  // },
  signin:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    width: 150,
    height: 40,
    margin: 20,
    marginTop: 0,
  },
  signup:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 150,
    height: 40,
    margin: 20,
    marginTop: 0,
  },
  signinText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
  },
  signupText: {
    color:'black',
    fontWeight:'bold',
    alignItems: 'center',
    fontSize: 22,
    textAlign: 'center',
  },
  div: {
    flex: 1,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // logo:{
  //   fontWeight:"bold",
  //   fontSize:70,
  //   color:Color.first,
  //   flex:3,
  //   marginTop: 90,
  // },
  // bottom:{
  //   flex:2,
  //   flexDirection:'row',
  // },
  // loginTextBis :{
  //   color:Color.first,
  //   fontWeight:'bold',
  //   fontSize: 16,
  // }
  
});
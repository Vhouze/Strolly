import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { render } from 'react-dom';

function check_id(email, password) {
  console.log(email)
  console.log(password)  
  return;
}

export default function LoginScreen({navigation}) {
  const [email, setText] = useState('Guest');
  const [password, setPass] = useState('');  
  const move = () => {
    check_id(email, password);
    navigation.navigate('Mood Screen')
  };
  return (
    <View style={styles.container}>
    <Text style={styles.logo}>Strolly</Text>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="#003f5c"
        onChangeText={email => setText(email)}
        // value={state.email}
      />
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"
        onChangeText={password => setPass(password)}
        />
    </View>
    <TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={move} style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.loginText}>Signup</Text>
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
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
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
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  loginTextBis:{
    margin: "15px",
    color:"grey"
  }
});
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import LoginScreen from './Screens/LoginScreen';
import MapsScreen from './Screens/MapsScreen';
import MoodScreen from './Screens/MoodScreen';
import SwipeScreen from './Screens/SwipeScreen';
import ProfilScreen from './Screens/ProfilScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const MainNavigator = function mainNavigator ({navigation}){

  return (
  
    <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen"
          screenOptions={{
            headerStyle: {backgroundColor:  "yellow"},
            headerTintColor: 'black',
            headerTitleStyle: {fontWeight: 'bold'}}}>
            
          <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
          />

          <Stack.Screen
            name="Mood Screen"
            component={TabNavigator}

          />

          <Stack.Screen
          name="Swipe Screen"
          component={SwipeScreen}
          />

          <Stack.Screen
          name="Maps Screen"
          component={MapsScreen}
          />  

        </Stack.Navigator>
    </NavigationContainer>



  );
};

const TabNavigator = function TabNavigator()  {
  return(
      <Tab.Navigator tabBarOptions= { {activeTintColor: 'yellow', labelStyle: { fontSize: 5}, showLabel: false, activeBackgroundColor: 'yellow', height: 2, backgroundColor: 'yellow',}}>
            <Tab.Screen name="Mood Screen" component={MoodScreen} options={{tabBarIcon: () => (<MaterialCommunityIcons name="home" color={'#2E90FF'} size= {35} /> ) }} />
            <Tab.Screen name="Profil Screen" component={ProfilScreen}  options={{ tabBarIcon: () => (<MaterialCommunityIcons name="account" color={'#2E90FF'} size= {35} /> ) }}/>
      </Tab.Navigator>
 
  );  
};


export default MainNavigator;
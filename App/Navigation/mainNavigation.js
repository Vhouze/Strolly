import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import React, {Platform, useState, useEffect} from 'react';
import LoginScreen from './Screens/LoginScreen';
import MapsScreen from './Screens/MapsScreen';
import MoodScreen from './Screens/MoodScreen';
import SwipeScreen from './Screens/SwipeScreen';
import ProfilScreen from './Screens/ProfilScreen';
import LocalisationScreen from './Screens/LocalisationScreen';
import Color from '../Constant/Color';
import SignScreen from'./Screens/SignScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const MainNavigator = function mainNavigator ({navigation}){



  
  return (
  
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Login Screen"
          screenOptions={{
            headerShown: false
          }}>
            
          <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
          />

          <Stack.Screen
            name="Mood Screen"
            component={TabNavigator}
            options={{title : "Home"}}

          />

          <Stack.Screen
          name="Swipe Screen"
          component={SwipeScreen}
          options={({route}) => ({title : route.params.title})}
          />

          <Stack.Screen
          name="Maps Screen"
          component={MapsScreen}
          />  
          
          <Stack.Screen
          name="Sign Screen"
          component={SignScreen}
          />  

          <Stack.Screen
          name="Localisation Screen"
          component={LocalisationScreen}
          />  



          


          


        </Stack.Navigator>
    </NavigationContainer>



  );
};

const TabNavigator = function TabNavigator()  {
  return(
      <Tab.Navigator tabBarOptions= { {activeTintColor: Color.second, labelStyle: { fontSize: 5}, showLabel: false, activeBackgroundColor:Color.second , height: 2, backgroundColor: Color.second,}}>
            <Tab.Screen name="Mood Screen" component={MoodScreen} options={{tabBarIcon: () => (<MaterialCommunityIcons name="home" color={Color.first} size= {35} /> ) }} />
            <Tab.Screen name="Profil Screen" component={ProfilScreen}  options={{ tabBarIcon: () => (<MaterialCommunityIcons name="account" color={Color.first} size= {35} /> ) }}/>
      </Tab.Navigator>
 
  );  
};


export default MainNavigator;
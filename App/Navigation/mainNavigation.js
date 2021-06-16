import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import React, {Platform, useState, useEffect} from 'react';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import MapsScreen from './Screens/MapsScreen';
import MoodScreen from './Screens/MoodScreen';
import SwipeScreen from './Screens/SwipeScreen';
import ProfilScreen from './Screens/ProfilScreen';
import LocalisationScreen from './Screens/LocalisationScreen';
import Color from '../Constant/Color';
import SignScreen from'./Screens/SignScreen';
import HistoryScreen from'./Screens/HistoryScreen';
import ReviewEditScreen from'./Screens/ReviewEditScreen';
import EventScreen from'./Screens/EventScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const MainNavigator = function mainNavigator ({navigation}){



  
  return (
  
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Event Screen"
          screenOptions={{
            headerShown: false
          }}>
            
            <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
          />
          
          <Stack.Screen
          name="Register Screen"
          component={RegisterScreen}
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

          <Stack.Screen
          name="History Screen"
          component={HistoryScreen}
          />

          <Stack.Screen
          name="Review Edit Screen"
          component={ReviewEditScreen}
          />


        </Stack.Navigator>
    </NavigationContainer>



  );
};

const TabNavigator = function TabNavigator()  {
  return(
      <Tab.Navigator tabBarOptions= { { activeTintColor: Color.first, inactiveTintColor: Color.second, showLabel: false, height: 1}}>
            <Tab.Screen name="Mood Screen" component={MoodScreen} options={{tabBarIcon: ({focused, color}) => (<MaterialCommunityIcons name="home" color={color} size= {27} style={{borderTopColor: focused ? Color.first: "white", borderTopWidth: 2}}/> ) }} />
            <Tab.Screen name="Profil Screen" component={ProfilScreen}  options={{ tabBarIcon: ({focused, color}) => (<MaterialCommunityIcons name="account" color={color} size= {27} style={{borderTopColor: focused ? Color.first: "white", borderTopWidth: 2}}/> ) }}/>
            <Tab.Screen name="Event Screen" component={EventScreen}  options={{ tabBarIcon: ({focused, color}) => (<MaterialCommunityIcons name="ticket-percent" color={color} size= {27} style={{borderTopColor: focused ? Color.first: "white", borderTopWidth: 2}}/> ) }}/>
      </Tab.Navigator>
  );  
};


export default MainNavigator;
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
import debug from './Screens/debug';
import Color from '../Constant/Color';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const MainNavigator = function mainNavigator ({navigation}){

  return (
  
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Login Screen"
          screenOptions={{
            headerStyle: {backgroundColor:  Color.second},
            headerTintColor: Color.third,
            headerTitleStyle: {fontWeight: 'bold'}}}>
            
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
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import MapsScreen from './components/MapsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Page d'accueil"}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profil"}}/>
        <Stack.Screen name="Maps" component={MapsScreen} options={{ title: "Maps"}}/>        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

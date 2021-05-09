import React from 'react';
import MainNavigator from './Navigation/mainNavigation';
// import Geolocation from '@react-native-community/geolocation';
// navigator.geolocation = require('@react-native-community/geolocation');
import store from './Store/store';
import {Provider} from "react-redux";




function App() {
  return (
    <Provider store={store}><MainNavigator></MainNavigator></Provider>
  );
}

export default App;

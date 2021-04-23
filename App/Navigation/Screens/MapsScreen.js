import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Dimensions} from 'react-native';
import {data} from '../../Components/Maps/Data';


function Map({navigation}) {
    console.log(data)
    const move = () => {navigation.navigate('Swipe Screen')};
    return (
    <View style={styles.container}>
      <Button title="next" onPress={move}/>
        <MapView
            style={styles.map}
            initialRegion={{
            latitude: 48.866667,
            longitude: 2.333333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            showsUserLocation={true} >
            <Marker
            key= {data[0].id}
            coordinate=
            {{latitude: data[0].latitude,
               longitude:  data[0].longitude}}
            title={data[0].title}
            description={data[0].description}
            pinColor = {data[0].color}
            />
            <Marker
            key= {data[1].id}
            coordinate=
            {{latitude: data[1].latitude,
               longitude:  data[1].longitude}}
            title={data[1].title}
            description={data[1].description}
            pinColor = {data[1].color}
            />
              <Marker
            key= {data[2].id}
            coordinate=
            {{latitude: data[2].latitude,
               longitude:  data[2].longitude}}
            title={data[2].title}
            description={data[2].description}
            pinColor = {data[2].color}
            />     
        </MapView>
    </View>
  );
}

export default function MapsScreen() {
  return (
    <Map></Map>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    map: {
      // width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
      ...StyleSheet.absoluteFillObject,
    },
});
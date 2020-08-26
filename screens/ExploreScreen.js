import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { markers, mapDarkStyle, mapStandardStyle } from '../model/mapData';

import { useTheme } from '@react-navigation/native';

const ExploreScreen = () => {
  const theme = useTheme();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={ theme.dark ? mapDarkStyle : mapStandardStyle }
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        image={require('../assets/map_marker.png')}
        title="This is test title"
        description="This is test description">
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <View>
                <Text style={styles.name}>Favourite Name</Text>
                {/* <Text>A short description</Text> */}
              </View>
              <Text>
                <Image
                  style={styles.image}
                  source={require('../assets/banners/food-banner1.jpg')}
                />
              </Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 1,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.9,
  },
  name: {
    fontSize: 16,
  },
  image: {
    width: 120,
    height: 120,
  },
});

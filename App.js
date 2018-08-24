/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import MapView from "react-native-maps";
import launcher from "./ic_launcher.png";

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

const ExampleImage = () => (
  <Image
    source={launcher}
    style={{ width: 100, height: 100 }}
    resizeMode="cover"
  />
);

export default class MyApp extends React.Component {
  state = {
    isMapReady: false
  };

  render() {
    const { region } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
              onLayout={() => this.setState({ isMapReady: true })}
            >
              {this.state.isMapReady && (
                <MapView.Marker
                  coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324
                  }}
                >
                  <MapView.Callout>
                    <View>
                      <Text>foo</Text>
                      <ExampleImage />
                      <Text>foo</Text>
                    </View>
                  </MapView.Callout>
                </MapView.Marker>
              )}
            </MapView>
          </View>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>foo</Text>
          <ExampleImage />
          <Text>foo</Text>
        </View>
      </View>
    );
  }
}

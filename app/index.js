/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class FirstChild extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.containerChild}>
        <Image
          source={require('./components/img/react-logo.png')}
          style={styles.mainLogo}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={styles.fetchButton}
        >
          <Text style={styles.buttonText}>Fetch Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <FirstChild />
      </View>
    );
  }
}

const viewportHeight = Dimensions.get('window').height;
const viewportWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#000000',
    width: viewportWidth,
    height: viewportHeight,
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
  containerChild: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    position: 'absolute',
    width: viewportWidth,
    height: viewportHeight,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  mainLogo: {
    width: 250,
    height: 250,
  },
  fetchButton: {
    borderRadius: 5,
    borderColor: '#02D5DB',
    borderWidth: 8,
    borderStyle: 'solid',
    height: 60,
    width: 300,
    backgroundColor: '#32dfff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '600',
  },
});

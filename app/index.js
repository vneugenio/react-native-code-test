/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';
import { YellowBox } from 'react-native';
import HomePage from './screens/home';
import PreLoader from './screens/preloader';
import Users from './screens/users';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppStack = createStackNavigator(
  {
    HomeScreen: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    PreLoadScreen: {
        screen: PreLoader,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    UsersScreen: {
        screen: Users,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
  },
  {
    initialRouteName: 'HomeScreen',
    transitionConfig: () => fadeIn(500)
  },
);


export default class App extends Component {
  render() {
    return (
        <AppStack />
    );
  }
}

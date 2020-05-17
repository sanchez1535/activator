import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Summary from './src/login/summary.js';
import Summary2 from './src/login/summary2.js';
import Signup from './src/login/signup.js';
import Signin from './src/login/signin.js';

const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Home2: { screen:Summary },
  Home3: { screen:Summary2 },
  Sign: { screen: Signup },
  Sign2: { screen: Signin },
 
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}


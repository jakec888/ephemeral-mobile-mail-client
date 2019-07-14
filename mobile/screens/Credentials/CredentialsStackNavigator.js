import React from 'react';
import { createStackNavigator } from 'react-navigation';

import CredentialsScreen from './CredentialsScreen';

const CredentialsStackNavigator = createStackNavigator({
  AllMail: {
    screen: CredentialsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Log In',
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default CredentialsStackNavigator;

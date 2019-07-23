import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { H3 } from 'native-base';

import CredentialsScreen from './CredentialsScreen';

const CredentialsStackNavigator = createStackNavigator({
  AllMail: {
    screen: CredentialsScreen,
    navigationOptions: ({ navigation }) => ({
      // title: 'Log In',
      headerTitle: (
        <H3
          style={{
            height: 'auto',
            alignSelf: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          Login
        </H3>
      ),
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default CredentialsStackNavigator;

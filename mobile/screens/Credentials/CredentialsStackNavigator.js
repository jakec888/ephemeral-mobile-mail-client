import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import CredentialsScreen from './CredentialsScreen';

const CredentialsNavigator = createStackNavigator({
  AllMail: {
    screen: CredentialsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Credentials',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default CredentialsNavigator;

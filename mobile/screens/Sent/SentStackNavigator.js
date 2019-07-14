import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import SentScreen from './SentScreen';

const SentStackNavigator = createStackNavigator({
  AllMail: {
    screen: SentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Sent Email',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default SentStackNavigator;

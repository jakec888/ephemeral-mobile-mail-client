import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import ComposeScreen from './ComposeScreen';

const ComposeNavigator = createStackNavigator({
  AllMail: {
    screen: ComposeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Compose Email',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default ComposeNavigator;

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import AllMailScreen from './AllMailScreen';

const AllMailStackNavigator = createStackNavigator({
  AllMail: {
    screen: AllMailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'All Mail',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default AllMailStackNavigator;

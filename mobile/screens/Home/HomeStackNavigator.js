import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import HomeScreen from './HomeScreen';

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default HomeStackNavigator;

import React from 'react';

import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import AllMailScreen from './AllMailScreen';

const AllMailStackNavigator = createStackNavigator({
  First: {
    screen: AllMailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'This Is The All Mail',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default AllMailStackNavigator;

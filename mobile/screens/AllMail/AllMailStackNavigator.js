import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import AllMailScreen from './AllMailScreen';

const TrashStackNavigator = createStackNavigator({
  AllMail: {
    screen: AllMailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'All Emails Folder',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default TrashStackNavigator;

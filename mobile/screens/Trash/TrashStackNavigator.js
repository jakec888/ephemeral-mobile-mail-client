import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import TrashScreen from './TrashScreen';

const TrashStackNavigator = createStackNavigator({
  AllMail: {
    screen: TrashScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Trash Email',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default TrashStackNavigator;

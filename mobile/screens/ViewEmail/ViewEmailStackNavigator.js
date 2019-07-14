import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import ViewEmailScreen from './ViewEmailScreen';

const ViewEmailStackNavigator = createStackNavigator({
  AllMail: {
    screen: ViewEmailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'ViewEmail Email',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default ViewEmailStackNavigator;

import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import InboxScreen from './InboxScreen';

const InboxStackNavigator = createStackNavigator({
  Inbox: {
    screen: InboxScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Inbox',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default InboxStackNavigator;

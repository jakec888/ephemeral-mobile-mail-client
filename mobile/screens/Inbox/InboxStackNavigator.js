import React from 'react';
import { createStackNavigator } from 'react-navigation';

import InboxScreen from './InboxScreen';
import ViewEmailScreen from '../ViewEmail/ViewEmailScreen';

const InboxStackNavigator = createStackNavigator({
  Inbox: {
    screen: InboxScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Inbox',
      headerBackAllowFontScaling: true,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  },
  View: {
    screen: ViewEmailScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.emailName,
      // headerLeft: ,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default InboxStackNavigator;

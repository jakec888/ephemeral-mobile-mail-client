import React from 'react';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import AllMailStackNavigator from '../screens/AllMail/AllMailStackNavigator';
import HomeStackNavigator from '../screens/Home/HomeStackNavigator';
import InboxStackNavigator from '../screens/Inbox/InboxStackNavigator';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: <Ionicons name="md-home" size={24} color="#3f51b5" />
      }
    },
    AllMail: {
      screen: AllMailStackNavigator,
      navigationOptions: {
        drawerLabel: 'All Mail',
        drawerIcon: <Ionicons name="md-mail-open" size={24} color="#3f51b5" />
      }
    },
    Inbox: {
      screen: InboxStackNavigator,
      navigationOptions: {
        drawerLabel: 'Inbox',
        drawerIcon: <Ionicons name="md-mail-unread" size={24} color="#3f51b5" />
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: '#1f285a',
      labelStyle: {
        color: '#3f51b5'
      }
    }
  }
);

export default createAppContainer(MyDrawerNavigator);

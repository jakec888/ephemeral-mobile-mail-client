import React from 'react';

import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import AllMailStackNavigator from '../screens/AllMail/AllMailStackNavigator';
import SentStackNavigator from '../screens/Sent/SentStackNavigator';
import InboxStackNavigator from '../screens/Inbox/InboxStackNavigator';
import ComposeStackNavigator from '../screens/Compose/ComposeStackNavigator';
import TrashStackNavigator from '../screens/Trash/TrashStackNavigator';

import CredentialsStackNavigator from '../screens/Credentials/CredentialsStackNavigator';

const CredNavigator = createStackNavigator({
  Credentials: {
    screen: CredentialsStackNavigator
  }
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    Inbox: {
      screen: InboxStackNavigator,
      navigationOptions: {
        drawerLabel: 'Inbox',
        drawerIcon: <Ionicons name="md-mail-open" size={24} color="#3f51b5" />
      }
    },
    Sent: {
      screen: SentStackNavigator,
      navigationOptions: {
        drawerLabel: 'Sent',
        drawerIcon: <Ionicons name="md-send" size={24} color="#3f51b5" />
      }
    },
    AllMail: {
      screen: AllMailStackNavigator,
      navigationOptions: {
        drawerLabel: 'All Mail',
        drawerIcon: <Ionicons name="md-mail" size={24} color="#3f51b5" />
      }
    },
    ComposeMail: {
      screen: ComposeStackNavigator,
      navigationOptions: {
        drawerLabel: 'Compose Emails',
        drawerIcon: <Ionicons name="md-mail-open" size={24} color="#3f51b5" />
      }
    },
    TrashMail: {
      screen: TrashStackNavigator,
      navigationOptions: {
        drawerLabel: 'Trash',
        drawerIcon: <Ionicons name="md-trash" size={24} color="#3f51b5" />
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

export default createAppContainer(
  createSwitchNavigator(
    {
      Cred: CredNavigator,
      App: AppDrawerNavigator
    },
    {
      initialRouteName: 'Cred'
    }
  )
);

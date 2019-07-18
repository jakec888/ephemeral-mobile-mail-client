import React from 'react';
import { createStackNavigator } from 'react-navigation';

import InboxScreen from './InboxScreen';
import ViewEmailScreen from '../ViewEmail/ViewEmailScreen';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';

import EmailInfo from '../../components/emailInfo';

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
  },
  View: {
    screen: ViewEmailScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.emailName,
      headerRight: (
        <EmailInfo
          name={navigation.state.params.emailName}
          email={navigation.state.params.emailEmail}
          subject={navigation.state.params.emailSubject}
          date={navigation.state.params.emailDate}
        />
      ),
      headerBackAllowFontScaling: true,
      headerRightContainerStyle: {
        marginRight: 10
      },
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default InboxStackNavigator;

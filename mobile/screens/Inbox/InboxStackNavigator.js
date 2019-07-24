import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Text } from 'native-base';

import InboxScreen from './InboxScreen';
import ViewEmailScreen from '../ViewEmail/ViewEmailScreen';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';

import EmailInfo from '../../components/emailInfo';

const InboxStackNavigator = createStackNavigator({
  Inbox: {
    screen: InboxScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Text
          style={{
            // height: 'auto',
            // alignSelf: 'center',
            // marginLeft: 'auto',
            // marginRight: 'auto',
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          Inbox Folder
        </Text>
      ),
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

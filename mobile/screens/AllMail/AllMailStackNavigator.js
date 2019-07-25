import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { H3 } from 'native-base';

import AllMailScreen from './AllMailScreen';
import ViewEmailScreen from '../ViewEmail/ViewEmailScreen';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';

import EmailInfo from '../../components/emailInfo';

const AllMailStackNavigator = createStackNavigator({
  AllMail: {
    screen: AllMailScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <H3
          style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          All Email Folder
        </H3>
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
      headerTitle: (
        <H3
          style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          {navigation.state.params.emailName}
        </H3>
      ),
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

export default AllMailStackNavigator;

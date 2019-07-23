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
      // title: 'All EMail Folder',
      headerTitle: (
        <H3
          style={{
            height: 'auto',
            alignSelf: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          All EMail Folder
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
      // title: navigation.state.params.emailName,
      headerTitle: (
        <H3
          style={{
            height: 'auto',
            alignSelf: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
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

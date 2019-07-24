import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Text } from 'native-base';

import SentScreen from './SentScreen';
import ViewEmailScreen from '../ViewEmail/ViewEmailScreen';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';

import EmailInfo from '../../components/emailInfo';

const SentStackNavigator = createStackNavigator({
  Sent: {
    screen: SentScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Text
          style={{
            height: 'auto',
            alignSelf: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          Sent Folder
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
      headerTitle: (
        <Text
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
        </Text>
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

export default SentStackNavigator;

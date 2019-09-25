import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Platform } from 'react-native'

import { Text } from 'native-base'

import TrashScreen from './TrashScreen'
import ViewEmailScreen from '../ViewEmail/ViewEmailScreen'

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure'

import EmailInfo from '../../components/emailInfo'

const TrashStackNavigator = createStackNavigator({
  Trash: {
    screen: TrashScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          Trash Folders
        </Text>
      ),
      ...Platform.select({
        ios: {
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
        },
        android: {}
      }),
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
            flex: 1,
            textAlign: 'center',
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
})

export default TrashStackNavigator

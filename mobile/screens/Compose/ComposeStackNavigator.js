import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Platform } from 'react-native'

import { Text } from 'native-base'

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure'
import ComposeScreen from './ComposeScreen'

const ComposeNavigator = createStackNavigator({
  AllMail: {
    screen: ComposeScreen,
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
          Compose Email
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
  }
})

export default ComposeNavigator

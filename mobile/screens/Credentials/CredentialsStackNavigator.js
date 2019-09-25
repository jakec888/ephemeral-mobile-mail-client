import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { Text } from 'native-base'

import CredentialsScreen from './CredentialsScreen'

const CredentialsStackNavigator = createStackNavigator({
  AllMail: {
    screen: CredentialsScreen,
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
          Login
        </Text>
      ),
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
})

export default CredentialsStackNavigator

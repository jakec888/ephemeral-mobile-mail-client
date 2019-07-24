import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Text } from 'native-base';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import ComposeScreen from './ComposeScreen';

const ComposeNavigator = createStackNavigator({
  AllMail: {
    screen: ComposeScreen,
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
          Compose Email
        </Text>
      ),
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#3f51b5'
      },
      headerTintColor: '#fff'
    })
  }
});

export default ComposeNavigator;

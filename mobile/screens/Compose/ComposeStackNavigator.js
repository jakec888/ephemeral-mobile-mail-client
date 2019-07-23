import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { H3 } from 'native-base';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';
import ComposeScreen from './ComposeScreen';

const ComposeNavigator = createStackNavigator({
  AllMail: {
    screen: ComposeScreen,
    navigationOptions: ({ navigation }) => ({
      // title: 'Compose Email',
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
          Compose Email
        </H3>
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

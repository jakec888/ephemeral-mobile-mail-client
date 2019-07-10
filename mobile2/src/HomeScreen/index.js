// import React, { Component } from 'react';
// import HomeScreen from './HomeScreen';
// import MainScreenNavigator from '../ChatScreen';
// import ProfileScreen from '../ProfileScreen';
// import SideBar from '../SideBar/SideBar';
// import { createDrawerNavigator, createAppContainer } from 'react-navigation';
// // import { createAppContainer } from 'react-navigation';

// const HomeScreenRouter = createDrawerNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Chat: { screen: MainScreenNavigator },
//     ProfileScreen: { screen: ProfileScreen }
//   },
//   {
//     contentComponent: (props) => <SideBar {...props} />
//   }
// );

// export default createAppContainer(HomeScreenRouter);

////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import ProfileScreen from '../ProfileScreen';
import EditScreenOne from '../ProfileScreen/EditScreenOne';
import EditScreenTwo from '../ProfileScreen/EditScreenTwo';
import LucyChat from '../ChatScreen/LucyChat';
import JadeChat from '../ChatScreen/JadeChat';
import NineChat from '../ChatScreen/NineChat';

import SideBar from '../SideBar/SideBar';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

const MainScreenNavigator = createBottomTabNavigator(
  {
    LucyChat: { screen: (props) => <LucyChat {...props} /> },
    JadeChat: { screen: (props) => <JadeChat {...props} /> },
    NineChat: { screen: (props) => <NineChat {...props} /> }
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: (props) => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('LucyChat')}
            >
              <Icon name="bowtie" />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('JadeChat')}
            >
              <Icon name="briefcase" />
              <Text>Nine</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate('NineChat')}
            >
              <Icon name="headset" />
              <Text>Jade</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

const DrawNav = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: 'Profile'
  }
);

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: (props) => <SideBar {...props} />
  }
);

export default createAppContainer(HomeScreenRouter);

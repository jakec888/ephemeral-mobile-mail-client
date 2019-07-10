import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import {
  WelcomeScreen,
  Feed,
  Profile,
  Settings,
  DashboardScreen,
  AnotherScreen
} from '../screens';

/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Buttons
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardStackNavigator
    },
    Something: {
      screen: DashboardScreen,
      navigationOptions: ({ navigation }) => {
        console.log(navigation);
        const { routeName } = navigation.state.key;
        console.log(routeName);
        return {
          headerTitle: routeName
        };
      }

      // navigationOptions: () => ({
      //   title: 'z',
      //   headerTitle: 'a'
      // })
    },
    AnotherScreen: {
      screen: AnotherScreen
    }
  }
  // {
  //   navigationOptions: ({ navigation }) => {
  //     const { routeName } = navigation.state.routes[navigation.state.index];
  //     return {
  //       headerTitle: routeName
  //     };
  //   }
  // }
  // {
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //       headerLeft: (
  //         <Icon
  //           style={{ paddingLeft: 10 }}
  //           onPress={() => navigation.openDrawer()}
  //           name="md-menu"
  //           size={30}
  //         />
  //       )
  //     };
  //   }
  // }
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const Router = createAppContainer(AppSwitchNavigator);

export default Router;

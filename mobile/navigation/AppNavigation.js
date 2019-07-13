import React from 'react';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import AllMailStackNavigator from '../screens/AllMail/AllMailStackNavigator';
import HomeStackNavigator from '../screens/Home/HomeStackNavigator';
import InboxStackNavigator from '../screens/Inbox/InboxStackNavigator';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  AllMail: {
    screen: AllMailStackNavigator,
    navigationOptions: {
      drawerLabel: 'All Mail'
    }
  },
  Inbox: {
    screen: InboxStackNavigator,
    navigationOptions: {
      drawerLabel: 'Inbox'
    }
  }
});

export default createAppContainer(MyDrawerNavigator);

/////////////////////////////////////////////////////////////////

// import { createDrawerNavigator, createAppContainer } from 'react-navigation';
// import AllMailStackNavigator from '../screens/AllMail/AllMailStackNavigator';
// import HomeStackNavigator from '../screens/Home/HomeStackNavigator';
// import InboxStackNavigator from '../screens/Inbox/InboxStackNavigator';

// // import CustomeSideBar from '../components/sidebar';

// const MyDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeStackNavigator,
//       navigationOptions: {
//         drawerLabel: 'Home Screen'
//       }
//     },
//     AllMail: {
//       screen: AllMailStackNavigator,
//       navigationOptions: {
//         drawerLabel: 'All Mail Screen'
//       }
//     },
//     Inbox: {
//       screen: InboxStackNavigator,
//       navigationOptions: {
//         drawerLabel: 'Inbox Screen'
//       }
//     }
//   }
//   // {
//   //   contentComponent: CustomeSideBar
//   // }
// );

// const AppNavigation = createAppContainer(MyDrawerNavigator);

// export default AppNavigation;

///////////////////////////////////////////////

// import { createDrawerNavigator, createAppContainer } from 'react-navigation';
// import { AllMailScreen, HomeScreen, InboxScreen } from '../screens';
// import CustomeSideBar from '../components/sidebar';

// const MyDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeScreen
//     },
//     AllMail: {
//       screen: AllMailScreen
//     },
//     Inbox: {
//       screen: InboxScreen
//     }
//   },
//   {
//     contentComponent: CustomeSideBar
//   }
// );

// const AppNavigation = createAppContainer(MyDrawerNavigator);

// export default AppNavigation;

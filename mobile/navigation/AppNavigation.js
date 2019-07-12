import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { AllMailScreen, HomeScreen, InboxScreen } from '../screens';

// import HomeScreen from '../screens/HomeScreen';
// import AllMailScreen from '../screens/AllMailScreen';
// import InboxScreen from '../screens/InboxScreen';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  AllMail: {
    screen: AllMailScreen
  },
  Inbox: {
    screen: InboxScreen
  }
});

const AppNavigation = createAppContainer(MyDrawerNavigator);

export default AppNavigation;

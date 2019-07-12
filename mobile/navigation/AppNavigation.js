import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { AllMailScreen, HomeScreen, InboxScreen } from '../screens';
import CustomeSideBar from '../components/sidebar';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    AllMail: {
      screen: AllMailScreen
    },
    Inbox: {
      screen: InboxScreen
    }
  },
  {
    contentComponent: CustomeSideBar
  }
);

const AppNavigation = createAppContainer(MyDrawerNavigator);

export default AppNavigation;

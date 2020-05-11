import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3988Navigator from '../features/UserProfile3988/navigator';
import EmailAuth3987Navigator from '../features/EmailAuth3987/navigator';
import BlankScreen3984Navigator from '../features/BlankScreen3984/navigator';
import EmailAuth3983Navigator from '../features/EmailAuth3983/navigator';
import UserProfile3973Navigator from '../features/UserProfile3973/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile3988: { screen: UserProfile3988Navigator },
EmailAuth3987: { screen: EmailAuth3987Navigator },
BlankScreen3984: { screen: BlankScreen3984Navigator },
EmailAuth3983: { screen: EmailAuth3983Navigator },
UserProfile3973: { screen: UserProfile3973Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

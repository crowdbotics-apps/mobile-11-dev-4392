import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3997Navigator from '../features/UserProfile3997/navigator';
import UserProfile3995Navigator from '../features/UserProfile3995/navigator';
import UserProfile3993Navigator from '../features/UserProfile3993/navigator';
import UserProfile3990Navigator from '../features/UserProfile3990/navigator';
import UserProfile3988Navigator from '../features/UserProfile3988/navigator';
import EmailAuth3983Navigator from '../features/EmailAuth3983/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile3997: { screen: UserProfile3997Navigator },
UserProfile3995: { screen: UserProfile3995Navigator },
UserProfile3993: { screen: UserProfile3993Navigator },
UserProfile3990: { screen: UserProfile3990Navigator },
UserProfile3988: { screen: UserProfile3988Navigator },
EmailAuth3983: { screen: EmailAuth3983Navigator },
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

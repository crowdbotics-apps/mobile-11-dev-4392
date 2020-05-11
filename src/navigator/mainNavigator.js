import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3990Navigator from '../features/UserProfile3990/navigator';
import UserProfile3989Navigator from '../features/UserProfile3989/navigator';
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
UserProfile3990: { screen: UserProfile3990Navigator },
UserProfile3989: { screen: UserProfile3989Navigator },
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

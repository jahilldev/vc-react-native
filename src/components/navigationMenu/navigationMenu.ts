import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Home, Deals } from './routerItems';

/* -----------------------------------
 *
 * Navigation
 *
 * -------------------------------- */

const NavigationMenu = createAppContainer(
   createDrawerNavigator({
      Home: {
         screen: Home,
         navigationOptions: {
            drawerLabel: 'Home',
         },
      },
      Deals: {
         screen: Deals,
         navigationOptions: {
            drawerLabel: 'Deals',
         },
      },
   })
);

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { NavigationMenu };

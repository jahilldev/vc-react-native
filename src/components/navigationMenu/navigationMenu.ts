import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Home, Offer } from './routerItems';

/* -----------------------------------
 *
 * Navigation
 *
 * -------------------------------- */

const NavigationMenu = createAppContainer(
   createDrawerNavigator({
      Screen1: {
         screen: Home,
         navigationOptions: {
            drawerLabel: 'Home',
         },
      },
      Screen2: {
         screen: Offer,
         navigationOptions: {
            drawerLabel: 'Offer',
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

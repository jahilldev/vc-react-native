import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Home, Deals, Offer } from './routerItems';

/* -----------------------------------
 *
 * Navigation
 *
 * -------------------------------- */

const NavigationMenu = createAppContainer(
   createDrawerNavigator({
      Home: {
         screen: Home,
      },
      Deals: {
         screen: Deals,
      },
      Offer: {
         screen: Offer,
         navigationOptions: {
            drawerLabel: () => null,
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

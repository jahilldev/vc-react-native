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
         navigationOptions: {
            drawerLabel: 'Vouchers',
         },
      },
      Deals: {
         screen: Deals,
         navigationOptions: {
            drawerLabel: 'Deals',
         },
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

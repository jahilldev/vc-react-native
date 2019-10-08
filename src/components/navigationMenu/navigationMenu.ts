import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { HomePage, DealsPage, OfferPage } from '../';

/* -----------------------------------
 *
 * Navigation
 *
 * -------------------------------- */

const NavigationMenu = createAppContainer(
   createDrawerNavigator({
      Home: {
         screen: HomePage,
      },
      Deals: {
         screen: DealsPage,
      },
      Offer: {
         screen: OfferPage,
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

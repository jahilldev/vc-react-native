import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { HomePage } from '../homePage';
import { DealsPage } from '../dealsPage';
import { OfferPage } from '../offerPage';

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

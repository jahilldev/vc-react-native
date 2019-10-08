import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { NavigationDrawer } from './navigationDrawer';
import { HomePage } from '../homePage';
import { OfferPage } from '../offerPage';

/* -----------------------------------
 *
 * First
 *
 * -------------------------------- */

const FirstPage = createStackNavigator({
   First: {
      screen: HomePage,
      navigationOptions: ({ navigation }) => ({
         title: 'Home',
         headerLeft: (
            <NavigationDrawer navigationProps={navigation} />
         ),
         headerStyle: {
            backgroundColor: '#009ED9',
         },
         headerTintColor: '#fff',
      }),
   },
});

/* -----------------------------------
 *
 * Second
 *
 * -------------------------------- */

const SecondPage = createStackNavigator({
   First: {
      screen: OfferPage,
      navigationOptions: ({ navigation }) => ({
         title: 'Offer',
         headerLeft: (
            <NavigationDrawer navigationProps={navigation} />
         ),
         headerStyle: {
            backgroundColor: '#009ED9',
         },
         headerTintColor: '#fff',
      }),
   },
});

/* -----------------------------------
 *
 * Router
 *
 * -------------------------------- */

const AppRouter = createAppContainer(
   createDrawerNavigator({
      Screen1: {
         screen: FirstPage,
         navigationOptions: {
            drawerLabel: 'Home',
         },
      },
      Screen2: {
         screen: SecondPage,
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

export { AppRouter };

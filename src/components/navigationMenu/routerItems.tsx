import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { HeaderBar } from './headerBar';
import { HomePage } from '../homePage';
import { OfferPage } from '../offerPage';

/* -----------------------------------
 *
 * Home
 *
 * -------------------------------- */

const Home = createStackNavigator({
   First: {
      screen: HomePage,
      navigationOptions: ({ navigation }) => ({
         title: 'Home',
         headerLeft: <HeaderBar navigationProps={navigation} />,
         headerStyle: {
            backgroundColor: '#009ED9',
         },
         headerTintColor: '#fff',
      }),
   },
});

/* -----------------------------------
 *
 * Offer
 *
 * -------------------------------- */

const Offer = createStackNavigator({
   First: {
      screen: OfferPage,
      navigationOptions: ({ navigation }) => ({
         title: 'Offer',
         headerLeft: <HeaderBar navigationProps={navigation} />,
         headerStyle: {
            backgroundColor: '#009ED9',
         },
         headerTintColor: '#fff',
      }),
   },
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Home, Offer };
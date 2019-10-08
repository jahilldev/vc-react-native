import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore, mainReducer } from './store';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import {
   LoadingScreen,
   HeaderBar,
   AppRouter,
} from './components';

/* -----------------------------------
 *
 * Store
 *
 * -------------------------------- */

const store = configureStore(mainReducer, {});

/* -----------------------------------
 *
 * Entry
 *
 * -------------------------------- */

class Entry extends Component<{}> {
   public render() {
      return (
         <Provider store={store}>
            <LoadingScreen>
               {/* <HeaderBar /> */}
               <AppRouter />
            </LoadingScreen>
         </Provider>
      );
   }
}

/* -----------------------------------
 *
 * Styles
 *
 * -------------------------------- */

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Entry };

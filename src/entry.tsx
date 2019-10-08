import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore, mainReducer } from './store';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { LoadingScreen, NavigationMenu } from './components';

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
               <NavigationMenu />
            </LoadingScreen>
         </Provider>
      );
   }
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Entry };

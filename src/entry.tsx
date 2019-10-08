import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore, mainReducer } from './store';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { HeaderBar, LoadingScreen } from './components';

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
               <View style={styles.container}>
                  <HeaderBar />
                  <Text style={styles.welcome}>
                     Welcome to vouchercloud
                  </Text>
                  <Text style={styles.instructions}>
                     To get started, edit App.tsx
                  </Text>
               </View>
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

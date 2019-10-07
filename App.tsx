import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { HeaderBar } from './components';

/* -----------------------------------
 *
 * App
 *
 * -------------------------------- */

class App extends Component<{}> {
   public render() {
      return (
         <View style={styles.container}>
            <HeaderBar />
            <Text style={styles.welcome}>
               Welcome to vouchercloud!
            </Text>
            <Text style={styles.instructions}>
               To get started, edit App.tsx
            </Text>
         </View>
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

export { App };

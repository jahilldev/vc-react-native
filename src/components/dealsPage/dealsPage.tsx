import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* -----------------------------------
 *
 * Deals
 *
 * -------------------------------- */

class DealsPage extends Component<{}> {
   public static navigationOptions: {
      drawerLabel: 'Deals';
   };

   public render() {
      return (
         <View>
            <Text>Deals page!</Text>
         </View>
      );
   }
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { DealsPage };

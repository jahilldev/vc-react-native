import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {
   NavigationParams,
   NavigationScreenProp,
   NavigationState,
} from 'react-navigation';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   navigation: NavigationScreenProp<
      NavigationState,
      NavigationParams
   >;
}

/* -----------------------------------
 *
 * Home
 *
 * -------------------------------- */

class HomePage extends Component<IProps> {
   public static navigationOptions: {
      drawerLabel: 'Vouchers';
   };

   public render() {
      const { navigation } = this.props;

      return (
         <View style={styles.container}>
            <Text style={styles.titleText}>Home page!</Text>
            <Button
               title='10% off at Zizzi'
               onPress={() => navigation.navigate('Offer')}
            />
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
      padding: 10,
   },
   titleText: {
      fontSize: 18,
      marginBottom: 20,
   },
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { HomePage };

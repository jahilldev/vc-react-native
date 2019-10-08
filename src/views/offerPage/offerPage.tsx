import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
 * Components
 *
 * -------------------------------- */

import { HeaderBar } from '../../components';

/* -----------------------------------
 *
 * Offer
 *
 * -------------------------------- */

class OfferPage extends Component<IProps> {
   public render() {
      const { navigation } = this.props;

      return (
         <View>
            <HeaderBar navigation={navigation} />
            <Text style={styles.titleText}>
               Offer ID: {navigation.getParam('offerId')}
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
   titleText: {
      fontSize: 18,
      marginBottom: 20,
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
   },
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { OfferPage };

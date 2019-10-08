import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   loading?: boolean;
}

/* -----------------------------------
 *
 * Loading
 *
 * -------------------------------- */

class LoadingScreen extends Component<IProps> {
   public render() {
      const { loading } = this.props;

      return (
         loading && (
            <View style={styles.wrapper}>
               <Text style={styles.titleText}>loading...</Text>
            </View>
         )
      );
   }
}

/* -----------------------------------
 *
 * Styles
 *
 * -------------------------------- */

const styles = StyleSheet.create({
   wrapper: {
      padding: 15,
      backgroundColor: '#009ED9',
   },
   titleText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
   },
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { LoadingScreen };

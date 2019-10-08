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
      const { loading, children } = this.props;

      if (!loading) {
         return children;
      }

      return (
         <View style={styles.container}>
            <Text style={styles.titleText}>loading...</Text>
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
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#009ED9',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      padding: 15,
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

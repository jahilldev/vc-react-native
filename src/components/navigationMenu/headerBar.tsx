import React, { Component } from 'react';
import {
   StyleSheet,
   View,
   Image,
   TouchableOpacity,
} from 'react-native';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   navigationProps: any;
}

/* -----------------------------------
 *
 * HeaderBar
 *
 * -------------------------------- */

class HeaderBar extends Component<IProps> {
   public render() {
      return (
         <View style={styles.container}>
            <TouchableOpacity onPress={this.onToggleMenu}>
               <Image
                  /* tslint:disable-next-line no-require-imports */
                  source={require('./drawerIcon.png')}
                  style={styles.button}
               />
            </TouchableOpacity>
         </View>
      );
   }

   private onToggleMenu = () => {
      this.props.navigationProps.toggleDrawer();
   };
}

/* -----------------------------------
 *
 * Styles
 *
 * -------------------------------- */

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
   },
   button: {
      width: 25,
      height: 25,
      marginLeft: 10,
   },
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { HeaderBar };

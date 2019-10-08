import { AppRegistry } from 'react-native';
import { Entry } from './src/entry';
import { name as appName } from './app.json';

/* -----------------------------------
 *
 * Register
 *
 * -------------------------------- */

AppRegistry.registerComponent(appName, () => Entry);

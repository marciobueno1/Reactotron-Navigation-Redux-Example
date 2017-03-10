/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
 AppRegistry,
 // BackAndroid,
} from 'react-native';

// import { NavigationActions } from 'react-navigation';
import Navigation from './Navigation';
// import store from './store';

// BackAndroid.addEventListener('hardwareBackPress', () => {
//   try {
//     store.dispatch(NavigationActions.back());
//     return true;
//     if (true) {
//       return true;
//     }
//   } catch (_) {
//     // do nothing
//   }
//   return false;
// });

AppRegistry.registerComponent('Navigation', () => Navigation);

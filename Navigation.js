import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';
import { AppWithNavigationState } from './AppNavigator';

import store from './store';

const fullBgImage = require('./images/bg.jpg');

const Navigation = () => (
  <Provider store={store}>
    <Image style={styles.fullBgImage} source={fullBgImage}>
      <AppWithNavigationState />
    </Image>
  </Provider>
);

export default Navigation;

// const color = {
//   lightBlue: '#F5FCFF',
//   darkGray: '#333333',
//   transparent: 'transparent',
//   lightGray: '#eeeeee',
// };

const styles = StyleSheet.create({
  fullBgImage: {
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

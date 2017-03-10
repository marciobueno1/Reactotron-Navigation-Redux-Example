import React from 'react';
import { DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import MyHomeScreen from './components/MyHomeScreen';
import MyNotificationsScreen from './components/MyNotificationsScreen';

export const AppNavigator = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  // drawerWidth: 100,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      marginVertical: 0,
    },
  },
});

const AppWithNavigation = props => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

export const AppWithNavigationState = connect(
  state => ({
    nav: state.nav,
  }),
)(AppWithNavigation);

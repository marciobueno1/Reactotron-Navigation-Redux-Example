import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import {
  Button,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const iconImage = require('../images/chats-icon.png');

class MyHomeScreen extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Home',
      icon: ({ tintColor }) => (
        <Image
          source={iconImage}
          style={[styles.icon, { tintColor }]}
        />
      ),
    }),
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.dispatch(NavigationActions.navigate({ routeName: 'Notifications' }))}
          title="Go to notifications"
        />
        <Button
          onPress={() => this.props.dispatch(NavigationActions.navigate({ routeName: 'DrawerOpen' }))}
          title="Open Drawer"
        />
        <Text>
          {JSON.stringify(this.props.nav)}
        </Text>
      </View>
    );
  }
}

export default connect(state => ({ nav: state.nav }))(MyHomeScreen);

const color = {
  transparent: 'transparent',
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.transparent,
    padding: 0,
    margin: 0,
    marginTop: 60,
  },
});

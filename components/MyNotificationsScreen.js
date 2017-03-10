import React from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import {
  Button,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const iconImage = require('../images/notif-icon.png');

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Notifications',
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
          onPress={() => this.props.dispatch(NavigationActions.back())}
          title="Go back home"
        />
        <Text>
          {JSON.stringify(this.props.nav)}
        </Text>
      </View>
    );
  }
}

export default connect(state => ({ nav: state.nav }))(MyNotificationsScreen);

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

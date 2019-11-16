/**
 * @format
 */

import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import Routes from './src/routes/Routes';

const ProviderConfigured = () => (
  <SafeAreaView style={styles.areaView}>
    <Routes />
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => ProviderConfigured);

const styles = {
  areaView: {
    flex: 1,
  },
};

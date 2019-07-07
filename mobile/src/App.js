/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar
// } from 'react-native';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions
// } from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';

import store from './redux/store';
import Base from './containers/Base';

const App = () => {
  return (
    <Provider store={store}>
      <Base />
    </Provider>
  );
};

export default App;

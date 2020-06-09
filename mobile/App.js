import React, {Component} from 'react';
import {AppLoading} from 'expo';
import {FontAwesome} from '@expo/vector-icons';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {Image} from 'react-native';
// import { Provider } from 'react-redux'
import Root from './Root';

// import store from './redux/store'

import AppNavigation from './navigation/AppNavigation';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font =>
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }),
  );
}

export default class AppContainer extends Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      require('./assets/splash.png'),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({isReady: true})}
          onError={console.warn}
        />
      );
    }

    return (
      <Root>
        {/* <Provider store={store}> */}
        <AppNavigation />
        {/* </Provider> */}
      </Root>
    );
  }
}

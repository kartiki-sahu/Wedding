import React from 'react';
import { Image, Text, View } from 'react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import MainApp from './components/Main/MainApp';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/images/starter.png')}
            onLoad={this._cacheResourcesAsync}
            resizeMode="contain"
            style={{height:"80%"}}
          />
        </View>
      );
    }

    return (
      <MainApp />
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/images/starter.png');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('./assets/images/starter.png')
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isReady: true });
  };
}

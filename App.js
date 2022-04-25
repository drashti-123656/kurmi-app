import {Appearance, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/store/index';
import EStyleSheet from 'react-native-extended-stylesheet';
import FlashMessage from 'react-native-flash-message';

Appearance.getColorScheme(
  EStyleSheet.build({
    // always call EStyleSheet.build() even if you don't use global variables!
    $PRIMARY: '#DC1C28',
    $TEXT: '#fff',
    $DARK: '#000',
    $WHITE: '#FFFFFF',
    $PLACEHOLDER: '#666666',
    $WARNING_RED: '#ff0000',
  }),
);

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

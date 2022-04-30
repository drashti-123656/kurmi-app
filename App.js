import {Appearance, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store, persistedStore} from './src/store/index';
import Login from './src/scenes/auth/Login';

import EStyleSheet from 'react-native-extended-stylesheet';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import ParivarikParichay from './src/scenes/auth/registration/ParivarikParichay'


import NewsFeed from './src/scenes/home/NewsFeed';

Appearance.getColorScheme(
  EStyleSheet.build({
    // always call EStyleSheet.build() even if you don't use global variables!
    $PRIMARY: '#c3773b',
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
      <PersistGate
      persistor={persistedStore}
      onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 3000))} 
      >
      <Navigation />
      <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

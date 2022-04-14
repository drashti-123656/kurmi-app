import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({});

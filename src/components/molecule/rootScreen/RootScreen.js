import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RootScreen = ({children}) => {
  return (
    <ImageBackground
      style={styles.bg_img}
      source={require('../../../assets/backgroundImage.png')}>
      {children}
    </ImageBackground>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  bg_img: {
    flex: 1,
  },
});

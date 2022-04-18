import {ImageBackground, StatusBar, StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';

const RootScreen = ({children, scrollable = false}) => {
  return (
    <ImageBackground
      style={styles.bg_img}
      source={require('../../../assets/backgroundImage.png')}>
      <StatusBar animated={true} backgroundColor="#DC1C28" />
      <View style={styles.overLay}>
        {scrollable ? <ScrollView>{children}</ScrollView> : children}
      </View>
    </ImageBackground>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  bg_img: {
    flex: 1,
  },
  overLay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(	86.3, 11, 15.7,0.8)',
  },
});

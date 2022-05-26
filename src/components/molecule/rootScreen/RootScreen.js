import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

const RootScreen = ({children, scrollable = false}) => {
  return (
    <ImageBackground
      style={[styles.bg_img]}
      source={require('./../../../assets/backgroundImage.jpg')}>
      <StatusBar animated={true} />
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
    position: 'relative',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  overLay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});

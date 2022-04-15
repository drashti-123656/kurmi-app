import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import Navigation from './src/navigation/Navigation'
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux'
import store from './src/store/index'


const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, [])
  
  return (
    <Provider store={store}>
          <Navigation />
    </Provider>

  )
}

  

export default App;

const styles = StyleSheet.create({});

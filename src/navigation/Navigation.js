import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from '../scenes/home/HomeComponent';
import ContactUs from '../scenes/home/ContactUs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import NewsFeed from '../scenes/home/NewsFeed';
import Sampark from '../scenes/search/Sampark';
import ParivarikParichay from '../scenes/search/ParivarikParichay';
import Login from '../scenes/auth/Login';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='परिवारिक परिचय'>
        <Stack.Screen
          name="Login"
          component={Login}
          headershow
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeed}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="परिवारिक परिचय"
          component={ParivarikParichay}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          }}
        />
        <Stack.Screen
          name="संपर्क जानकारी"
          component={Sampark}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          }}
        />
        <Stack.Screen
          name="Advance Search"
          component={AdvanceSearch}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          }}
        />

        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Home" component={HomeComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

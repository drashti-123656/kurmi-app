import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactUs from '../scenes/home/ContactUs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import NewsFeed from '../scenes/home/NewsFeed';
import Sampark from '../scenes/search/Sampark';
import ParivarikParichay from '../scenes/search/ParivarikParichay';
import Whatsapp from '../scenes/search/Whatsapp';
import Login from '../scenes/home/Login';
const Stack = createNativeStackNavigator();


const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={HomeTabScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Whatsapp"
          component={Whatsapp}
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
        {/* <Stack.Screen
          name="Advance Search"
          component={AdvanceSearch}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          }}
        /> */}
        
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});

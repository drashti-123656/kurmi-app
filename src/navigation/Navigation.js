import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import Whatsapp from '../scenes/auth/Whatsapp';

import {navigationRef} from './RootNavigation';
import ContactUs from '../scenes/contact/ContactUs';
import DrawerContent from './DrawerNavigation';

import PasswordChange from '../scenes/passwordChange';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import DrawerNavigation from './DrawerNavigation';
import Registration from '../scenes/auth/registration/Registration';
import DashboardNavigation from './DashboardNavigation';
import Login from '../scenes/auth/Login';

import EStyleSheet from 'react-native-extended-stylesheet';
import SeeAllProfile from '../scenes/home/SeeAllProfile';
import OthersProfile from '../scenes/othersProfile/OthersProfile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {authData: {isAuthenticated}} = useSelector(state => state.auth);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
     
        {!isAuthenticated ? (
          <Stack.Screen
            name="DashboardNavigation"
            component={DashboardNavigation}
            headershow
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

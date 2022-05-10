import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../scenes/auth/Login';
import Registration from '../scenes/auth/registration/Registration';

import DrawerNavigation from './DrawerNavigation';
import Whatsapp from '../scenes/auth/Whatsapp';
import DashboardNavigation from './DashboardNavigation';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Whatsapp">
     {/* <Stack.Screen
            name="Whatsapp"
            component={Whatsapp}
            headershow
            options={{
              headerShown: false,
            }}
          /> */}
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DashboardNavigation"
        component={DashboardNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});

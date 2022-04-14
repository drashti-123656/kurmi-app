import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Whatsapp from '../scenes/auth/Whatsapp';
import Login from '../scenes/auth/Login';
import Registration from '../scenes/auth/Registration';
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        headershow
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Whatsapp"
        component={Whatsapp}
        headershow
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});

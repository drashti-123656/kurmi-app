import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import Whatsapp from '../scenes/auth/Whatsapp';
import DashboardNavigation from './DashboardNavigation';
import {navigationRef} from './RootNavigation';
import ContactUs from '../scenes/contact/ContactUs';
import DrawerContent from './DrawerNavigation';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userData: isAuthenticated} = useSelector(state => state.auth);
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <Stack.Navigator> */}
        {/* <Stack.Screen
              name="Whatsapp"
              component={Whatsapp}
              headershow
              options={{
                headerShown: false,
              }}
            /> */}
        {/* <Stack.Screen
          name="DashboardNavigation"
          component={DashboardNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
       <DrawerContent />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

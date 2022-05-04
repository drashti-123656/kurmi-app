import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import Whatsapp from '../scenes/auth/Whatsapp';

import {navigationRef} from './RootNavigation';
import ContactUs from '../scenes/contact/ContactUs';
import DrawerContent from './DrawerNavigation';
import DrawerNavigation from './DrawerNavigation';
import Registration from '../scenes/auth/registration/Registration';
import DashboardNavigation from './DashboardNavigation';
import Login from '../scenes/auth/Login';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userData: isAuthenticated} = useSelector(state => state.auth);
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ?  <DrawerNavigation/>:<AuthNavigation/>}
     
       {/* <Stack.Navigator> 
   
         <Stack.Screen
              name="Whatsapp"
              component={Login}
              headershow
              options={{
                headerShown: false,
              }}
            />  
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>  */}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import DashboardNavigation from './DashboardNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userData: isAuthenticated} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <Stack.Screen
            name="DashboardNavigation"
            component={DashboardNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="AuthNavigation"
            component={AuthNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

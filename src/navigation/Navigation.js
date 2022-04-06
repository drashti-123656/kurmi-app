import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from '../scenes/home/HomeComponent';
import ContactUs from '../scenes/home/ContactUs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Advance Search" component={AdvanceSearch} options={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#DC1C28',
        },
      }} />
      <Stack.Screen name="Contact Us" component={ContactUs} options={{
              headerShown: false,
            }} />
        <Stack.Screen name="Home" component={HomeComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

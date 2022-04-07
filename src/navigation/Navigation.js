import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from '../scenes/home/HomeComponent';
import ContactUs from '../scenes/home/ContactUs';
import NewsFeed from '../scenes/home/NewsFeed';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="NewsFeed" component={NewsFeed} options={{
              headerShown: false,
            }} />
            <Stack.Screen name="ContactUs" component={ContactUs} options={{

              headerShown: false,
            }} />
           
        <Stack.Screen name="Home" component={HomeComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

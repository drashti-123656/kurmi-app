import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactUs from '../scenes/home/ContactUs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import NewsFeed from '../scenes/home/NewsFeed';
import Sampark from '../scenes/search/Sampark';
import ParivarikParichay from '../scenes/search/ParivarikParichay';
import Whatsapp from '../scenes/search/Whatsapp';
import Login from '../scenes/home/Login';
const Tab = createBottomTabNavigator();


const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTransparent: true,
        headerTitle: '',
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}>
        <Tab.Screen
         name="NewsFeed"
         component={NewsFeed}
         options={{
          tabBarLabel: 'Home',
          // tabBarIcon: () => (
          //   <Icon name="home" color={'black'} size={30} />
          // ),
        }}
        />
        <Tab.Screen
         name="AdvanceSearch"
         component={AdvanceSearch}
         options={{
          tabBarLabel: 'search',
          headerTitle: 'Advance Search',
          headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          // tabBarIcon: () => (
          //   <Icon name="home" color={'black'} size={30} />
          // ),
        }}
        />
        {/* <Tab.Screen
         name="NewsFeed"
         component={NewsFeed}
         options={{
          tabBarLabel: 'Register',
          // tabBarIcon: () => (
          //   <Icon name="home" color={'black'} size={30} />
          // ),
        }}
        /> */}
        {/* <Tab.Screen
         name="NewsFeed"
         component={NewsFeed}
         options={{
          tabBarLabel: 'Home',
          // tabBarIcon: () => (
          //   <Icon name="home" color={'black'} size={30} />
          // ),
        }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});

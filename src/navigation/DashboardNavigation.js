import {StyleSheet} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import Home from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather'
import Login from '../scenes/auth/Login';
import Registration from '../scenes/auth/registration/Registration';
import NewsFeed from '../scenes/home/NewsFeed';
import RegistrationStack from './RegistrationStack';
const Tab = createBottomTabNavigator();


const DashboardNavigation = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen
         name="NewsFeed"
         component={NewsFeed}
         options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarIcon: () => (
            <Home name="home" color={'black'} size={30} />
          ),
        }}
        />
        <Tab.Screen
         name="AdvanceSearch"
         component={AdvanceSearch}
         options={{
          tabBarLabel: 'search',
          headerTitle: 'Advance Search',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'red',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          tabBarIcon: () => (
            <Search name="search" color={'black'} size={30} />
          ),
        }}
        />
        <Tab.Screen
         name="Registration"
         component={RegistrationStack}
         options={{
          tabBarLabel: 'Register',
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarIcon: () => (
            <Search name="user-plus" color={'black'} size={30} />
          ),
        }}
        />
        <Tab.Screen
         name="Login"
         component={Login}
         options={{
          tabBarLabel: 'Login',
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarIcon: () => (
            <Search name="log-in" color={'black'} size={30} />
          ),
        }}
        />
      </Tab.Navigator>
  );
};

export default DashboardNavigation;

const styles = StyleSheet.create({});

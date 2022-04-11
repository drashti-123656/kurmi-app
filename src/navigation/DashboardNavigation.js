import {StyleSheet} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import NewsFeed from '../scenes/home/NewsFeed';
const Tab = createBottomTabNavigator();


const DashboardNavigation = () => {
  return (
      <Tab.Navigator>
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
  );
};

export default DashboardNavigation;

const styles = StyleSheet.create({});

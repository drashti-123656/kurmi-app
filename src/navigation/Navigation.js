import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactUs from '../scenes/home/ContactUs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import NewsFeed from '../scenes/home/NewsFeed';
import Sampark from '../scenes/search/Sampark';
import ParivarikParichay from '../scenes/search/ParivarikParichay';
import Whatsapp from '../scenes/search/Whatsapp';
import Login from '../scenes/home/Login';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabScreen() {
  return(
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
  )
}


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={HomeTabScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Whatsapp"
          component={Whatsapp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="परिवारिक परिचय"
          component={ParivarikParichay}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          }}
        />
        <Stack.Screen
          name="संपर्क जानकारी"
          component={Sampark}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          }}
        />
        {/* <Stack.Screen
          name="Advance Search"
          component={AdvanceSearch}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          }}
        /> */}
        
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

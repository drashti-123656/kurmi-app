import {StyleSheet, Text,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import Whatsapp from '../scenes/auth/Whatsapp';

import {navigationRef} from './RootNavigation';
import ContactUs from '../scenes/contact/ContactUs';
import DrawerContent from './DrawerNavigation';

import PasswordChange from '../scenes/passwordChange';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import DrawerNavigation from './DrawerNavigation';
import Registration from '../scenes/auth/registration/Registration';
import DashboardNavigation from './DashboardNavigation';
import Login from '../scenes/auth/Login';
import OthersProfile from '../scenes/home/OthersProfile';
import EStyleSheet from 'react-native-extended-stylesheet';
import SeeAllProfile from '../scenes/home/SeeAllProfile';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userData: isAuthenticated} = useSelector(state => state.auth);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Whatsapp"
          component={Whatsapp}
          headershow
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
          // options={{
          //   headerTitle: translate('NewsFeed.kurmiShadiHeading'),
          //   tabBarActiveTintColor: 'red',
          //   headerTintColor: 'white',
          //   headerStyle: {
          //     backgroundColor: '#DC1C28',
          //   },
          //   headerTitleStyle: {
          //     fontSize: 25,
          //     fontWeight: 'bold',
          //     alignSelf: 'center',
          //     marginHorizontal: 20,
          //   },
          // }}
        />
        <Stack.Screen
          name="Password Change"
          component={PasswordChange}
          options={{
            headerShown: true,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerTintColor: '#ffff',
            headerStyle: {
              backgroundColor: '#DC1C28',
            },
          }}
        />

        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OthersProfile"
          component={OthersProfile}
          options={{
            headerShown: true,
            headerTitle: 'Profile',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerTintColor: '#ffff',
            headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
            headerRight: () => (  <TouchableOpacity ><Entypo
                name="share"
               size= {30}
                color="white"
              />
              </TouchableOpacity>
            )
          }}
        
        />
        <Stack.Screen
          name="SeeAllProfile"
          component={SeeAllProfile}
          options={{headerShown: true,
            headerTitle: 'नया  प्रोफाइल',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerTintColor: '#ffff',
            headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
          
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

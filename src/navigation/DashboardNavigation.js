import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import Home from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather';
import Login from '../scenes/auth/Login';
import Registration from '../scenes/auth/registration/Registration';
import NewsFeed from '../scenes/home/NewsFeed';
import RegistrationStack from './RegistrationStack';
import {useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from './../translations/configTranslations';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  const {
    registrationData: {registered},
  } = useSelector(({registration}) => registration);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{
          tabBarLabel: 'Home',
          headerTitle:translate('NewsFeed.kurmiShadiHeading'),
          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
          headerTintColor: '#fff',
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarIcon: () => <Home name="home" color={'black'} size={30} />,
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
          tabBarIcon: () => <Search name="search" color={'black'} size={30} />,
        }}
      />
      {!registered ? (
        <>
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
        </>
      ) : null}
    </Tab.Navigator>
  );
};

export default DashboardNavigation;

const styles = StyleSheet.create({});

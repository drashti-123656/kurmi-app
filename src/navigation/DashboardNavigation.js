import {StyleSheet,Alert} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import Home from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather';
import Login from '../scenes/auth/Login';
import Registration from '../scenes/auth/registration/Registration';
import NewsFeed from '../scenes/home/NewsFeed';
import RegistrationStack from './RegistrationStack';
import {useDispatch, useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from './../translations/configTranslations';
import NewsFeedStack from './NewsFeedStack';
import Profile from '../scenes/profile/Profile';
import Logout from '../scenes/auth/Logout';
import { LOG_OUT } from '../scenes/auth/redux/authActions';
import { logout } from '../scenes/auth/redux/authReducer';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  const dispatch = useDispatch();
  const {
    registrationData: {registered},
  } = useSelector(({registration}) => registration);

  const handleLogout = async () => {
    dispatch(logout({}));
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NewsFeedStack"
        component={NewsFeedStack}
        options={{
          tabBarLabel: 'Home',
          headerTitle: translate('NewsFeed.kurmiShadiHeading'),
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
      ) : (
        <>
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              headerShown: false,
              tabBarActiveTintColor: 'red',
              tabBarIcon: () => (
                <Search name="user-plus" color={'black'} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Logout"
            component={Logout}
            options={{
              tabBarLabel: 'Logout',
              headerShown: false,
              tabBarActiveTintColor: 'red',
              tabBarIcon: () => (
                <Search name="log-in" color={'black'} size={30} />
              ),
            }}
            listeners={({navigation, route}) => ({
              tabPress: () => {
                Alert.alert('', 'Are you sure you want to Logout?', [
                  {
                    text: 'Cancel',
                    onPress: () => navigation.navigate('NewsFeedStack'),
                    style: 'cancel',
                  },
                  {text: 'Yes', onPress: () => handleLogout()},
                ]);
              },
            })}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default DashboardNavigation;

const styles = StyleSheet.create({});

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {navigationRef} from './RootNavigation';
import DrawerNavigation from './DrawerNavigation';
import DashboardNavigation from './DashboardNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {
    authData: {isAuthenticated},
  } = useSelector(state => state.auth);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <Stack.Screen
            name="DashboardNavigation"
            component={DashboardNavigation}
            headershow
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

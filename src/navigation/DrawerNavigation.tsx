import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Registration from '../scenes/auth/registration/Registration';
import DashboardNavigation from './DashboardNavigation';
import Whatsapp from '../scenes/auth/Whatsapp';
import ContactUs from '../scenes/contact/ContactUs';

const Drawer = createDrawerNavigator();

const DrawerContent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DashboardNavigation"
        options={{headerShown: false}}
        component={DashboardNavigation}
      />
      <Drawer.Screen name="Registration" component={Registration} />
      <Drawer.Screen name="Whatsapp" component={Whatsapp} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
};

export default DrawerContent;
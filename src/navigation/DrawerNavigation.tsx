import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Registration from '../scenes/auth/registration/Registration';
import DashboardNavigation from './DashboardNavigation';
import Whatsapp from '../scenes/auth/Whatsapp';
import ContactUs from '../scenes/contact/ContactUs';
import ViewBy from '../DrawerNavigationScreen/viewBy';
import ShortList from '../DrawerNavigationScreen/shortList';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import Likes from '../DrawerNavigationScreen/Likes';
import Setting from '../DrawerNavigationScreen/Setting';
import Privacypolicy from '../DrawerNavigationScreen/privacyPolicy';
import Termofuse from '../DrawerNavigationScreen/termofUse';
import Logout from '../DrawerNavigationScreen/Logout';
const Drawer = createDrawerNavigator();

const DrawerContent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        options={{headerShown: false}}
        component={DashboardNavigation}
      />
      <Drawer.Screen name="Likes" component={Likes} />
      <Drawer.Screen name="View By" component={ViewBy} />
      <Drawer.Screen name="Shortlist" component={ShortList} />
      <Drawer.Screen name="Advance Search" component={AdvanceSearch} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Privacy Policy" component={Privacypolicy} />
      <Drawer.Screen name="Term of Use" component={Termofuse} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerContent;

import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardNavigation from './DashboardNavigation';
import translate from '../translations/configTranslations';
import ViewedBy from '../DrawerNavigationScreen/viewedBy';
import Likes from '../DrawerNavigationScreen/Likes';
import CustomDrawer from './customDrawer';
import ShortList from '../DrawerNavigationScreen/shortList';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import Sharebiodata from '../DrawerNavigationScreen/shareBiodata';
import Membershipplans from '../DrawerNavigationScreen/membershipPlans';
import Profile from '../DrawerNavigationScreen/Profile';
import Divorceprofile from '../DrawerNavigationScreen/divorceProfile';
import DisabilityProfile from '../DrawerNavigationScreen/disabilityProfile';
import Needpartner from '../DrawerNavigationScreen/needPartner';
import Widowedprofiles from '../DrawerNavigationScreen/widowedProfiles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Setting from '../DrawerNavigationScreen/Setting';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerLabelStyle: {marginLeft: -10}}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={translate('drawerScreen.Home')}

        options={{headerShown: false, drawerIcon:()=>(
          <Ionicons name="home"size={22} color='#DC1C28'/>
        )
        }}
        component={DashboardNavigation}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Likes')}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="heart" size={22} color="#DC1C28" />
          ),
        }}
        component={Likes}
      />
      <Drawer.Screen
        name={translate('drawerScreen.View By')}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="eye" size={22} color="#DC1C28" />
          ),
        }}
        component={ViewedBy}
      />
      <Drawer.Screen
        name={translate('drawerScreen.shortlist')}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="star" size={22} color="#DC1C28" />
          ),
        }}
        component={ShortList}
      />
       
      <Drawer.Screen
        name={translate(
          'drawerScreen.advanced search-property,goverment job,business,place,kurmiraj',
        )}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search" size={22} color="#DC1C28" />
          ),
        }}
        component={AdvanceSearch}
      />
      <Drawer.Screen
        name={translate('drawerScreen.biodata share')}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="document-text" size={22} color="#DC1C28" />
          ),
        }}
        component={Sharebiodata}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Membership')}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome
              style={{marginHorizontal: 5}}
              name="rupee"
              size={22}
              color="#DC1C28"
            />
          ),
        }}
        component={Membershipplans}
      />

      <Drawer.Screen
        name={translate('drawerScreen.30+ profile')}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="calendar-o" size={22} color="#DC1C28" />
          ),
        }}
        component={Profile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.divorced profile')}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person" size={22} color="#DC1C28" />
          ),
        }}
        component={Divorceprofile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Disabled profile')}
        options={{
          drawerIcon: ({color}) => (
            <Fontisto name="paralysis-disability" size={22} color="#DC1C28" />
          ),
        }}
        component={DisabilityProfile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Need partner')}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person" size={22} color="#DC1C28" />
          ),
        }}
        component={Needpartner}
      />
      <Drawer.Screen
        name={translate('drawerScreen.widowed profile')}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person" size={22} color="#DC1C28" />
          ),
        }}
        component={Widowedprofiles}
      />
      <Drawer.Screen
        name={translate('drawerScreen.settings')}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings" size={22} color="#DC1C28" />
          ),
        }}
        component={Setting}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

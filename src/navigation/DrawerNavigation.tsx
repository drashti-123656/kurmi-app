import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardNavigation from './DashboardNavigation';
import translate from '../translations/configTranslations';
import CustomDrawer from './customDrawer';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import Likes from '../DrawerNavigationScreen/Likes'
import ViewedBy from '../DrawerNavigationScreen/ViewedBy'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import ShortList from '../DrawerNavigationScreen/ShortList'
import Sharebiodata from '../DrawerNavigationScreen/ShareBiodata'
import Membershipplans from '../DrawerNavigationScreen/MembershipPlans'
import Profile from '../DrawerNavigationScreen/Profile'
import Divorceprofile from '../DrawerNavigationScreen/DivorceProfile';
import DisabilityProfile from '../DrawerNavigationScreen/DisabilityProfile'
import Needpartner from '../DrawerNavigationScreen/NeedPartner'
import Widowedprofiles from '../DrawerNavigationScreen/WidowedProfiles'
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
          <Ionicons name="home"size={22} color={styles.color}/>
        )
        }}
        component={DashboardNavigation}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Likes')}
        options={{
          drawerIcon: () => (
            <Ionicons name="heart" size={22} color={styles.color} />
          ),
        }}
        component={Likes}
      />
      <Drawer.Screen
        name={translate('drawerScreen.View By')}
        options={{
          drawerIcon: () => (
            <Ionicons name="eye" size={22} color={styles.color} />
          ),
        }}
        component={ViewedBy}
      />
      <Drawer.Screen
        name={translate('drawerScreen.shortlist')}
        options={{
          drawerIcon: () => (
            <Ionicons name="star" size={22} color={styles.color} />
          ),
        }}
        component={ShortList}
      />
       
      <Drawer.Screen
        name={translate(
          'drawerScreen.advanced search-property,goverment job,business,place,kurmiraj',
        )}
        options={{
          drawerIcon: () => (
            <Ionicons name="search" size={22} color={styles.color} />
          ),
        }}
        component={AdvanceSearch}
      />
      <Drawer.Screen
        name={translate('drawerScreen.biodata share')}
        options={{
          drawerIcon: () => (
            <Ionicons name="document-text" size={22} color={styles.color} />
          ),
        }}
        component={Sharebiodata}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Membership')}
        options={{
          drawerIcon: () => (
            <FontAwesome
              style={{marginHorizontal: 5}}
              name="rupee"
              size={22}
              color={styles.color}
            />
          ),
        }}
        component={Membershipplans}
      />

      <Drawer.Screen
        name={translate('drawerScreen.30+ profile')}
        options={{
          drawerIcon: () => (
            <FontAwesome name="calendar-o" size={22}color={styles.color} />
          ),
        }}
        component={Profile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.divorced profile')}
        options={{
          drawerIcon: () => (
            <Ionicons name="person" size={22}color={styles.color} />
          ),
        }}
        component={Divorceprofile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Disabled profile')}
        options={{
          drawerIcon: () => (
            <Fontisto name="paralysis-disability" size={22} color={styles.color} />
          ),
        }}
        component={DisabilityProfile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Need partner')}
        options={{
          drawerIcon: () => (
            <Ionicons name="person" size={22} color={styles.color} />
          ),
        }}
        component={Needpartner}
      />
      <Drawer.Screen
        name={translate('drawerScreen.widowed profile')}
        options={{
          drawerIcon: () => (
            <Ionicons name="person" size={22} color={styles.color} />
          ),
        }}
        component={Widowedprofiles}
      />
      <Drawer.Screen
        name={translate('drawerScreen.settings')}
        options={{
          drawerIcon: () => (
            <Ionicons name="settings" size={22} color={styles.color} />
          ),
        }}
        component={Setting}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
const styles = EStyleSheet.create({
  color:'#DC1C28'
});


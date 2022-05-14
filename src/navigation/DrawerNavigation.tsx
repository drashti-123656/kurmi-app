import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardNavigation from './DashboardNavigation';
import translate from '../translations/configTranslations';
import CustomDrawer from './customDrawer';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import ViewBy from '../DrawerNavigationScreen/ViewBy';
import ShortLists from '../DrawerNavigationScreen/ShortLists';
import Sharedbiodata from '../DrawerNavigationScreen/SharedBiodata';
import Membershipplan from '../DrawerNavigationScreen/MembershipPlan';
import DivorcedProfile from '../scenes/divorcedProfile/DivorcedProfile';
import DisabilityProfile from '../scenes/disabilityProfile/DisabilityProfile';
import WidowedProfile from '../scenes/widowedProfile/WidowedProfile';
import Settings from '../DrawerNavigationScreen/Settings';
import AllkurmiSamaj from '../DrawerNavigationScreen/AllkurmiSamaj';
import Widower from '../DrawerNavigationScreen/Widower';
import Helpline from '../DrawerNavigationScreen/Helpline';
import Share from '../DrawerNavigationScreen/Share';
import RateUs from '../DrawerNavigationScreen/RateUs';
import Blog from '../DrawerNavigationScreen/Blog';
import Logout from '../DrawerNavigationScreen/Logout';
import EStyleSheet from 'react-native-extended-stylesheet';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerLabelStyle: {marginLeft: -10}, headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
      headerTintColor: '#fff',}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={translate('drawerScreen.Home')}
        options={{headerShown: false}}
        component={DashboardNavigation}
      />
      <Drawer.Screen name="Helpline -" component={Helpline} />
      <Drawer.Screen
        name={translate('drawerScreen.View By')}
        component={ViewBy}
      />
      <Drawer.Screen
        name={translate('drawerScreen.shortlist')}
        component={ShortLists}
      />

      <Drawer.Screen
        name={translate(
          'drawerScreen.advanced search',
        )}
        component={AdvanceSearch}
      />
       <Drawer.Screen
        name={translate('drawerScreen.All Kurmi Samaj')}
        component={AllkurmiSamaj}
      />
      <Drawer.Screen
        name={translate('drawerScreen.biodata share')}
        component={Sharedbiodata}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Membership')}
        component={Membershipplan}
      />

      <Drawer.Screen
        name="Share"
        component={Share}
      />
        <Drawer.Screen
        name="Rate Us"
        component={RateUs}
      />
      <Drawer.Screen
        name={translate('drawerScreen.divorced')}
        component={DivorcedProfile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.disabled')}
        component={DisabilityProfile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Widower')}
        component={Widower}
      />
      <Drawer.Screen
        name={translate('drawerScreen.widowed ')}
        component={WidowedProfile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.settings')}
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardNavigation from './DashboardNavigation';
import translate from '../translations/configTranslations';
import CustomDrawer from './customDrawer';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import Like from '../DrawerNavigationScreen/Like';
import Profile from '../DrawerNavigationScreen/Profile';
import ViewBy from '../DrawerNavigationScreen/ViewBy';
import ShortLists from '../DrawerNavigationScreen/ShortLists';
import Sharedbiodata from '../DrawerNavigationScreen/SharedBiodata';
import Membershipplan from '../DrawerNavigationScreen/MembershipPlan';
import Divorcedprofile from '../DrawerNavigationScreen/DivorcedProfile';
import DisabilityProfiles from '../DrawerNavigationScreen/DisabalityProfiles';
import Needpartners from '../DrawerNavigationScreen/NeedPartners';
import WidowedProfile from '../DrawerNavigationScreen/WidowedProfile';
import Settings from '../DrawerNavigationScreen/Settings';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerLabelStyle: {marginLeft: -10}}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={translate('drawerScreen.Home')}
        options={{headerShown: false}}
        component={DashboardNavigation}
      />
      <Drawer.Screen name={translate('drawerScreen.Likes')} component={Like} />
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
          'drawerScreen.advanced search-property,goverment job,business,place,kurmiraj',
        )}
        component={AdvanceSearch}
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
        name={translate('drawerScreen.30+ profile')}
        component={Profile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.divorced profile')}
        component={Divorcedprofile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Disabled profile')}
        component={DisabilityProfiles}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Need partner')}
        component={Needpartners}
      />
      <Drawer.Screen
        name={translate('drawerScreen.widowed profile')}
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

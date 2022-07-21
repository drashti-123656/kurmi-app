///drawernavigation/////

import 'react-native-gesture-handler';
import {TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardNavigation from './DashboardNavigation';
import translate from '../translations/configTranslations';
import CustomDrawer from './customDrawer';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import ViewBy from '../scenes/viewBy/ViewBy';
import ShortLists from '../scenes/shortList/ShortList';
import Sharedbiodata from '../DrawerNavigationScreen/SharedBiodata';
import Membershipplan from '../DrawerNavigationScreen/MembershipPlan';
import DivorcedProfile from '../scenes/divorcedProfile/DivorcedProfile';
import DisabilityProfile from '../scenes/disabilityProfile/DisabilityProfile';
import WidowedProfile from '../scenes/widowedProfile/WidowedProfile';
import Settings from '../DrawerNavigationScreen/Settings';
import AllkurmiSamaj from '../DrawerNavigationScreen/AllkurmiSamaj';
import WidowerProfile from '../scenes/widowerProfile/WidowerProfile';
import Helpline from '../DrawerNavigationScreen/Helpline';
import Share from '../DrawerNavigationScreen/Share';
import RateUs from '../DrawerNavigationScreen/RateUs';
import EStyleSheet from 'react-native-extended-stylesheet';
import SendRequest from '../scenes/sendRequest/sendRequest';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {DOWNLOAD_PDF} from '../scenes/shareBioData/redux/DownloadPdfAction';
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  const dispatch = useDispatch();

  const downloadPdf = async () => {
    dispatch({
      type: DOWNLOAD_PDF,
    });
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {marginLeft: -10},
        headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
        headerTintColor: '#fff',
      }}
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
        name={translate('drawerScreen.Interest')}
        component={SendRequest}
      />
      <Drawer.Screen
        name={translate('drawerScreen.advanced search')}
        component={AdvanceSearch}
      />
      <Drawer.Screen
        name={translate('drawerScreen.All Kurmi Samaj')}
        component={AllkurmiSamaj}
      />
      <Drawer.Screen
        name={translate('drawerScreen.biodata share')}
        component={Sharedbiodata}
        options={{
          headerShown: true,
          headerTitle: translate('Myprofile.myProfile'),
          headerTitleAlign: 'center',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Gallery Image')}
                style={styles.imageStyle}>
                <MaterialCommunityIcons
                  name="image-edit-outline"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => downloadPdf()}
                style={styles.headerStyle}>
                <Entypo name="share" size={30} color="white" />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('NewsFeedStack')}
              style={styles.headerStyle}>
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name={translate('drawerScreen.Membership')}
        component={Membershipplan}
      />

      <Drawer.Screen name="Share" component={Share} />
      <Drawer.Screen name="Rate Us" component={RateUs} />
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
        component={WidowerProfile}
      />
      <Drawer.Screen
        name={translate('drawerScreen.widowed')}
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

const styles = EStyleSheet.create({
  headerStyle: {
    marginHorizontal: 20,
  },
  imageStyle: {
    marginHorizontal: -10,
  },
  tinyLogo: {
    height: 30,
    width: 30,
  },
});

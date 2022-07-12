import {Alert, TouchableOpacity, View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdvanceSearch from '../scenes/search/AdvanceSearch';
import Home from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather';
import Login from '../scenes/auth/Login';
import RegistrationStack from './RegistrationStack';
import {useDispatch, useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from './../translations/configTranslations';
import NewsFeedStack from './NewsFeedStack';
import Profile from '../scenes/profile/Profile';
import Logout from '../scenes/auth/Logout';
import {logout} from '../scenes/auth/redux/authReducer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DOWNLOAD_PDF} from '../scenes/shareBioData/redux/DownloadPdfAction';
import {clearViewByDataAfterLogout} from '../scenes/viewBy/redux/ViewByReducer';
const Tab = createBottomTabNavigator();

const DashboardNavigation = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    authData: {isAuthenticated},
  } = useSelector(state => state.auth);

  const handleLogout = async () => {
    dispatch(logout({}));
    dispatch(clearViewByDataAfterLogout({}));
  };
  const downloadPdf = async () => {
    dispatch({
      type: DOWNLOAD_PDF,
    });
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
          headerTitle: translate('advanceSearch.Advanced Search'),
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'red',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
          tabBarIcon: () => <Search name="search" color={'black'} size={30} />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('NewsFeedStack')}
              style={styles.headerStyle}>
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      {!isAuthenticated ? (
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
            name="My Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              headerShown: true,
              headerTitle: translate('Myprofile.myProfile'),
              tabBarActiveTintColor: 'red',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},

              tabBarIcon: () => (
                <Search name="user-plus" color={'black'} size={30} />
              ),
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
            listeners={({navigation}) => ({
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

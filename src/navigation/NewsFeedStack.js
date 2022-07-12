import {TouchableOpacity, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EStyleSheet from 'react-native-extended-stylesheet';
import NewsFeed from '../scenes/home/NewsFeed';
import DrawerNavigation from './DrawerNavigation';
import ContactUs from '../scenes/contact/ContactUs';
import OthersProfile from '../scenes/othersProfile/OthersProfile';
import SeeAllProfile from '../scenes/home/SeeAllProfile';
import PasswordChange from '../scenes/passwordChange/passwordChange';
import translate from './../translations/configTranslations';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useSelector} from 'react-redux';
import AdvanceSearchProfile from '../scenes/search/AdvanceSearchProfile';
import PersonalInfoEditProfile from '../scenes/editProfile/PersonalInfoEditProfile';
import samparkEditProfile from '../scenes/editProfile/samparkEditProfile';
import parivarikParichyEditProfile from '../scenes/editProfile/parivarikParichyEditProfile';
import dharmikjankariEditProfile from '../scenes/editProfile/dharmikjankariEditProfile';
import Profile from '../scenes/profile/Profile';
import Galleryimage from '../scenes/galleryImage/galleryImage';
const newsFeedStack = createNativeStackNavigator();

const NewsFeedStack = ({navigation}) => {
  const {
    authData: {isAuthenticated},
  } = useSelector(state => state.auth);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://play.google.com/store/apps/details?id=com.kurmishadi',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <newsFeedStack.Navigator
      initialRouteName="NewsFeed"
      screenOptions={{
        headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
        headerTintColor: '#fff',
      }}>
      {!isAuthenticated ? (
        <newsFeedStack.Screen
          name={translate('NewsFeed.kurmiShadiHeading')}
          component={NewsFeed}
          options={{
            headerShown: true,
            headerTitle: translate('NewsFeed.kurmiShadiHeading'),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <AntDesign name="user" size={30} color="white" />
              </TouchableOpacity>
            ),

            headerLeft: () => (
              <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                <Entypo
                  name="menu"
                  size={30}
                  color="white"
                  style={styles.headerStyle}
                />
              </TouchableHighlight>
            ),
          }}
        />
      ) : (
        <newsFeedStack.Screen
          name={translate('NewsFeed.kurmiShadiHeading')}
          component={NewsFeed}
          options={{
            headerShown: true,
            headerTitle: translate('NewsFeed.kurmiShadiHeading'),

            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ContactUs')}>
                <AntDesign name="user" size={30} color="white" />
              </TouchableOpacity>
            ),

            headerLeft: () => (
              <TouchableHighlight onPress={() => navigation.openDrawer()}>
                <Entypo
                  name="menu"
                  size={30}
                  color="white"
                  style={styles.headerStyle}
                />
              </TouchableHighlight>
            ),
          }}
        />
      )}

      <newsFeedStack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />

      <newsFeedStack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />

      <newsFeedStack.Screen
        name="OthersProfile"
        component={OthersProfile}
        options={{
          headerShown: true,
          headerTitle: 'Profile',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerRight: () => (
            <TouchableOpacity onPress={onShare}>
              <Entypo name="share" size={30} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <newsFeedStack.Screen
        name="SeeAllProfile"
        component={SeeAllProfile}
        options={{
          headerShown: true,
          headerTitle: 'नया  प्रोफाइल',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <newsFeedStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: translate('Myprofile.myProfile'),
          //   headerShown: true,
          //   headerTitle: 'नया  प्रोफाइल',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //     color: 'white',
          //   },
        }}
      />

      <newsFeedStack.Screen
        name="Password Change"
        component={PasswordChange}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: '#ffff',
          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
        }}
      />
      <newsFeedStack.Screen
        name="Gallery Image"
        component={Galleryimage}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: '#ffff',
          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
        }}
      />
      <newsFeedStack.Screen
        name={translate('Vyaktigatdata.Personal information')}
        component={PersonalInfoEditProfile}
        options={{
          headerShown: true,
          headerTitle: translate('Vyaktigatdata.Personal information'),

          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },

          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('My Profile')}>
              <Ionicons
                name="arrow-back"
                size={30}
                color="white"
                style={styles.headerStyle}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <newsFeedStack.Screen
        name={translate('samPark.samparkheader')}
        component={samparkEditProfile}
        options={{
          headerShown: true,
          headerTitle: translate('samPark.samparkheader'),

          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },

          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('My Profile')}>
              <Ionicons
                name="arrow-back"
                size={30}
                color="white"
                style={styles.headerStyle}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <newsFeedStack.Screen
        name="parivarikParichyEditProfile"
        component={parivarikParichyEditProfile}
        options={{
          headerShown: true,
          headerTitle: 'parivarikParichyEditProfile',

          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },

          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('My Profile')}>
              <Ionicons
                name="arrow-back"
                size={30}
                color="white"
                style={styles.headerStyle}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <newsFeedStack.Screen
        name="dharmikjankariEditProfile"
        component={dharmikjankariEditProfile}
        options={{
          headerShown: true,
          headerTitle: 'dharmikjankariEditProfile',

          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },

          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('My Profile')}>
              <Ionicons
                name="arrow-back"
                size={30}
                color="white"
                style={styles.headerStyle}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <newsFeedStack.Screen
        name="AdvanceSearchProfile"
        component={AdvanceSearchProfile}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: '#ffff',
          headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
        }}
      />
    </newsFeedStack.Navigator>
  );
};

export default NewsFeedStack;

const styles = EStyleSheet.create({
  headerStyle: {
    paddingRight: 10,
  },
});

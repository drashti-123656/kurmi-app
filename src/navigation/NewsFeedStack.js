import {TouchableOpacity, TouchableHighlight} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EStyleSheet from 'react-native-extended-stylesheet';
import NewsFeed from '../scenes/home/NewsFeed';
import DrawerNavigation from './DrawerNavigation';
import ContactUs from '../scenes/contact/ContactUs';
import OthersProfile from '../scenes/othersProfile/OthersProfile';
import SeeAllProfile from '../scenes/home/SeeAllProfile';
import PasswordChange from '../scenes/passwordChange';
import translate from './../translations/configTranslations';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useSelector} from 'react-redux';
import AdvanceSearchProfile from '../scenes/search/AdvanceSearchProfile';

const newsFeedStack = createNativeStackNavigator();

const NewsFeedStack = ({navigation}) => {
  const {
    authData: {isAuthenticated},
  } = useSelector(state => state.auth);
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
            <TouchableOpacity>
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

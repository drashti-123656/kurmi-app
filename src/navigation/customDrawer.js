///custom drwer///

import {
  View,
  Text,
  ImageBackground,
  Image,
  Linking,
  alert,
  Share,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import translate, {getCurrentLocale} from '../translations/configTranslations';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../scenes/auth/redux/authReducer';
import {fetchmyProfileDataStarted} from '../scenes/profile/redux/MyProfileReducer';
import {MY_PROFILE_DETAILS} from '../scenes/profile/redux/MyProfileAction';
import {setLocale} from '../translations/configTranslations';
const CustomDrawer = props => {
  const dispatch = useDispatch();
  const {myProfileData} = useSelector(state => state.myProfileDetail);

  useEffect(() => {
    dispatch(fetchmyProfileDataStarted());
    dispatch({
      type: MY_PROFILE_DETAILS,
    });
  }, []);

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

  const handleLogout = async () => {
    dispatch(logout({}));
  };

  const sendWhatsApp = () => {
    let msg = 'Please, Tell me What can i help you?';
    let phoneWithCountryCode = +919406034346;

    let mobile =
      Platform.OS == 'android'
        ? phoneWithCountryCode
        : '+' + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please insert message to send');
      }
    } else {
      alert('Please insert mobile no');
    }
  };
  const LanguageSelect = () => {
    const language = getCurrentLocale();
    if (language === 'en') {
      setLocale('hi_IN');
    } else {
      setLocale('en');
    }
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.containStyle}>
        <View>
          <ImageBackground
            source={require('../assets/user.png')}
            resizeMode="cover">
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(translate('drawerScreen.Profile'));
              }}
              style={styles.button}>
              <Text style={styles.edittext}>Edit</Text>
            </TouchableOpacity>

            <Image
              source={{uri: `${myProfileData.userProfileImage}`}}
              style={styles.drawerimage}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              welcome, {myProfileData.userFirstName}{' '}
              {myProfileData.userLastName}
            </Text>
            <Text style={styles.link}> {myProfileData.userEmail}</Text>
          </ImageBackground>
        </View>
        <View style={styles.sectionView}>
          <View style={styles.separatorLine} />
        </View>
        <DrawerItem
          icon={() => <Ionicons name="home" size={22} color={styles.color} />}
          label={translate('drawerScreen.Home')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.Home'));
          }}
        />

        <DrawerItem
          icon={() => <Ionicons name="eye" size={22} color={styles.color} />}
          label={translate('drawerScreen.View By')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.View By'));
          }}
        />
        <DrawerItem
          icon={() => <Ionicons name="star" size={22} color={styles.color} />}
          label={translate('drawerScreen.shortlist')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.shortlist'));
          }}
        />

        <DrawerItem
          icon={() => <Ionicons name="heart" size={22} color={styles.color} />}
          label={translate('drawerScreen.Interest')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.Interest'));
          }}
        />
        <View>
          <View style={styles.separatorLine} />
        </View>

        <DrawerItem
          icon={() => <Ionicons name="people" size={22} color={styles.color} />}
          label={translate('drawerScreen.Membership')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.Membership'));
          }}
        />
        <DrawerItem
          icon={() => (
            <Ionicons name="document-text" size={22} color={styles.color} />
          )}
          label={translate('drawerScreen.biodata share')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.biodata share'));
          }}
        />
        <DrawerItem
          icon={() => <Ionicons name="search" size={22} color={styles.color} />}
          label={translate('drawerScreen.advanced search')}
          onPress={() => {
            props.navigation.navigate(
              translate('drawerScreen.advanced search'),
            );
          }}
        />
        <DrawerItem
          icon={() => (
            <MaterialIcons name="people" size={22} color={styles.color} />
          )}
          label={translate('drawerScreen.All Kurmi Samaj')}
          onPress={() => {
            props.navigation.navigate(
              translate('drawerScreen.All Kurmi Samaj'),
            );
          }}
        />
        <View>
          <View style={styles.separatorLine} />
        </View>

        <DrawerItem
          icon={() => <Ionicons name="person" size={22} color={styles.color} />}
          label={translate('drawerScreen.divorced')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.divorced'));
          }}
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="face-woman"
              size={22}
              color={styles.color}
            />
          )}
          label={translate('drawerScreen.widowed ')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.widowed '));
          }}
        />
        <DrawerItem
          icon={() => <Ionicons name="person" size={22} color={styles.color} />}
          label={translate('drawerScreen.Widower')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.Widower'));
          }}
        />
        <DrawerItem
          icon={() => (
            <Fontisto
              name="paralysis-disability"
              size={22}
              color={styles.color}
            />
          )}
          label={translate('drawerScreen.disabled')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.disabled'));
          }}
        />
        <DrawerItem
          icon={() => (
            <Ionicons name="settings" size={22} color={styles.color} />
          )}
          label={translate('drawerScreen.settings')}
          onPress={() => {
            props.navigation.navigate(translate('drawerScreen.settings'));
          }}
        />
        <View>
          <View style={styles.separatorLine} />
        </View>
        <DrawerItem
          icon={() => (
            <MaterialIcons name="headset-mic" size={22} color={styles.color} />
          )}
          label="Helpline -"
          onPress={sendWhatsApp}
        />
        <DrawerItem
          icon={() => (
            <MaterialIcons name="translate" size={22} color={styles.color} />
          )}
          label="Language"
          onPress={LanguageSelect}
        />

        <DrawerItem
          icon={() => (
            <MaterialIcons name="share" size={22} color={styles.color} />
          )}
          label="Share"
          onPress={onShare}
        />
        <DrawerItem
          icon={() => (
            <MaterialIcons name="star" size={22} color={styles.color} />
          )}
          label="Rate Us"
          onPress={() => {
            Linking.openURL(
              'https://play.google.com/store/apps/details?id=com.kurmishadi',
            );
          }}
        />
        <DrawerItem
          icon={() => (
            <Fontisto name="blogger" size={22} color={styles.color} />
          )}
          label="Blog"
          onPress={() => {
            Linking.openURL('https://kurmishadi.com/');
          }}
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="logout"
              size={22}
              color={styles.color}
            />
          )}
          label="Log Out"
          onPress={() => handleLogout()}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#C3773B',
    width: 90,
    height: 50,
    marginHorizontal: 150,
    marginTop: 20,
    borderRadius: 30,
  },
  containStyle: {
    backgroundColor: 'white',
  },
  edittext: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  link: {
    position: 'absolute',
    top: 170,
    left: 20,
    color: '#666666',
  },

  text: {
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 20,
    color: '#000000',
  },

  drawerimage: {
    height: 80,
    width: 80,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#C3773B',
    borderRadius: 150 / 2,
    position: 'absolute',
    top: 50,
    left: 10,
  },
  color: '#C3773B',

  sectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  separatorLine: {
    flex: 1,
    backgroundColor: 'black',
    height: 1.2,
    marginLeft: 12,
    marginRight: 24,
  },
});

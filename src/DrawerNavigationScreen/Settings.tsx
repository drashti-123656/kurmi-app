import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
  Linking,
} from 'react-native';
import React from 'react';
import RootScreen from '../components/molecule/rootScreen/RootScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from '../scenes/auth/redux/authReducer';
import {TOGGLE_SWITCH_ACTIVE} from '../scenes/hideProfile/redux/HideProfileAction';
import {
  toggleOff,
  toggleOn,
} from '../scenes/hideProfile/redux/HideProfileReducer';
const Settings = ({navigation}) => {
  const dispatch = useDispatch();
  const {myProfileData} = useSelector(state => state.myProfileDetail);
  const {isActive} = useSelector(state => state.hideProfile);
  const handleHideProfile = () => {
    if (isActive === true) {
      dispatch(toggleOff({}));
      const payload = {
        userUpdateType: 'chnageVisibility',
        userIsVisible: '0',
      };
      dispatch({
        type: TOGGLE_SWITCH_ACTIVE,
        payload,
      });
      Alert.alert('Alert Title', 'Your profile is activated', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      dispatch(toggleOn());
      Alert.alert('Alert Title', 'Your profile is Deactivated', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <RootScreen scrollable={true}>
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View style={styles.userdetailContainer}>
            <TouchableOpacity style={styles.input}>
              <Text style={styles.textColor}> New</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profile}
                source={{uri: `${myProfileData.userProfileImage}`}}
                resizeMode="cover"
              />
              <View style={styles.text}>
                <Text style={styles.profileDetail}>
                  {' '}
                  {myProfileData.userFirstName} {myProfileData.userLastName}
                </Text>
                <Text style={styles.infoText}>{myProfileData.userEmail}</Text>
                <Text style={styles.infoText}>
                  {myProfileData.userMobileNo}
                </Text>
              </View>
            </View>
            <View style={styles.button}>
              <TouchableOpacity style={styles.bottomInput}>
                <Text style={styles.textColor}> No active membership plan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomtextContainer}>
          <TouchableOpacity style={styles.bottomText}>
            <Text style={styles.textStyle}>Hide Profile</Text>
            <Switch
              style={styles.switch}
              trackColor={{false: EStyleSheet.value('$PRIMARY')}}
              value={isActive}
              onValueChange={handleHideProfile}
            />
          </TouchableOpacity>
          <View style={styles.textmargin}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Password Change')}>
              <Text style={styles.textStyle}>Change Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textmargin}>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Share App</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textmargin}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://kurmishadi.com/privacy/');
              }}>
              <Text style={styles.textStyle}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textmargin}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://kurmishadi.com/terms/');
              }}>
              <Text style={styles.textStyle}>Term Of Use</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textmargin}>
            <TouchableOpacity onPress={() => handleLogout()}>
              <Text style={styles.textStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </RootScreen>
  );
};

export default Settings;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  userdetailContainer: {
    flex: 1,
  },
  bottomText: {
    borderBottomWidth: 1,
    borderColor: '$WHITE',
    flexDirection: 'row',
  },
  textmargin: {
    marginTop: 40,
  },
  bottomtextContainer: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  bottomContainer: {
    backgroundColor: '$WHITE',
    flex: 0.5,
    borderRadius: 10,
    height: 230,
  },
  image: {
    height: 90,
    width: 90,
    marginLeft: 30,
    marginTop: 60,
    borderRadius: 50,
  },
  input: {
    borderWidth: 1,
    width: 80,
    height: 35,
    marginTop: 20,
    marginLeft: '70%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginHorizontal: 15,
    borderWidth: 3,
    borderColor: '#C3773B',
  },
  text: {
    marginTop: 10,
  },
  bottomInput: {
    borderWidth: 1,
    width: 250,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '$WHITE',
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  switch: {
    marginHorizontal: 180,
  },
  textColor: {
    color: '$PRIMARY',
  },
  profileDetail: {
    paddingLeft: 3,
    fontWeight: 'bold',
    color: '$DARK',
    fontSize: 18,
  },
  infoText: {
    paddingLeft: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});

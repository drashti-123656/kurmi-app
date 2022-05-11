import {View, Text, Image, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';
import RootScreen from '../components/molecule/rootScreen/RootScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <RootScreen scrollable={true}>
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View>
            <TouchableOpacity style={styles.input}>
              <Text style={styles.textColor}> New</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profile}
                source={require('../assets/profile2.png')}
              />
              <View>
                <Text>Test User</Text>
                <Text>test123@gmail.com</Text>
                <Text>+91 9991123456</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bottomInput}>
              <Text style={styles.textColor}> No active membership plan</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomtextContainer}>
          <TouchableOpacity style={styles.bottomText}>
            <Text style={styles.textStyle}>Hide Profile</Text>
            <Switch
              style={styles.switch}
              trackColor={{false: EStyleSheet.value('$PRIMARY')}}
              value={isEnabled}
              onValueChange={value => setIsEnabled(value)}
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
            <TouchableOpacity>
              <Text style={styles.textStyle}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textmargin}>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Term Of Use</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textmargin}>
            <TouchableOpacity>
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
    marginTop: 50,
    marginHorizontal: 10,
  },
  imageContainer: {
    flexDirection: 'row',
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
    width: 90,
    height: 40,
    marginTop: 20,
    marginHorizontal: 260,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginHorizontal: 30,
    marginTop: -10,
  },
  bottomInput: {
    borderWidth: 1,
    width: 330,
    height: 60,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 20,
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
});
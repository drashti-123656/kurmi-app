import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    Switch,
    Modal,
    Pressable,
  } from 'react-native';
  import React, {useState} from 'react';
  import RootScreen from '../components/molecule/rootScreen/RootScreen';
  import AuthNavigation from '../navigation/AuthNavigation';
  const Settings = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
      <RootScreen scrollable={true}>
        <View style={styles.container}>
          <View style={styles.bottomContainer}>
            <View>
              <TouchableOpacity style={styles.input}>
                <Text style={{color: 'green'}}> New</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 50,
                    marginHorizontal: 30,
                    marginTop: -10,
                  }}
                  source={require('../assets/profile2.png')}
                />
                <View>
                  <Text>Test User</Text>
                  <Text>test123@gmail.com</Text>
                  <Text>+91 9991123456</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.bottomInput}>
                <Text style={{color: 'green'}}> No active membership plan</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 70, marginHorizontal: 20}}>
            <TouchableOpacity
              style={{
                borderBottomWidth: 1,
                borderColor: 'white',
                flexDirection: 'row',
              }}>
              <Text style={styles.textStyle}>Hide Profile</Text>
              <Switch
                style={styles.switch}
                trackColor={{false: 'gray'}}
                value={isEnabled}
                onValueChange={value => setIsEnabled(value)}
              />
            </TouchableOpacity>
            <View style={{marginTop: 50}}>
              <TouchableOpacity
                style={{borderBottomWidth: 1, borderColor: 'white'}}
                onPress={() => navigation.navigate('Password Change')}>
                <Text style={styles.textStyle}>
                  Change Password
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 50}}>
              <TouchableOpacity
                style={{borderBottomWidth: 1, borderColor: 'white'}}>
                <Text style={styles.textStyle}>Share App</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 50}}>
              <TouchableOpacity
                style={{borderBottomWidth: 1, borderColor: 'white'}}>
                <Text style={styles.textStyle}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 50}}>
              <TouchableOpacity
                style={{borderBottomWidth: 1, borderColor: 'white'}}>
                <Text style={styles.textStyle}>Term Of Use</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 40}}>
              <TouchableOpacity
                style={{borderBottomWidth: 1, borderColor: 'white'}}>
                <Text style={styles.textStyle}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RootScreen>
    );
  };
  
  export default Settings;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      marginHorizontal: 10,
    },
    bottomContainer: {
      backgroundColor: 'white',
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
    textStyle:{
      color: 'white', fontSize: 22
    },
    switch:{
      marginHorizontal:180
    }
  });
  
  
  
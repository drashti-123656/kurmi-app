import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <View>
          <ImageBackground
            source={require('../assets/user.png')}
            resizeMode="cover">
            <TouchableOpacity style={styles.button}>
              <Text style={styles.logintext}>Login</Text>
            </TouchableOpacity>

            <Image
              source={require('../assets/draweruser.png')}
              style={styles.drawerimage}
            />
            <Text style={styles.text}>Welcome to Kurmi Rishtey</Text>
            <Text
              style={styles.link}
              onPress={() => {
                Linking.openURL('https://www.kurmirishtey.com/');
              }}>
              www.kurmiRishtey.com
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.drawerContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View></View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DC1C28',
    width: 90,
    height: 50,
    marginHorizontal: 150,
    marginTop: 20,
    borderRadius: 30,
  },
  logintext: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  link: {
    position: 'absolute',
    top: 170,
    left: 20,
  },

  text: {
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 20,
  },
  drawerContainer: {
    paddingTop: 50,
  },
  drawerimage: {
    height: 80,
    width: 80,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#DC1C28',
    borderRadius: 150 / 2,
    position: 'absolute',
    top: 50,
    left: 10,
  },
});

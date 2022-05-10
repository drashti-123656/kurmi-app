import {View, Text, ImageBackground, Image, Linking} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Drawer} from 'react-native-paper';
import translate from '../translations/configTranslations';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.containStyle}>
        <View>
          <ImageBackground
            source={require('../assets/user.png')}
            resizeMode="cover">
            <TouchableOpacity style={styles.button}>
              <Text style={styles.logintext}>Edit</Text>
            </TouchableOpacity>

            <Image
              source={require('../assets/draweruser.png')}
              style={styles.drawerimage}
            />
            <Text style={styles.text}>welcome, Test User</Text>
            <Text style={styles.link}>testuser@test.com</Text>
          </ImageBackground>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <Drawer.Item
            icon={() => <Ionicons name="home" size={22} color={styles.color} />}
            label={translate('drawerScreen.Home')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.Home'));
            }}
          />

          <Drawer.Item
            icon={() => <Ionicons name="eye" size={22} color={styles.color} />}
            label={translate('drawerScreen.View By')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.View By'));
            }}
          />
          <Drawer.Item
            icon={() => <Ionicons name="star" size={22} color={styles.color} />}
            label={translate('drawerScreen.shortlist')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.shortlist'));
            }}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawer}>
          <Drawer.Item
            icon={() => (
              <Ionicons name="people" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.Membership')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.Membership'));
            }}
          />
          <Drawer.Item
            icon={() => (
              <Ionicons name="document-text" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.biodata share')}
            onPress={() => {
              props.navigation.navigate(
                translate('drawerScreen.biodata share'),
              );
            }}
          />
          <Drawer.Item
            icon={() => (
              <Ionicons name="search" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.advanced search')}
            onPress={() => {
              props.navigation.navigate(
                translate('drawerScreen.advanced search'),
              );
            }}
          />
          <Drawer.Item
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
        </Drawer.Section>

        <Drawer.Section style={styles.drawer}>
          <Drawer.Item
            icon={() => (
              <Ionicons name="person" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.divorced')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.divorced'));
            }}
          />
          <Drawer.Item
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
          <Drawer.Item
            icon={() => (
              <Ionicons name="person" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.Widower')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.Widower'));
            }}
          />
          <Drawer.Item
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
          <Drawer.Item
            icon={() => (
              <Ionicons name="settings" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.settings')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.settings'));
            }}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawer}>
          <Drawer.Item
            icon={() => (
              <MaterialIcons
                name="headset-mic"
                size={22}
                color={styles.color}
              />
            )}
            label="Helpline -"
            onPress={() => {
              props.navigation.navigate('Helpline -');
            }}
          />

          <Drawer.Item
            icon={() => (
              <MaterialIcons name="share" size={22} color={styles.color} />
            )}
            label="Share"
            onPress={() => {
              props.navigation.navigate('Share');
            }}
          />
          <Drawer.Item
            icon={() => (
              <MaterialIcons name="star" size={22} color={styles.color} />
            )}
            label="Rate Us"
            onPress={() => {
              props.navigation.navigate('Rate Us');
            }}
          />
          <Drawer.Item
            icon={() => (
              <Fontisto name="blogger" size={22} color={styles.color} />
            )}
            label="Blog"
            onPress={() => {
              props.navigation.navigate('Blog');
            }}
          />
          <Drawer.Item
            icon={() => (
              <MaterialCommunityIcons
                name="logout"
                size={22}
                color={styles.color}
              />
            )}
            label="Log Out"
            onPress={() => {
              props.navigation.navigate('Log Out');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  fontawesome: {
    marginHorizontal: 5,
  },
  drawer: {
    marginTop: 10,
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
    color: '#666666',
  },

  text: {
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 20,
    color: '#000000',
  },
  drawerContainer: {
    paddingTop: 50,
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
  drawerSection: {
    marginTop: 40,
  },
});

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

        <Drawer.Section style={styles.drawerSection}>
          <Drawer.Item
            icon={() => <Ionicons name="home" size={22} color={styles.color} />}
            label={translate('drawerScreen.Home')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.Home'));
            }}
          />
          <Drawer.Item
            icon={() => (
              <Ionicons name="heart" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.Likes')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.Likes'));
            }}
          />
          <Drawer.Item
            icon={() => <Ionicons name="eye" size={22} color={styles.color} />}
            label={translate('drawerScreen.View By')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.View By'));
            }}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawer}>
          <Drawer.Item
            icon={() => <Ionicons name="star" size={22} color={styles.color} />}
            label={translate('drawerScreen.shortlist')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.shortlist'));
            }}
          />
          <Drawer.Item
            icon={() => (
              <Ionicons name="search" size={22} color={styles.color} />
            )}
            label={translate(
              'drawerScreen.advanced search-property,goverment job,business,place,kurmiraj',
            )}
            onPress={() => {
              props.navigation.navigate(
                translate(
                  'drawerScreen.advanced search-property,goverment job,business,place,kurmiraj',
                ),
              );
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
        </Drawer.Section>

        <Drawer.Section style={styles.drawer}>
          <Drawer.Item
            icon={() => (
              <FontAwesome
                style={styles.fontawesome}
                name="rupee"
                size={22}
                color={styles.color}
              />
            )}
            label={translate('drawerScreen.Membership')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.Membership'));
            }}
          />
          <Drawer.Item
            icon={() => (
              <FontAwesome name="calendar-o" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.30+ profile')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.30+ profile'));
            }}
          />
          <Drawer.Item
            icon={() => (
              <Ionicons name="person" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.divorced profile')}
            onPress={() => {
              props.navigation.navigate(
                translate('drawerScreen.divorced profile'),
              );
            }}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawer}>
          <Drawer.Item
            icon={() => (
              <Fontisto
                name="paralysis-disability"
                size={22}
                color={styles.color}
              />
            )}
            label={translate('drawerScreen.Disabled profile')}
            onPress={() => {
              props.navigation.navigate(
                translate('drawerScreen.Disabled profile'),
              );
            }}
          />
          <Drawer.Item
            icon={() => (
              <Ionicons name="person" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.Need partner')}
            onPress={() => {
              props.navigation.navigate(translate('drawerScreen.Need partner'));
            }}
          />
          <Drawer.Item
            icon={() => (
              <Ionicons name="person" size={22} color={styles.color} />
            )}
            label={translate('drawerScreen.widowed profile')}
            onPress={() => {
              props.navigation.navigate(
                translate('drawerScreen.widowed profile'),
              );
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
    backgroundColor: '#DC1C28',
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
  color: '#DC1C28',
  drawerSection: {
    marginTop: 40,
  },
});

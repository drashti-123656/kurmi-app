import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import translate, {setLocale} from '../../translations/configTranslations';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import en from '../../translations/en.json';
import hi_IN from '../../translations/hi_IN.json';

const LanguageSelection = ({navigation}) => {
  const [selected, setSelected] = useState(false);

  const _handleLanguageSelect = () => {
    if (selected) {
      setLocale('en');
    } else {
      setLocale('hi_IN');
    }

    navigation.navigate('WhatsApp');
  };

  return (
    <RootScreen scrollable={true}>
      <View>
      <Text style={styles.webLink}>
        {translate('languageselection.Select language')}
      </Text>
      </View>
      <View style={styles.container}>
       
        <View style={styles.container1}>
          <Pressable style={styles.pressablecontainereng}>
            <Text
              style={styles.texteng}
              onPress={() => setSelected(!selected)}
              style={{
                backgroundColor: selected ? '#C3773B' : 'white',
                padding: 20,
                borderRadius: 22,
             
              }}>
              ENG
            </Text>
          </Pressable>
        </View>
        <View style={styles.container2}>
          <Pressable>
            <Text
              style={styles.texthindi}
              onPress={() => setSelected(!selected)}
              style={{
                backgroundColor: !selected ? '#C3773B' : 'white',
                padding: 20,
                borderRadius: 22,
              }}>
              {' '}{' '}{' '}
              अ{' '}{' '}{' '}
            </Text>
          </Pressable>
        </View>
        
        <View>       
           <View style={styles.iconview}>
          <Pressable>
            <Icon
              name="arrow-circle-right"
              size={50}
              color="#C3773B"
              onPress={_handleLanguageSelect}
            />
          </Pressable>
        </View>
        </View>

      </View>
    </RootScreen>
  );
};

export default LanguageSelection;

const styles = StyleSheet.create({
  webLink: {
    color: 'white',
    fontSize: widthPercentageToDP('4.5%'),
    marginHorizontal: 36,
    // paddingTop: 20,
    marginBottom: -1,
    marginTop: 230,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
  },
  container1: {
    alignContent: 'center',
    marginLeft: -10,
  },
  pressablecontainereng: {
     marginLeft: 100,
    
    marginTop: 20,
  },
  texteng: {
    marginTop: 50,
    marginRight: 20,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 30,
    textAlign: 'center',
  },
  container2: {
    marginLeft: 53,
    marginTop: 20,
  },
  texthindi: {
    marginTop: 49,
    marginRight: 15,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 30,
    paddingRight: 25,
    textAlign: 'center',
    
    
  },
  iconview: {

    marginTop: 300,
  marginLeft:-187,
    alignItems:'center'
  },
});

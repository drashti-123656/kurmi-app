import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import translate from './../../translations/configTranslations';

const NewsFeed = ({navigation}) => {
  const [fromAge, setfromAge] = useState('');
  const [toAge, SettoAge] = useState('');
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: 'वर', selected: true},
    {id: 2, value: false, name: 'वधू', selected: false},
  ]);
  const onRadioBtnClick = item => {
    let updatedState = isLiked.map(isLikedItem =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };

  const submitButton = () => {
    console.log(fromAge, toAge);
  };

  return (
    <RootScreen>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <EvilIcons name="navicon" size={30} color={'white'} />
          </View>

          <View style={styles.pinClipart}>
            <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
              <Image
                style={styles.PinClipart_img}
                source={require('../../assets/PinClipart.png')}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.navbarText}>{translate('NewsFeed.kurmiShadiHeading')}</Text>
        </View>
        <Text style={styles.title}>{translate('NewsFeed.title')}</Text>

        <Text style={styles.bottomText}>{translate('NewsFeed.choose')}</Text>

        <View style={styles.radioButtonContainer}>
          {isLiked.map(item => (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                onPress={() => onRadioBtnClick(item)}
                style={styles.radioButton}>
                {item.selected ? <View style={styles.radioButtonIcon} /> : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
                <Text style={styles.radioButtonText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <>
          <View style={styles.ageContainer}>
            <TextInput
              onChangeText={FromAge => setfromAge(FromAge)}
              value={fromAge}
              style={styles.textinput}
              placeholder={translate('NewsFeed.ageFrom')}
              keyboardType="numeric"
              placeholderTextColor={'#666666'}
            />

            <TextInput
              onChangeText={ToAge => SettoAge(ToAge)}
              value={toAge}
              keyboardType="numeric"
              style={styles.textinput}
              placeholder={translate('NewsFeed.ageTo')}
              placeholderTextColor={'#666666'}
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={submitButton}>
            <Text style={styles.text_btn}>{translate('NewsFeed.Search')}</Text>
          </TouchableOpacity>
        </>
        <View>
          <Text style={styles.text}>
          {translate('NewsFeed.filterProfile')}
          </Text>
          <View style={styles.footeContainer}>
            <View>
              <Text style={styles.titleText}>{translate('NewsFeed.newIntro')}</Text>
              <Text style={styles.titleTextnext}>
              {translate('NewsFeed.recentlyJoint')}
              </Text>
            </View>
            <View style={styles.profileImageContainer}>
              <View style={styles.firstImage}>
                <Image
                  style={styles.profile_img}
                  source={require('../../assets/profile.png')}
                />
                <View style={styles.footerTextContainer}>
                  <Text style={styles.profileText}>{translate('NewsFeed.newProfile')} </Text>
                  <Text>{translate('NewsFeed.intro')} </Text>
                </View>
              </View>

              <View style={styles.SecondImage}>
                <Image
                  style={styles.profile_img}
                  source={require('../../assets/profile1.png')}
                />
                <View style={styles.footerTextContainer}>
                  <Text style={styles.profileText}> {translate('NewsFeed.newProfile')} </Text>
                  <Text> {translate('NewsFeed.intro')} </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </RootScreen>
  );
};

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#DC1C28',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageContainer: {
    marginTop: 18,
  },
  pinClipart: {
    position: 'absolute',
    left: 325,
    top: 15,
  },
  PinClipart_img: {
    width: 25,
    height: 25,
  },
  navbarText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 22,
    color: '#ffffff',
  },
  bottomText: {
    marginHorizontal: 30,
    fontSize: 18,
    color: '#FFFFFF',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 80,
  },
  radioButton: {
    height: 25,
    width: 25,
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  radioButtonIcon: {
    height: 15,
    width: 15,
    borderRadius: 9,
    backgroundColor: 'white',
  },
  radioButtonText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '400',
    marginTop: 15,
  },
  ageContainer: {
    flexDirection: 'row',
  },
  textinput: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    flex: 1,
    borderRadius: 10,
    padding: 10,
    height: hp(8),
    color: 'black',
    width: 160,
  },
  submitButton: {
    backgroundColor: '#DC1C28',
    height: hp(8),
    marginHorizontal: 30,
    borderRadius: 10,
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 15,
    fontSize: 20,
    color: 'white',
  },
  text: {
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
  footeContainer: {
    backgroundColor: '#EDEDED',
    height: 380,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 40,
  },
  titleText: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  titleTextnext: {
    marginTop: 3,
    color: '#8A8787',
  },
  profileImageContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  firstImage: {
    marginHorizontal: 10,
  },
  profile_img: {
    width: 180,
    height: 180,
    marginTop: 50,
    marginLeft: -160,
  },
  footerTextContainer: {
    marginHorizontal: -160,
    height: 50,
    width: 180,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontWeight: 'bold',
  },
  SecondImage: {
    marginHorizontal: 170,
  },
});

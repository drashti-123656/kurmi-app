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
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
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
            <Image
              style={styles.vector_img}
              source={require('../../assets/Vector.png')}
            />
          </View>

          <View style={styles.pinClipart}>
            <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
              <Image
                style={styles.PinClipart_img}
                source={require('../../assets/PinClipart.png')}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.navbarText}>कुर्मी शादी</Text>
        </View>
        <Text style={styles.title}>मैं देख रहा हूं</Text>

        <Text style={styles.bottomText}>वर या वधू चुनिए</Text>

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
              placeholder="आयु सेम"
              keyboardType="numeric"
              placeholderTextColor={'#666666'}
            />

            <TextInput
              onChangeText={ToAge => SettoAge(ToAge)}
              value={toAge}
              keyboardType="numeric"
              style={styles.input}
              placeholder="आयु तक"
              placeholderTextColor={'#666666'}
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={submitButton}>
            <Text style={styles.text_btn}>खोजे</Text>
          </TouchableOpacity>
        </>
        <View>
          <Text style={styles.text}>
            प्रोफाइल ID से खोजें / फिल्टर लगाना है
          </Text>
          <View style={styles.footeContainer}>
            <View>
              <Text style={styles.titleText}>नया वैवाहिक परिचय</Text>
              <Text style={styles.titleTextnext}>
                जो लोग अभी अभी नए जुड़े हैं
              </Text>
            </View>
            <View style={styles.profileImageContainer}>
              <View style={styles.firstImage}>
                <Image
                  style={styles.profile_img}
                  source={require('../../assets/profile.png')}
                />
                <View style={styles.footerTextContainer}>
                  <Text style={styles.profileText}>नया प्रोफाइल </Text>
                  <Text>28 वर्ष रायपुर छत्तीसगढ़ </Text>
                </View>
              </View>

              <View style={styles.SecondImage}>
                <Image
                  style={styles.profile_img}
                  source={require('../../assets/profile1.png')}
                />
                <View style={styles.footerTextContainer}>
                  <Text style={styles.profileText}>नया प्रोफाइल </Text>
                  <Text>28 वर्ष रायपुर छत्तीसगढ़ </Text>
                </View>
                <View></View>
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
  vector_img: {
    width: 15,
    height: 15,
  },
  ageContainer: {
    flexDirection: 'row',
  },
  firstImage: {
    marginHorizontal: 10,
  },
  SecondImage: {
    marginHorizontal: 170,
  },
  footeContainer: {
    backgroundColor: '#EDEDED',
    height: 380,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 40,
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
  pinClipart: {
    position: 'absolute',
    left: 340,
    top: 15,
  },
  titleText: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  titleTextnext: {
    marginTop: 3,
    color: '#8A8787',
  },
  bottomText: {
    marginHorizontal: 20,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  profileText: {
    fontWeight: 'bold',
  },
  profileImageContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },

  imageContainer: {
    marginTop: 18,
  },
  bg_img: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#ffffff',
  },
  input_view: {
    flex: 1,
  },
  textinput: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,
    height: hp(8),
    color: 'black',
    width: 160,
  },
  input: {
    backgroundColor: 'white',
    // marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 90,
    height: hp(8),
    color: 'black',
    width: 160,
  },
  textinput_msg: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 20,
    textAlignVertical: 'top',
    color: 'black',
  },
  submitButton: {
    backgroundColor: '#DC1C28',
    height: hp(7),
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 10,
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  footer: {
    backgroundColor: '#DC1C28',
    marginTop: 60,
    marginHorizontal: 30,
    borderRadius: 10,
    height: hp(15),
  },
  footer_text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  info: {
    flexDirection: 'row',
  },
  info_img: {
    marginHorizontal: 20,
    height: hp(2.5),
    width: wp(5),
  },
  info_text: {
    color: 'white',
    fontWeight: '500',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 115,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 9,
    backgroundColor: 'black',
  },
  buttonIcon: {
    height: 14,
    width: 14,
    borderRadius: 9,
    backgroundColor: 'black',
  },

  radioButtonText: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 20,
  },
  ButtonText: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

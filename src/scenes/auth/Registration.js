import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import React from 'react';
  import {useState} from 'react';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import RootScreen from '../../components/molecule/rootScreen/RootScreen';
  import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
  import CheckBox from '../../components/atoms/buttons/Checkbox';
  const Registration = () => {
    const [FirstName, setFirstName] = useState('');
    const [LastName, SetLastName] = useState('');
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
  
    const [Mobile, SetMobile] = useState('');
    const [isLiked, setIsLiked] = useState([
      {id: 1, value: true, name: 'वर', selected: true},
      {id: 2, value: false, name: 'वधू ', selected: false},
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
              <TouchableOpacity>
              <Image
                style={styles.backArrow_img}
                source={require('../../assets/backarrow.png')}
              />
              </TouchableOpacity>
            </View>
  
            <Text style={styles.navbarText}>Registration</Text>
          </View>
          <View style={styles.profileContainer}>
            <Image
              style={styles.upload_img}
              source={require('../../assets/upload.png')}
            />
          </View>
  
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
              <ExtendedTextInput
                onChangeText={() => {}}
                onBlur={() => {}}
                placeholder={'प्रोफाइल बनने वाला'}
              />
            </View>
            <View style={styles.dataContainer}>
              <TextInput
                onChangeText={FirstName => setFirstName(FirstName)}
                value={FirstName}
                style={styles.textinput}
                placeholder="पहला नाम"
                placeholderTextColor={'#666666'}
              />
  
              <TextInput
                onChangeText={LastName => SetLastName(LastName)}
                value={LastName}
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor={'#666666'}
              />
            </View>
            <View>
              <TextInput
                onChangeText={Email => SetEmail(Email)}
                value={Email}
                style={styles.commonInput}
                placeholder="ईमेल ID"
                placeholderTextColor={'#666666'}
              />
              <TextInput
                onChangeText={MobileNumber => SetMobile(MobileNumber)}
                value={Mobile}
                style={styles.commonInput}
                placeholder="मोबाइल नंबर"
                placeholderTextColor={'#666666'}
              />
            </View>
            <View style={styles.birthdayInput}>
              <ExtendedTextInput
                onChangeText={() => {}}
                onBlur={() => {}}
                placeholder={'जन्मतिथि'}
              />
            </View>
            <Text style={styles.text}>
              <Text style={styles.star}>*</Text>
              उम्र काम से काम 18 वर्ष होनी चाहिए
            </Text>
            <View>
              <ExtendedTextInput
                onChangeText={() => {}}
                onBlur={() => {}}
                placeholder={'गोत्र '}
              />
              <ExtendedTextInput
                onChangeText={() => {}}
                onBlur={() => {}}
                placeholder={'देश '}
              />
              <ExtendedTextInput
                onChangeText={() => {}}
                onBlur={() => {}}
                placeholder={' राज्य '}
              />
              <ExtendedTextInput
                onChangeText={() => {}}
                onBlur={() => {}}
                placeholder={'  शहर  '}
              />
            </View>
            <TextInput
              onChangeText={Password => SetPassword(Password)}
              value={Password}
              style={styles.commonInput}
              placeholder="पासवर्ड  डाले"
              placeholderTextColor={'#666666'}
            />
            <Text style={styles.text}>
              <Text style={styles.star}>*</Text> पासवर्ड कम से कम कैरेक्टर नंबर का हो 
            </Text>
            <View style={{}}>
              <CheckBox text="में  Privacy Policy और  Terms of use  से  सहमत हु  " />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={submitButton}>
              <Text style={styles.text_btn}>अकाउंट बनाएं  </Text>
            </TouchableOpacity>
          </>
        </ScrollView>
      </RootScreen>
    );
  };
  
  export default Registration;
  
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      height: 52,
      flexDirection: 'row',
      backgroundColor: '#DC1C28',
      paddingLeft: 10,
      paddingRight: 10,
    },
    backArrow_img: {
      width: 30,
      height: 25,
    },
    dataContainer: {
      flexDirection: 'row',
      marginHorizontal: 16,
      marginTop: 10,
    },
  
    upload_img: {
      flex: 1,
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    profileContainer: {
      justifyContent: 'center',
      alignSelf: 'center',
      flex: 1,
      marginTop: 30,
    },
    ageContainer: {
      flexDirection: 'row',
      marginTop: 30,
    },
    birthdayInput: {
      marginTop: -5,
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
      marginHorizontal: 90,
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
      height: hp(7),
      color: 'black',
      width: 155,
      fontSize: 15,
      marginTop: 5,
    },
    input: {
      backgroundColor: 'white',
      marginVertical: 10,
      borderRadius: 10,
      paddingLeft: 50,
      height: hp(7),
      color: 'black',
      width: 150,
      fontSize: 17,
      marginTop: 5,
    },
    commonInput: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 30,
      marginVertical: 10,
      paddingLeft: 15,
      height: hp(7),
      color: 'black',
      fontSize: 15,
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
      marginTop: 30,
      borderRadius: 10,
      marginBottom: 60,
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
      marginTop: 20,
    },
    ButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 100,
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
      marginHorizontal: 40,
      fontSize: 15,
      color: '#FFFFFF',
    },
    star: {
      color: '#FF0000',
    },
    checkboxcontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
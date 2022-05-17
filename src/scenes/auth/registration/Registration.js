import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../../components/molecule/rootScreen/RootScreen';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import translate from '../../../translations/configTranslations';
import {RegistrationvalidationSchema} from '../../../utils/schema/registerSchema';
import dropDownList from '../../../utils/constants/dropDownList';
import Dropdown from '../../../components/atoms/dropdown/Dropdown';
import {showMessage} from 'react-native-flash-message';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  FETCH_CITY_DROPDOWN,
  FETCH_COUNTRY_DROPDOWN,
  FETCH_PROFILECREATER_DROPDOWN,
  FETCH_STATE_DROPDOWN,
  UPDATE_PROFILE,
  VERIFY_USER,
} from './redux/registrationActions';

import {useDispatch, useSelector} from 'react-redux';
import {register} from './redux/registrationReducer';
import ExtendedTextInput from '../../../components/atoms/inputs/ExtendedTextInput';
import LoginButton from '../../../components/atoms/buttons/LoginButton';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '../../../components/atoms/picker/DateTimePicker';

const Registration = ({navigation}) => {
  const dispatch = useDispatch();
  const [termsCondition, setTermsCondition] = useState(false);

  const [ProfilePic, setProfilePic] = useState(null);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const {
    registerData,
    isVerifiying,

    dropDownsData: {profilemaker, country, state, city},
  } = useSelector(state => state.registration);

  useEffect(() => {
    dispatch({
      type: FETCH_PROFILECREATER_DROPDOWN,
      payload: {moduleType: 'ProfileCreatedBy'},
    });

    dispatch({
      type: FETCH_COUNTRY_DROPDOWN,
      payload: {moduleType: 'Country'},
    });
  }, []);

  const handleregisterUser = values => {
    if (!ProfilePic) {
      showMessage({
        message: 'Please upload profile image ',
        type: 'info',
        backgroundColor: EStyleSheet.value('$WARNING_RED'),
      });

      if (!termsCondition) {
        showMessage({
          message: 'Please check privacy policy checkbox ',
          type: 'info',
          backgroundColor: EStyleSheet.value('$WARNING_RED'),
        });
      }
      return;
    }
    const payload = {
      where: {userEmail: values.emailid, userMobileNo: values.mobilenumber},
      queryType: 'whereor',
      userGender: values.gender,
      userProfileCreatedBy: values.profilemaker,
      userFirstName: values.firstname,
      userLastName: values.lastname,
      userDob: values.birthdate,
      userCountry: values.country,
      userState: values.state,
      userCity: values.city,
      password: values.password,
      userProfileImage: ProfilePic,
    };
    console.log('payload==============================>', payload);
    console.log('dov', values.birthdate);

    dispatch({
      type: VERIFY_USER,
      payload,
    });

    dispatch(register(payload));
    //setLoading(true);
  };

  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: translate('register.Var'), selected: true},
    {id: 2, value: false, name: translate('register.Vadhu'), selected: false},
  ]);

  const genderSelectData = [
    {id: 1, name: translate('register.Var')},
    {id: 2, name: translate('register.Vadhu')},
  ];

  const onRadioBtnClick = item => {
    let updatedState = isLiked.map(isLikedItem =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };

  const handleChooseProfilePic = () => {
    launchImageLibrary({noData: true, includeBase64: true}, response => {
      console.log(response);
      if (response) {
        setProfilePic(response);
      }
    });
  };

  return (
    <RootScreen scrollable={true}>
      <Formik
        initialValues={{
          gender: 'male',
          profilemaker: registerData.profilemaker,
          firstname: registerData.firstname,
          lastname: registerData.lastname,
          emailid: registerData.emailid,
          mobilenumber: registerData.mobilenumber,
          birthdate: new Date(),

          country: registerData.country,
          state: registerData.state,
          city: registerData.city,
          password: registerData.password,
        }}
        validationSchema={RegistrationvalidationSchema}
        onSubmit={values => handleregisterUser(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.profileContainer}>
              {/* {console.log('sads===>', ProfilePic)}
              {ProfilePic ? (
                <Image
                  source={require('../../../assets/upload1.png')}
                  style={{...styles.profilePic, marginRight: 20}}
                />
              ) : (
                <Image
                  source={{uri:`${ProfilePic?.assets[0]?.uri}`}}
                  style={{...styles.profilePic, marginRight: 20}}
                />
              )} */}
              <TouchableOpacity
                onPress={handleChooseProfilePic}
                style={styles.uploadProfile}>
                {ProfilePic ? (
                  <Image
                    style={styles.upload_img}
                    source={{uri: `${ProfilePic?.assets[0]?.uri}`}}
                  />
                ) : (
                  <TouchableOpacity
                    onPress={handleChooseProfilePic}
                    style={{
                      // position: 'absolute',
                      width: 150,
                      height: 150,
                      backgroundColor: '#333',
                      opacity: 0.5,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 1,
                      // position: 'absolute',
                      // width: 40,
                      // flex: 1,
                      // height: 40,
                      // //marginHorizontal : '30%',

                      // marginTop: 100,
                      // marginBottom: 20,
                      // //resizeMode: 'contain',
                      // backgroundColor: '#333',
                      // marginLeft: 110,
                      // opacity: 1,
                      // borderRadius: 100,
                      // justifyContent: 'center',
                      // alignItems: 'center',
                      // zIndex: 1,
                    }}>
                    <Image
                      source={require('./../../../assets/upload1.png')}
                      style={{width: 150, height: 150, tintColor: '#fff'}}
                    />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
              <Text style={styles.profileText}>
                {' '}
                {translate('register.picUpload')}{' '}
              </Text>
            </View>

            <View style={styles.radioButtonContainer}>
              <TouchableOpacity
                style={styles.ButtonContainer}
                onPress={() => setFieldValue('gender', 'male')}>
                <View style={styles.radioButton}>
                  {values.gender === 'male' ? (
                    <View style={styles.radioButtonIcon} />
                  ) : null}
                </View>
                <Text style={styles.radioButtonText}>
                  {translate('register.Var')}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.ButtonContainer}
                onPress={() => setFieldValue('gender', 'female')}>
                <View style={styles.radioButton}>
                  {values.gender === 'female' ? (
                    <View style={styles.radioButtonIcon} />
                  ) : null}
                </View>
                <Text style={styles.radioButtonText}>
                  {translate('register.Vadhu')}
                </Text>
              </TouchableOpacity>
              {errors.gender && touched.gender ? (
                <Text style={styles.error}>{errors.gender}</Text>
              ) : null}
            </View>
            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'profileCreatedById'}
              displayKey={'profileCreatedByNameHi'}
              autoFocus={true}
              items={profilemaker}
              selectText={translate('register.ProfileName')}
              selectedItems={values.profilemaker}
              onSelectedItemsChange={value =>
                setFieldValue('profilemaker', value)
              }
            />

            {errors.profilemaker && touched.profilemaker ? (
              <Text style={styles.dropboxError}>{errors.profilemaker}</Text>
            ) : null}
            <View style={styles.nameContainer}>
              <TextInput
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                value={values.firstname}
                style={styles.textinput}
                placeholder={translate('register.FirstName')}
                placeholderTextColor={'#666666'}
              />

              <TextInput
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                value={values.lastname}
                style={styles.textinput}
                placeholder={translate('register.lastName')}
                placeholderTextColor={'#666666'}
              />
            </View>
            <View style={styles.errorText}>
              {errors.firstname && touched.firstname ? (
                <Text style={styles.userFirstnameError}>
                  {errors.firstname}
                </Text>
              ) : null}
              <View style={styles.lastnameError}>
                {errors.lastname && touched.lastname ? (
                  <Text style={styles.userLastnameError}>
                    {errors.lastname}
                  </Text>
                ) : null}
              </View>
            </View>
            <View>
              <ExtendedTextInput
                onChangeText={handleChange('emailid')}
                onBlur={handleBlur('emailid')}
                autoFocus={true}
                value={values.emailid}
                style={styles.commonInput}
                placeholder={translate('register.EmailId')}
                placeholderTextColor={'#666666'}
              />

              {errors.emailid && touched.emailid ? (
                <Text style={styles.error}>{errors.emailid}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('mobilenumber')}
                onBlur={handleBlur('mobilenumber')}
                value={values.mobilenumber}
                maxLength={10}
                autoFocus={true}
                keyboardType="numeric"
                style={styles.commonInput}
                placeholder={translate('register.MobileNumber')}
                placeholderTextColor={'#666666'}
              />

              {errors.mobilenumber && touched.mobilenumber ? (
                <Text style={styles.error}>{errors.mobilenumber}</Text>
              ) : null}
            </View>

            <DateTimePicker
              value={values.birthdate}
              onSelect={value => setFieldValue('birthdate', value)}
              mode="date"
            />
            {errors.birthdate && touched.birthdate ? (
              <Text style={styles.dropboxError}>{errors.birthdate}</Text>
            ) : null}

            <Text style={styles.text}>
              <Text style={styles.star}>*</Text>
              {translate('register.Note')}
            </Text>

            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'countryId'}
              displayKey={'countryName'}
              autoFocus={true}
              items={country}
              single
              selectText={translate('register.country')}
              selectedItems={values.country}
              onSelectedItemsChange={value => {
                setFieldValue('country', value);

                dispatch({
                  type: FETCH_STATE_DROPDOWN,
                  payload: {
                    filter: {
                      countryId: value[0],
                    },
                    moduleType: 'State',
                  },
                });
              }}
            />
            {errors.country && touched.country ? (
              <Text style={styles.dropboxError}>{errors.country}</Text>
            ) : null}
            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'stateId'}
              displayKey={'name'}
              autoFocus={true}
              single
              items={state}
              selectText={translate('register.state')}
              selectedItems={values.state}
              onSelectedItemsChange={value => {
                setFieldValue('state', value);
                dispatch({
                  type: FETCH_CITY_DROPDOWN,
                  payload: {
                    filter: {
                      cityStateId: value[0],
                    },
                    moduleType: 'City',
                  },
                });
              }}
            />
            {errors.state && touched.state ? (
              <Text style={styles.dropboxError}>{errors.state}</Text>
            ) : null}

            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'cityId'}
              displayKey={'cityName'}
              autoFocus={true}
              single
              items={city}
              selectText={translate('register.city')}
              selectedItems={values.city}
              onSelectedItemsChange={value => setFieldValue('city', value)}
            />
            {errors.city && touched.city ? (
              <Text style={styles.dropboxError}>{errors.city}</Text>
            ) : null}

            <ExtendedTextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              autoFocus={true}
              value={values.password}
              style={styles.commonInput}
              secureTextEntry={true}
              placeholder={translate('register.enterpassword')}
              placeholderTextColor={'#666666'}
            />

            {errors.password && touched.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}
            <Text style={styles.text}>
              <Text style={styles.star}>*</Text> {translate('register.Note@')}
            </Text>
            <View style={styles.checkboxcontainer}>
              <CheckBox
                disabled={false}
                tintColors={{true: 'white'}}
                value={termsCondition}
                onValueChange={newValue => setTermsCondition(newValue)}
                boxType={'square'}
              />

              <Text style={styles.term}>
                {' '}
                {translate('register.checkbox')}{' '}
              </Text>
            </View>

            <LoginButton
              title={translate('register.create Account')}
              onPress={handleSubmit}
              //loading={isRegistering}
              //loading={isVerifiying}
            />
          </View>
        )}
      </Formik>
      {/* <SuccessAlert
        visible={profileUpdateSuccess}
        message={'profile successfully updated'}
        onPressOkay={handleSuccessOkayButton}
      /> */}
    </RootScreen>
  );
};

export default Registration;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  backArrow_img: {
    width: 30,
    height: 25,
  },
  uploadProfile: {
    flex: 1,
  },
  input_calendar: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  errorText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dropdownStyle: {
    marginBottom: 20,
    flex: 1,
  },
  inputMargin: {
    marginTop: 20,
  },
  lastnameError: {
    marginHorizontal: 30,
  },
  nameContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  textinput: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    height: hp(7),
    color: 'black',
    fontSize: 15,
    flex: 0.9,
    paddingLeft: 10,
  },
  term: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 6,
  },
  inputContainer: {
    marginTop: 10,
  },
  upload_img: {
    //flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,

    borderRadius: 100,
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
    marginTop: 5,
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
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
  },
  lastnameerror: {
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 50,
    color: 'red',
    marginRight: 40,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 100,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: 'transparent',
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
    height: 12,
    width: 12,
    borderRadius: 9,
    backgroundColor: 'white',
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
    marginBottom: 10,
  },
  star: {
    color: '#FF0000',
  },
  checkboxcontainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 20,
  },
  profileText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dropboxError: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
    marginBottom: 5,
  },
  userLastnameError: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
    marginBottom: 5,
    //marginLeft : '20%'
  },
  userFirstnameError: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: '20%',
    color: 'red',
    //marginLeft: '20%',
  },
});

import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import Dropdown from '../../components/atoms/dropdown/Dropdown';

import {
  FETCH_CITY_DROPDOWN,
  FETCH_COUNTRY_DROPDOWN,
  FETCH_PROFILECREATER_DROPDOWN,
  FETCH_STATE_DROPDOWN,
  FETCH_MARITALSTATUS_DROPDOWN,
  FETCH_JOB_DROPDOWN,
  FETCH_EDUCATION_DROPDOWN,
} from '../auth/registration/redux/registrationActions';
import {fetchmyProfileDataStarted} from '../profile/redux/MyProfileReducer';
import {MY_PROFILE_DETAILS} from '../profile/redux/MyProfileAction';

import {useDispatch, useSelector} from 'react-redux';
import {EDIT_PROFILE} from './redux/editProfileAction';
import LoginButton from '../../components/atoms/buttons/LoginButton';

const PersonalInfoEditProfile = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {myProfileData} = route.params;
  const {isUpdating} = useSelector(state => state.editProfile);
  const {
    dropDownsData: {
      country,
      state,
      city,
      maritalstatus,
      education,
      job,
      height,
      disability,
    },
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
    dispatch({
      type: FETCH_MARITALSTATUS_DROPDOWN,
      payload: {moduleType: 'MaritalStatus'},
    });
    dispatch({
      type: FETCH_JOB_DROPDOWN,
      payload: {moduleType: 'Occupation'},
    });

    dispatch({
      type: FETCH_EDUCATION_DROPDOWN,
      payload: {moduleType: 'Education'},
    });
  }, []);

  const handleeditProfile = values => {
    const payload = {
      userUpdateType: 'general',
      userContactInfoContactNo:
        myProfileData.userContactInfo.userContactInfoContactNo,
      userContactInfoWhatsappNo:
        myProfileData.userContactInfo.userContactInfoWhatsappNo,
      userContactInfoPresentAddress:
        myProfileData.userContactInfo.userContactInfoPresentAddress,
      userContactInfoPermanentAddress:
        myProfileData.userContactInfo.userContactInfoPermanentAddress,

      userEducationInfoEducation:
        myProfileData.userEducationInfo.userEducationInfoId,
      userEducationInfoOccupation:
        myProfileData.userEducationInfo.userEducationInfoId,

      userFamilyInfoFatherName:
        myProfileData.userFamilyInfo.userFamilyInfoFatherName,
      userFamilyInfoFatherOccupation: '1',
      userFamilyInfoMotherName:
        myProfileData.userFamilyInfo.userFamilyInfoMotherName,
      userFamilyInfoLand:
        myProfileData.userFamilyInfo.userFamilyInfoLand.landId,
      userFamilyInfoMotherMaika:
        myProfileData.userFamilyInfo.userFamilyInfoMotherMaika,
      userFamilyInfoNoOfSister:
        myProfileData.userFamilyInfo.userFamilyInfoNoOfSister,
      userFamilyInfoNoOfBrother:
        myProfileData.userFamilyInfo.userFamilyInfoNoOfBrother,

      userPersonalInfoMaritalStatusId: 2,
      userPersonalInfoHeight: values.height[0],
      userPersonalInfoDisability: values.disability[0],

      userReligiousInfoGotra:
        myProfileData.userReligiousInfo.userReligiousInfoMotherGotra,
      userReligiousInfoZodiac:
        myProfileData.userReligiousInfo.userReligiousInfoZodiac.zodiacId,
      userReligiousInfoManglik:
        myProfileData.userReligiousInfo.userReligiousInfoId,
      userReligiousInfoMotherGotra:
        myProfileData.userReligiousInfo.userReligiousInfoMotherGotra,

      userFirstName: values.firstname,
      userLastName: values.lastname,
      userGender: 'male',
      userDob: '1988-06-27',
      userCountry: values.country[0],
      userState: values.state[0],
      userCity: values.city[0],
      userProfileImage: '',
    };
    navigation.navigate('My Profile');

    dispatch({
      type: EDIT_PROFILE,
      payload,
    });
    dispatch(fetchmyProfileDataStarted());
    dispatch({
      type: MY_PROFILE_DETAILS,
    });
  };

  return (
    <RootScreen scrollable={true}>
      {console.log('personallllllllll===>', myProfileData)}

      <Formik
        initialValues={{
          gender: 'male',

          firstname: myProfileData.userFirstName,
          lastname: myProfileData.userLastName,
          emailid: myProfileData.userEmail,

          // birthdate: new Date(),
          country: [myProfileData.userCountry.countryId],
          state: [myProfileData.userState.stateId],
          city: [myProfileData.userCity.cityId],
          height: [myProfileData.userPersonalInfo.userPersonalInfoHeight],
          maritalstatus: [myProfileData.userPersonalInfo.maritalStatusTitleEn],
          disability: [
            myProfileData.userPersonalInfo.userPersonalInfoDisability,
          ],
          // education: [
          //   myProfileData.userEducationInfo.userEducationInfoEducation
          //     .educationTitleHi,
          // ],
          // job: [
          //   myProfileData.userEducationInfo.userEducationInfoOccupation
          //     .occupationTitleHi,
          // ],
        }}
        onSubmit={values => handleeditProfile(values)}>
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
            <View style={styles.profileContainer} />

            <View style={styles.nameContainer}>
              <TextInput
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                value={values.firstname}
                style={styles.textinput}
                placeholder={'Edit firstname'}
                placeholderTextColor={'#666666'}
              />

              <TextInput
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                value={values.lastname}
                style={styles.textinput}
                placeholder={'Edit lastname'}
                placeholderTextColor={'#666666'}
              />
            </View>
            {/* <DateTimePicker
              value={values.birthdate}
              onSelect={value => setFieldValue('birthdate', value)}
              mode="date"
            />
            {errors.birthdate && touched.birthdate ? (
              <Text style={styles.dropboxError}>{errors.birthdate}</Text>
            ) : null} */}
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

            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'countryId'}
              displayKey={'countryName'}
              autoFocus={true}
              items={[{countryId: 101, countryName: 'India'}]}
              single
              selectText={values.country}
              selectedItems={values.country}
              onSelectedItemsChange={value => {
                setFieldValue('country', value);

                dispatch({
                  type: FETCH_STATE_DROPDOWN,
                  payload: {
                    filter: {
                      countryId: value[101],
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
              selectText={values.state}
              selectedItems={values.state}
              onSelectedItemsChange={value => {
                setFieldValue('state', value);
                dispatch({
                  type: FETCH_CITY_DROPDOWN,
                  payload: {
                    filter: {
                      cityStateId: [myProfileData.userState.stateId],
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
              selectText={values.city}
              selectedItems={values.city}
              onSelectedItemsChange={value => setFieldValue('city', value)}
            />
            {errors.city && touched.city ? (
              <Text style={styles.dropboxError}>{errors.city}</Text>
            ) : null}

            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'maritalStatusId'}
              displayKey={'maritalStatusTitleHi'}
              items={maritalstatus}
              selectText={values.maritalstatus}
              selectedItems={values.maritalstatus}
              onSelectedItemsChange={value =>
                setFieldValue('maritalstatus', value)
              }
            />

            {errors.maritalstatus && touched.maritalstatus ? (
              <Text style={styles.error}>{errors.maritalstatus}</Text>
            ) : null}
            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'id'}
              displayKey={'name'}
              items={height}
              selectText={myProfileData.userPersonalInfo.userPersonalInfoHeight}
              selectedItems={values.height}
              onSelectedItemsChange={value => setFieldValue('height', value)}
            />

            {errors.height && touched.height ? (
              <Text style={styles.error}>{errors.height}</Text>
            ) : null}
            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'educationId'}
              displayKey={'educationTitleHi'}
              items={education}
              selectText={values.education}
              selectedItems={values.education}
              onSelectedItemsChange={value => setFieldValue('education', value)}
            />
            {errors.education && touched.education ? (
              <Text style={styles.error}>{errors.education}</Text>
            ) : null}
            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'occupationId'}
              displayKey={'occupationTitleHi'}
              items={job}
              selectText={values.job}
              selectedItems={values.job}
              onSelectedItemsChange={value => setFieldValue('job', value)}
            />
            {errors.job && touched.job ? (
              <Text style={styles.error}>{errors.job}</Text>
            ) : null}

            <Dropdown
              style={styles.dropdownStyle}
              uniqueKey={'id'}
              displayKey={'name'}
              items={disability}
              selectText={
                myProfileData.userPersonalInfo.userPersonalInfoDisability
              }
              selectedItems={values.disability}
              onSelectedItemsChange={value =>
                setFieldValue('disability', value)
              }
            />
            {errors.disability && touched.disability ? (
              <Text style={styles.error}>{errors.disability}</Text>
            ) : null}

            <LoginButton
              title="Update"
              onPress={handleSubmit}
              loading={isUpdating}
            />
            {console.log('loading======>', isUpdating)}
          </View>
        )}
      </Formik>
    </RootScreen>
  );
};

export default PersonalInfoEditProfile;

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

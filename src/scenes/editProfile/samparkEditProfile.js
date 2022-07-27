///sampark edit//////

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import translate from '../../translations/configTranslations';
import {Formik} from 'formik';
import CustomInput from '../../components/atoms/inputs/CustomInput';
import {fetchmyProfileDataStarted} from '../profile/redux/MyProfileReducer';
import {MY_PROFILE_DETAILS} from '../profile/redux/MyProfileAction';

import {useDispatch, useSelector} from 'react-redux';
import {EDIT_PROFILE} from './redux/editProfileAction';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import LoginButton from '../../components/atoms/buttons/LoginButton';
const SamparkEditProfile = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {myProfileData} = route.params;
  const {isUpdating} = useSelector(state => state.editProfile);

  const handleeditProfile = values => {
    const payload = {
      userUpdateType: 'general',
      userContactInfoContactNo: values.mobileNo,
      userContactInfoWhatsappNo: values.whatsAppNo,
      userContactInfoPresentAddress: values.presentAdd,
      userContactInfoPermanentAddress: values.permanentAdd,

      userEducationInfoEducation:
        myProfileData.userEducationInfo.userEducationInfoEducation.educationId,
      userEducationInfoOccupation:
        myProfileData.userEducationInfo.userEducationInfoOccupation
          .occupationId,

      userFamilyInfoFatherName:
        myProfileData.userFamilyInfo.userFamilyInfoFatherName,
      userFamilyInfoFatherOccupation:
        myProfileData.userFamilyInfo.userFamilyInfoFatherOccupation,
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

      userPersonalInfoMaritalStatusId:
        myProfileData.userPersonalInfo.userPersonalInfoMaritalStatusId
          .maritalStatusId,
      userPersonalInfoHeight:
        myProfileData.userPersonalInfo.userPersonalInfoHeight.heightId,
      userPersonalInfoDisability:
        myProfileData.userPersonalInfo.userPersonalInfoDisability.nakshatraId,

      userReligiousInfoGotra:
        myProfileData.userReligiousInfo.userReligiousInfoGotra,
      userReligiousInfoZodiac: 6,
      userReligiousInfoManglik:
        myProfileData.userReligiousInfo.userReligiousInfoManglik === 'manglik'
          ? 1
          : 0,
      userReligiousInfoMotherGotra: 5,
      userReligiousInfoPlaceOfBirth:
        myProfileData.userReligiousInfo.userReligiousInfoPlaceOfBirth,

      userFirstName: myProfileData.userFirstName,
      userLastName: myProfileData.userLastName,
      userGender: 'male',
      userDob: '1988-06-27',
      userCountry: myProfileData.userCountry.countryId,
      userState: myProfileData.userState.stateId,
      userCity: myProfileData.userCity.cityId,
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
      <Formik
        initialValues={{
          mobileNo: myProfileData.userContactInfo.userContactInfoContactNo,
          whatsAppNo: myProfileData.userContactInfo.userContactInfoWhatsappNo,
          presentAdd:
            myProfileData.userContactInfo.userContactInfoPresentAddress,
          permanentAdd:
            myProfileData.userContactInfo.userContactInfoPermanentAddress,
        }}
        onSubmit={values => handleeditProfile(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <View>
              <ExtendedTextInput
                onChangeText={handleChange('mobileNo')}
                onBlur={handleBlur('mobileNo')}
                value={values.mobileNo}
                maxLength={10}
                keyboardType="numeric"
                placeholder={translate('samPark.mobileNo')}
                placeholderTextColor={'#666666'}
              />

              {errors.mobileNo && touched.mobileNo ? (
                <Text style={styles.errorStyle}>{errors.mobileNo}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('whatsAppNo')}
                onBlur={handleBlur('whatsAppNo')}
                value={values.whatsAppNo}
                maxLength={10}
                keyboardType="numeric"
                placeholder={translate('samPark.whatsAppNo')}
                placeholderTextColor={'#666666'}
              />

              {errors.whatsAppNo && touched.whatsAppNo ? (
                <Text style={styles.errorStyle}>{errors.whatsAppNo}</Text>
              ) : null}

              <CustomInput
                onChangeText={handleChange('presentAdd')}
                value={values.presentAdd}
                placeholder={translate('samPark.presentAdd')}
                editable={true}
                multiline={true}
                height={150}
              />

              {errors.presentAdd && touched.presentAdd ? (
                <Text style={styles.errorStyle}>{errors.presentAdd}</Text>
              ) : null}

              <CustomInput
                onChangeText={handleChange('permanentAdd')}
                value={values.permanentAdd}
                placeholder={translate('samPark.permanentAdd')}
                editable={true}
                multiline={true}
                height={150}
              />

              {errors.permanentAdd && touched.permanentAdd ? (
                <Text style={styles.errorStyle}>{errors.permanentAdd}</Text>
              ) : null}

              <LoginButton
                title="Update"
                onPress={handleSubmit}
                loading={isUpdating}
              />
            </View>
          </View>
        )}
      </Formik>
    </RootScreen>
  );
};

export default SamparkEditProfile;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 50,
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

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {useEffect} from 'react';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import translate from '../../translations/configTranslations';
import Dropdown from '../../components/atoms/dropdown/Dropdown';
import {EDIT_PROFILE} from './redux/editProfileAction';
import {fetchmyProfileDataStarted} from '../profile/redux/MyProfileReducer';
import {MY_PROFILE_DETAILS} from '../profile/redux/MyProfileAction';

import {useDispatch, useSelector} from 'react-redux';
import {
  FETCH_LAND_DROPDOWN,
  FETCH_JOB_DROPDOWN,
} from '../../scenes/auth/registration/redux/registrationActions';
import LoginButton from '../../components/atoms/buttons/LoginButton';
const ParivarikParichyEditProfile = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {myProfileData} = route.params;
  const {isUpdating} = useSelector(state => state.editProfile);

  const {
    dropDownsData: {land, job},
  } = useSelector(state => state.registration);

  useEffect(() => {
    dispatch({
      type: FETCH_LAND_DROPDOWN,
      payload: {
        moduleType: 'Land',
      },
    });
    dispatch({
      type: FETCH_JOB_DROPDOWN,
      payload: {moduleType: 'Occupation'},
    });
  }, []);

  const handleDharmikJankari = values => {
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

      userPersonalInfoMaritalStatusId:
        myProfileData.userPersonalInfo.userPersonalInfoMaritalStatusId
          .maritalStatusId,
      userPersonalInfoHeight:
        myProfileData.userPersonalInfo.userPersonalInfoHeight.heightId,
      userPersonalInfoDisability:
        myProfileData.userPersonalInfo.userPersonalInfoDisability.nakshatraId,

      userEducationInfoEducation:
        myProfileData.userEducationInfo.userEducationInfoEducation.educationId,
      userEducationInfoOccupation:
        myProfileData.userEducationInfo.userEducationInfoOccupation
          .occupationId,

      userFamilyInfoFatherName: values.fatherName,
      userFamilyInfoFatherOccupation: values.fatherOccupation,
      userFamilyInfoMotherName: values.motherName,
      userFamilyInfoLand: values.land[0],
      userFamilyInfoMotherMaika: values.motherMayaka,
      userFamilyInfoNoOfSister: values.sister,
      userFamilyInfoNoOfBrother: values.brother,

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
          fatherName: myProfileData.userFamilyInfo.userFamilyInfoFatherName,
          fatherOccupation:
            myProfileData.userFamilyInfo.userFamilyInfoFatherOccupation,

          motherName: myProfileData.userFamilyInfo.userFamilyInfoMotherName,
          motherMayaka: myProfileData.userFamilyInfo.userFamilyInfoMotherMaika,
          brother: myProfileData.userFamilyInfo.userFamilyInfoNoOfBrother,
          sister: myProfileData.userFamilyInfo.userFamilyInfoNoOfSister,
          land: [myProfileData.userFamilyInfo.userFamilyInfoLand.landId],
        }}
        onSubmit={values => handleDharmikJankari(values)}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.dropDown}>
              <ExtendedTextInput
                onChangeText={handleChange('fatherName')}
                onBlur={handleBlur('fatherName')}
                value={values.fatherName}
                placeholder={translate('ParivarikParichay.fatherName')}
                placeholderTextColor={'#666666'}
              />
              {errors.fatherName && touched.fatherName ? (
                <Text style={styles.error}>{errors.fatherName}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('fatherOccupation')}
                onBlur={handleBlur('fatherOccupation')}
                value={values.fatherOccupation}
                placeholder={translate('ParivarikParichay.fatherOccupation')}
                placeholderTextColor={'#666666'}
              />
              {errors.fatherOccupation && touched.fatherOccupation ? (
                <Text style={styles.error}>{errors.fatherOccupation}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('motherName')}
                onBlur={handleBlur('motherName')}
                value={values.motherName}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.motherName')}
                placeholderTextColor={'#666666'}
              />
              {errors.motherName && touched.motherName ? (
                <Text style={styles.error}>{errors.motherName}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('motherMayaka')}
                onBlur={handleBlur('motherMayaka')}
                value={values.motherMayaka}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.motherMayaka')}
                placeholderTextColor={'#666666'}
              />
              {errors.motherMayaka && touched.motherMayaka ? (
                <Text style={styles.error}>{errors.motherMayaka}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('brother')}
                onBlur={handleBlur('brother')}
                value={values.brother}
                keyboardType="numeric"
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.brother')}
                placeholderTextColor={'#666666'}
              />
              {errors.brother && touched.brother ? (
                <Text style={styles.error}>{errors.brother}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('sister')}
                onBlur={handleBlur('sister')}
                value={values.sister}
                keyboardType="numeric"
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.sister')}
                placeholderTextColor={'#666666'}
              />
              {errors.sister && touched.sister ? (
                <Text style={styles.error}>{errors.sister}</Text>
              ) : null}
              <Dropdown
                style={styles.dropdownStyle}
                uniqueKey={'landId'}
                displayKey={'landTitleHi'}
                items={land}
                fixedHeight={true}
                hideDropdown={true}
                searchIcon={false}
                searchInputStyle={styles.searchInput}
                selectText={values.land}
                selectedItems={values.land}
                onSelectedItemsChange={value => setFieldValue('land', value)}
              />
              {errors.land && touched.land ? (
                <Text style={styles.error}>{errors.land}</Text>
              ) : null}
              <LoginButton
                title="Update"
                onPress={handleSubmit}
                loading={isUpdating}
              />
            </View>
          </>
        )}
      </Formik>
    </RootScreen>
  );
};

export default ParivarikParichyEditProfile;

const styles = StyleSheet.create({
  backArrow_img: {
    width: 30,
    height: 25,
  },
  searchInput: {
    display: 'none',
  },
  inputHeight: {
    marginTop: 40,
  },

  dataContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 20,
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
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  dateTimeInputStyle: {
    marginBottom: 25,
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
  textinputstyle: {
    marginTop: 18,
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
    marginHorizontal: 70,
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
    marginBottom: 20,
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
  dropdownStyle: {
    marginBottom: 10,
    flex: 1,
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
  dropDown: {
    marginTop: '10%',
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
    color: 'red',
    textAlign: 'right',
    marginRight: 40,
    position: 'relative',
    marginBottom: 5,
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
    marginTop: 15,
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
  textInput: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 20,
    height: hp(8),
    color: 'black',
  },
});

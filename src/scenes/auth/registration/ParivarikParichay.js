import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from './../../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import ExtendedTextInput from './../../../components/atoms/inputs/ExtendedTextInput';
import translate from './../../../translations/configTranslations';
import {parivarikSchema} from '../../../utils/schema/registerSchema';
import {useDispatch, useSelector} from 'react-redux';
import {FETCH_LAND_DROPDOWN, REGISTER_USER} from './redux/registrationActions';
import LoginButton from '../../../components/atoms/buttons/LoginButton';
import Dropdown from '../../../components/atoms/dropdown/Dropdown';
import moment from 'moment'

const ParivarikParichay = () => {
  const dispatch = useDispatch();
 
  const {
    parivarikData,
    samparkData,
    dharmikJankariData ,
    dropDownsData : {land},
    registerData,
    personalinfoData,
    isRegistering
  } = useSelector(state => state.registration);

  useEffect(() => {
    dispatch({
      type: FETCH_LAND_DROPDOWN,
      payload: {moduleType: 'Land'},
    });

    
  }, []);
  

  const handleParivarik = values => {
    const payload = {
      userContactInfoContactNo: samparkData.mobileNo,
      userContactInfoWhatsappNo: samparkData.whatsAppNo,
      userContactInfoPresentAddress: samparkData.presentAdd,
      userContactInfoPermanentAddress: samparkData.permanentAdd,

      userEducationInfoEducation: personalinfoData.education[0] ,
      userEducationInfoOccupation: personalinfoData.job[0],
      userEducationInfoProfession: '1',
      userEducationInfoOccupationDetails: 'asasas',
      userEducationInfoAnnualIncome: 'asasas',

      userFamilyInfoFatherName:  values.fatherName,
      userFamilyInfoFatherOccupation:  values.fatherOccupation,
      userFamilyInfoMotherName:  values.motherName,
      userFamilyInfoMotherOccupation: 2,
      userFamilyInfoNoOfMarriedBrothers: '1',
      userFamilyInfoNoOfUnmarriedBrothers: '2',
      userFamilyInfoNoOfMarriedSisters: 3,
      userFamilyInfoNoOfUnmarriedSisters: '2',
      userFamilyInfoMaternalUnclesName: 'asasas',
      userFamilyInfoMaternalUnclesGotra: '1',
      userFamilyInfoHouse: 'personal',
      userFamilyInfoCar: 'yes',
      userFamilyInfoLand: '2',

      userPersonalInfoMaritalStatusId:  personalinfoData.maritalstatus[0],
      userPersonalInfoComplexion: 'text',
      userPersonalInfoHeight: personalinfoData.height[0],
      userPersonalInfoWeight: 'asasas',
      userPersonalInfoDiet: 'asasas',
      userPersonalInfoDisability: personalinfoData.disability[0],
      userPersonalInfoBloodGroup: 'text',

      userReligiousInfoTimeOfBirth: moment(dharmikJankariData.birthtime).format('YYYY-MM-DD HH:mm:ss') ,
      userReligiousInfoPlaceOfBirth: dharmikJankariData.birthplace,
      userReligiousInfoGotra: dharmikJankariData.birthplace[0],
      userReligiousInfoSubCaste: '9',
      userReligiousInfoMotherTongue: '3',
      userReligiousInfoZodiac: dharmikJankariData.zodiacsign[0],
      userReligiousInfoManglik: dharmikJankariData.auspicious[0],
      userReligiousInfoNakshatra: 'hhhu',

      profileCreatedByNameHi: registerData.profilemaker[0],
      profileCreatedByNameEn: 'Self',

      userName: registerData.firstname,
      userGender: registerData.gender,
      userEmail: registerData.emailid,
      userMobileNo: registerData.mobilenumber,
      userDob: moment(registerData.birthdate).format('YYYY-MM-DD'),
      password: registerData.password,
      userCountry: registerData.country[0],
      userState: registerData.state[0],
      userCity:registerData.city[0],
      userTown: 'test duniya',
      userPartnerPreference: '1',
    };
   
     console.log('payload===>>',payload)
    dispatch({
      type: REGISTER_USER,
      payload,
    });
  
   
  };
  return (
    <RootScreen>
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{
            fatherName: parivarikData.fatherName,
            fatherOccupation: parivarikData.fatherOccupation,
            motherName: parivarikData.motherName,
            motherMayaka: parivarikData.motherMayaka,
            brother: parivarikData.brother,
            sister: parivarikData.sister,
            land: '',
          }}
          validationSchema={parivarikSchema}
          onSubmit={values => handleParivarik(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View style={{marginTop: '10%'}}>
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
                style={styles.textinput}
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
                keyboardType = 'numeric'
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
                keyboardType = 'numeric'
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.sister')}
                placeholderTextColor={'#666666'}
              />

              {errors.sister && touched.sister ? (
                <Text style={styles.error}>{errors.sister}</Text>
              ) : null}

              {/* <ExtendedTextInput
                onChangeText={handleChange('land')}
                onBlur={handleBlur('land')}
                value={values.land}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.land')}
                placeholderTextColor={'#666666'}
              /> */}

              <Dropdown 
                style={styles.inputMargin}
                uniqueKey={'landId'}
                displayKey={'landTitleHi'}
                 items={land}
                selectText={translate('ParivarikParichay.land')}
                selectedItems={values.land}
                onSelectedItemsChange={value => setFieldValue('land', value)}
              />

              {errors.land && touched.land ? (
                <Text style={styles.error}>{errors.land}</Text>
              ) : null}

              <LoginButton
                title={translate('ParivarikParichay.register')}
                onPress={handleSubmit}
                loading={isRegistering}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </RootScreen>
  );
};

export default ParivarikParichay;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input_view: {
    flex: 1,
  },
  textinput: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 20,
    height: hp(8),
    color: 'black',
  },
  inputMargin: {
    marginBottom: 20
   },
  button: {
    backgroundColor: '#DC1C28',
    height: hp(7),
    marginHorizontal: 30,
    marginTop: 20,
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
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
  },
});

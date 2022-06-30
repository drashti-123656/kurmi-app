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
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from './../../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import ExtendedTextInput from './../../../components/atoms/inputs/ExtendedTextInput';
import translate from './../../../translations/configTranslations';
import {samparkSchema} from './../../../utils/schema/registerSchema';

import {useDispatch, useSelector} from 'react-redux';
import {navigationRef} from '../../../navigation/RootNavigation';
import CustomInput from '../../../components/atoms/inputs/CustomInput';
import LoginButton from '../../../components/atoms/buttons/LoginButton';
import moment from 'moment';
import {REGISTER_USER} from './redux/registrationActions';

const Sampark = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    parivarikData,
    samparkData,
    dharmikJankariData,
    dropDownsData: {land},
    registerData,
    personalinfoData,
    isRegistering,
  } = useSelector(state => state.registration);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSampark = values => {
    console.log('parivarikData====>>', parivarikData);
    const payload = {
      userContactInfoContactNo: values.mobileNo,
      userContactInfoWhatsappNo: values.whatsAppNo,
      userContactInfoPresentAddress: values.presentAdd,
      userContactInfoPermanentAddress: values.permanentAdd,
      userEducationInfoEducation: personalinfoData.education[0],
      userEducationInfoOccupation: personalinfoData.job[0],

      userFamilyInfoFatherName: parivarikData.fatherName,
      userFamilyInfoFatherOccupation: parivarikData.fatherOccupation,
      userFamilyInfoMotherName: parivarikData.motherName,
      userFamilyInfoMotherMaika: parivarikData.motherMayaka,
      userFamilyInfoNoOfBrother: parivarikData.brother,

      userFamilyInfoNoOfSister: parivarikData.sister,
      userFamilyInfoLand: parivarikData.land[0],

      userPersonalInfoMaritalStatusId: personalinfoData.maritalstatus[0],

      userPersonalInfoHeight: personalinfoData.height[0],

      userPersonalInfoDisability: personalinfoData.disability[0],

      userReligiousInfoTimeOfBirth: moment(dharmikJankariData.birthtime).format(
        'YYYY-MM-DD HH:mm:ss',
      ),
      userReligiousInfoPlaceOfBirth: dharmikJankariData.birthplace,
      userReligiousInfoGotra: dharmikJankariData.gotra[0],

      userReligiousInfoZodiac: dharmikJankariData.zodiacsign[0],
      userReligiousInfoManglik: dharmikJankariData.auspicious[0],

      userReligiousInfoMotherGotra: dharmikJankariData.native[0],

      userProfileCreatedBy: registerData.profilemaker[0],
      userFirstName: registerData.firstname,
      userLastName: registerData.lastname,
      userGender: registerData.gender,
      userEmail: registerData.emailid,
      userMobileNo: registerData.mobilenumber,
      userDob: moment(registerData.birthdate).format('YYYY-MM-DD'),
      password: registerData.password,
      userCountry: registerData.country[0],
      userState: registerData.state[0],
      userCity: registerData.city[0],
      userProfileImage: `data.image/jpg;base64,${registerData?.ProfilePic?.assets[0]?.base64}`,
    };
    dispatch({
      type: REGISTER_USER,
      payload,
    });
    console.log('gotraa===>>', dharmikJankariData);
    console.log('fatherOccupation==========>>', parivarikData);
  };

  return (
    <RootScreen>
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{
            mobileNo: samparkData.mobileNo,
            whatsAppNo: samparkData.whatsAppNo,
            presentAdd: samparkData.permanentAdd,
            permanentAdd: samparkData.presentAdd,
          }}
          validationSchema={samparkSchema}
          onSubmit={values => handleSampark(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
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
              {/* <ExtendedTextInput
                onChangeText={handleChange('presentAdd')}
                onBlur={handleBlur('presentAdd')}
                value={values.presentAdd}
                style={styles.textInput}
                placeholder={translate('samPark.presentAdd')}
                placeholderTextColor={'#666666'}
              /> */}
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

export default Sampark;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  input_view: {
    flex: 1,
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
  richTextbox: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 20,
    height: hp(20),
    color: 'black',
  },
  button: {
    backgroundColor: '#DC1C28',
    height: hp(7),
    marginHorizontal: 30,
    marginTop: 50,
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
  errorStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
  },
});

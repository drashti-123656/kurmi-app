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
import React from 'react';
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
import { REGISTER_USER } from './redux/registrationActions';
import LoginButton from '../../../components/atoms/buttons/LoginButton';

const ParivarikParichay = () => {
  const dispatch = useDispatch();
  const {parivarikData, samparkData,dharmikJankariData,dropDownsData,registerData,personalinfoData} = useSelector(state => state.registration);

  const handleParivarik = values => {
    const payload = {
      userContactInfoContactNo:'8888888888' ,
      userContactInfoWhatsappNo: '9999999999',
      userContactInfoPresentAddress: 'asasas',
      userContactInfoPermanentAddress: 'asasas',

      userEducationInfoEducation: '5',
      userEducationInfoOccupation: '2',
      userEducationInfoProfession: '1',
      userEducationInfoOccupationDetails: 'asasas',
      userEducationInfoAnnualIncome: 'asasas',

      userFamilyInfoFatherName: 'yyhh',
      userFamilyInfoFatherOccupation: '7',
      userFamilyInfoMotherName: 'gfff',
      userFamilyInfoMotherOccupation: 2,
      userFamilyInfoNoOfMarriedBrothers: '1',
      userFamilyInfoNoOfUnmarriedBrothers: '2',
      userFamilyInfoNoOfMarriedSisters: 3,
      userFamilyInfoNoOfUnmarriedSisters: '2',
      userFamilyInfoMaternalUnclesName: 'asasas',
      userFamilyInfoMaternalUnclesGotra: '1',
      userFamilyInfoHouse: 'personal',
      userFamilyInfoCar: 'yes',

      userPersonalInfoMaritalStatusId: '1',
      userPersonalInfoComplexion: 'text',
      userPersonalInfoHeight: '55',
      userPersonalInfoWeight: 'asasas',
      userPersonalInfoDiet: 'asasas',
      userPersonalInfoDisability: 'asasas',
      userPersonalInfoBloodGroup: 'text',

      userReligiousInfoTimeOfBirth: '2019-04-28 14:45:15',
      userReligiousInfoPlaceOfBirth: 'text',
      userReligiousInfoGotra: '8',
      userReligiousInfoSubCaste: '9',
      userReligiousInfoMotherTongue: '3',
      userReligiousInfoZodiac: '2',
      userReligiousInfoManglik: 'manglik',
      userReligiousInfoNakshatra: '1',

      profileCreatedByNameHi: 'KHud',
      profileCreatedByNameEn: 'Self',

      
      userName: registerData.firstname,
      userGender: 'male',
      userEmail: registerData.emailid,
      userMobileNo: registerData.mobilenumber,
      userDob: '1988-06-27',
      password: registerData.password,
      userCountry: '10',
      userState: '5',
      userCity: '8',
      userTown: 'test duniya',
      userPartnerPreference: '1',
    };

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
            land: parivarikData.land,
          }}
          validationSchema={parivarikSchema}
          onSubmit={values => handleParivarik(values)}>
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
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.sister')}
                placeholderTextColor={'#666666'}
              />

              {errors.sister && touched.sister ? (
                <Text style={styles.error}>{errors.sister}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('land')}
                onBlur={handleBlur('land')}
                value={values.land}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.land')}
                placeholderTextColor={'#666666'}
              />

              {errors.land && touched.land ? (
                <Text style={styles.error}>{errors.land}</Text>
              ) : null}

              <LoginButton 
                title={translate('ParivarikParichay.register')}
                onPress={handleSubmit}
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
    marginRight: 10,
    color: 'red',
    //textAlign: 'right',
    marginLeft: '80%',
  },
});

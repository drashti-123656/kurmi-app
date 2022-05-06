import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import translate from '../../../translations/configTranslations';
import Dropdown from '../../../components/atoms/dropdown/Dropdown';
import dropDownList from '../../../utils/constants/dropDownList';
import {ReligiousinformationvalidationSchema} from '../../../utils/schema/religiousInformationSchema';
import ExtendedTextInput from '../../../components/atoms/inputs/ExtendedTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {dharmikJankari} from './redux/registrationReducer';
import {
  FETCH_AUSPICIOUS_DROPDOWN,
  FETCH_GOTRA_DROPDOWN,
  FETCH_ZODIC_SIGN,
} from './redux/registrationActions';
import LoginButton from '../../../components/atoms/buttons/LoginButton';
import DatePicker from 'react-native-date-picker';

import DateTimePicker from '../../../components/atoms/picker/DateTimePicker';

const DharmikJankari = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    dharmikJankariData,
    dropDownsData: {zodiacSign, auspicious, gotra},
  } = useSelector(state => state.registration);

  useEffect(() => {
    dispatch({
      type: FETCH_ZODIC_SIGN,
      payload: {moduleType: 'Zodiac'},
    });

    dispatch({
      type: FETCH_AUSPICIOUS_DROPDOWN,
      payload: {moduleType: 'Nakshatra'},
    });

    dispatch({
      type: FETCH_GOTRA_DROPDOWN,
      payload: {moduleType: 'Gotra'},
    });
  }, []);

  const handleDharmikJankari = values => {
    const payload = {
      userReligiousInfoGotra: values.gotra,
      userReligiousInfoTimeOfBirth: values.birthtime,
      userReligiousInfoPlaceOfBirth: values.birthplace,
      userReligiousInfoZodiac: values.zodiacsign,
      userReligiousInfoManglik: values.auspicious,
      userReligiousInfoMotherGotra : values.native
    };

    navigation.navigate('Sampark');

    dispatch(dharmikJankari(payload));
    setLoading(true);
  };

  return (
    <RootScreen scrollable={true}>
      <Formik
        initialValues={{
          gotra: dharmikJankariData.gotra,
          native: dharmikJankariData.native,
          birthtime: new Date(),
          birthplace: dharmikJankariData.birthplace,
          zodiacsign: dharmikJankariData.zodiacsign,
          auspicious: dharmikJankariData.auspicious,
        }}
        validationSchema={ReligiousinformationvalidationSchema}
        onSubmit={values => handleDharmikJankari(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={{marginTop: '15%'}}>
              <Dropdown
                style={styles.inputMargin}
                uniqueKey={'gotraId'}
                displayKey={'gotraTitleHi'}
                items={gotra}
                selectText={translate('Dharmikjankari.Caste')}
                selectedItems={values.gotra}
                onSelectedItemsChange={value => setFieldValue('gotra', value)}
              />

              {errors.gotra && touched.gotra ? (
                <Text style={styles.error}>{errors.gotra}</Text>
              ) : null}

              <Dropdown
                style={styles.inputMargin}
                uniqueKey={'gotraId'}
                displayKey={'gotraTitleHi'}
                items={gotra}
                selectText={translate('Dharmikjankari.Native')}
                selectedItems={values.native}
                onSelectedItemsChange={value => setFieldValue('native', value)}
              />

              {errors.native && touched.native ? (
                <Text style={styles.error}>{errors.native}</Text>
              ) : null}

              <DateTimePicker
                style={styles.dateTimeInputStyle}
                value={values.birthtime}
                onSelect={value => setFieldValue('birthtime', value)}
                mode="time"
              />

              {/* <TextInput
               style={styles.commonInput}
                onChangeText={handleChange('birthtime')}
                onBlur={handleBlur('birthtime')}
                value={values.birthtime}
    
                placeholder={translate('Dharmikjankari.Birthtime')}
                placeholderTextColor={'#666666'}
              /> */}

              {errors.birthtime && touched.birthtime ? (
                <Text style={styles.error}>{errors.birthtime}</Text>
              ) : null}
              <TextInput
                style={styles.commonInput}
                onChangeText={handleChange('birthplace')}
                onBlur={handleBlur('birthplace')}
                value={values.birthplace}
                placeholder={translate('Dharmikjankari.Birthplace')}
                placeholderTextColor={'#666666'}
              />

              {errors.birthplace && touched.birthplace ? (
                <Text style={styles.error}>{errors.birthplace}</Text>
              ) : null}

              <Dropdown
                style={styles.inputMargin}
                uniqueKey={'zodiacId'}
                displayKey={'zodiacTitleHi'}
                items={zodiacSign}
                selectText={translate('Dharmikjankari.Zodiacsign')}
                selectedItems={values.zodiacsign}
                onSelectedItemsChange={value =>
                  setFieldValue('zodiacsign', value)
                }
              />
              {errors.zodiacsign && touched.zodiacsign ? (
                <Text style={styles.error}>{errors.zodiacsign}</Text>
              ) : null}

              <Dropdown
                style={styles.inputMargin}
                uniqueKey={'nakshatraId'}
                displayKey={'nakshatraTitleHi'}
                items={auspicious}
                selectText={translate('Dharmikjankari.auspicious')}
                selectedItems={values.auspicious}
                onSelectedItemsChange={value =>
                  setFieldValue('auspicious', value)
                }
              />
              {errors.auspicious && touched.auspicious ? (
                <Text style={styles.error}>{errors.auspicious}</Text>
              ) : null}

              <LoginButton
                title={translate('Dharmikjankari.Next')}
                onPress={handleSubmit}
                // loading={loading}
              />
            </View>
          </>
        )}
      </Formik>
    </RootScreen>
  );
};

export default DharmikJankari;

const styles = StyleSheet.create({
  backArrow_img: {
    width: 30,
    height: 25,
  },
  inputHeight: {
    marginTop: 40,
  },
  inputMargin: {
    marginBottom: 25,
  },
  // dropdownMargin: {
  //   marginTop: 5,
  // },
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
  dateTimeInputStyle : {
  marginBottom : 25,
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
  inputHeight: {
    marginTop: 40,
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
    //marginHorizontal: 50,
    color: 'red',
    textAlign: 'right',
    marginRight: 40,
    position: 'relative',
    //top: 5,
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

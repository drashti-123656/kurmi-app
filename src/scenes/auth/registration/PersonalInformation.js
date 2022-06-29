import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import translate from '../../../translations/configTranslations';

import {PersonalinformationSchema} from '../../../utils/schema/personalInformationSchema';
import Dropdown from '../../../components/atoms/dropdown/Dropdown';
import {useDispatch, useSelector} from 'react-redux';

import {
  FETCH_EDUCATION_DROPDOWN,
  FETCH_JOB_DROPDOWN,
  FETCH_MARITALSTATUS_DROPDOWN,
  FETCH_HEIGHT,
  FETCH_DISABILITY,
} from './redux/registrationActions';
import {personalInfo} from './redux/registrationReducer';
import LoginButton from '../../../components/atoms/buttons/LoginButton';

const PersonalInformation = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    personalinfoData,
    dropDownsData: {maritalstatus, education, job, height, disability},
  } = useSelector(state => state.registration);

  useEffect(() => {
    dispatch({
      type: FETCH_MARITALSTATUS_DROPDOWN,
      payload: {moduleType: 'MaritalStatus'},
    });

    dispatch({
      type: FETCH_EDUCATION_DROPDOWN,
      payload: {moduleType: 'Education'},
    });

    dispatch({
      type: FETCH_JOB_DROPDOWN,
      payload: {moduleType: 'Occupation'},
    });

    dispatch({
      type: FETCH_HEIGHT,
      payload: {moduleType: 'Height'},
    });

    dispatch({
      type: FETCH_DISABILITY,
      payload: {moduleType: 'Nakshatra'},
    });
  }, []);

  const handleSampark = values => {
    const payload = {
      userPersonalInfoHeight: values.height,
      userPersonalInfoMaritalStatusId: values.maritalstatus,
      userEducationInfoEducation: values.education,
      userEducationInfoOccupation: values.job,

      userPersonalInfoDisability: values.disability,
    };

    dispatch(personalInfo(payload));

    navigation.navigate('DharmikJankari');
  };

  return (
    <RootScreen scrollable={true}>
      <Formik
        initialValues={{
          height: personalinfoData.height,
          maritalstatus: personalinfoData.maritalstatus,
          education: personalinfoData.education,
          job: personalinfoData.job,

          disability: personalinfoData.disability,
        }}
        validationSchema={PersonalinformationSchema}
        onSubmit={values => handleSampark(values)}>
        {({handleSubmit, setFieldValue, values, errors, touched}) => (
          <View style={styles.mainContainer}>
            <Dropdown
              style={styles.inputMargin}
              uniqueKey={'heightId'}
              displayKey={'name'}
              items={height}
              hideDropdown={true}
              searchIcon={false}
              searchInputStyle={styles.searchInput}
              styleListContainer={styles.listContainerData}
              selectText={translate('Vyaktigatdata.Height')}
              selectedItems={values.height}
              onSelectedItemsChange={value => setFieldValue('height', value)}
            />

            {errors.height && touched.height ? (
              <Text style={styles.error}>{errors.height}</Text>
            ) : null}

            <Dropdown
              style={styles.inputMargin}
              uniqueKey={'maritalStatusId'}
              hideDropdown={true}
              searchIcon={false}
              searchInputStyle={styles.searchInput}
              displayKey={'maritalStatusTitleHi'}
              styleListContainer={styles.listContainerData}
              items={maritalstatus}
              selectText={translate('Vyaktigatdata.Marital Status')}
              selectedItems={values.maritalstatus}
              onSelectedItemsChange={value =>
                setFieldValue('maritalstatus', value)
              }
            />

            {errors.maritalstatus && touched.maritalstatus ? (
              <Text style={styles.error}>{errors.maritalstatus}</Text>
            ) : null}

            <Dropdown
              style={styles.inputMargin}
              uniqueKey={'educationId'}
              hideDropdown={true}
              searchIcon={false}
              searchInputStyle={styles.searchInput}
              displayKey={'educationTitleHi'}
              styleListContainer={styles.listContainerData}
              items={education}
              selectText={translate('Vyaktigatdata.Knowledge')}
              selectedItems={values.education}
              onSelectedItemsChange={value => setFieldValue('education', value)}
            />
            {errors.education && touched.education ? (
              <Text style={styles.error}>{errors.education}</Text>
            ) : null}

            <Dropdown
              style={styles.inputMargin}
              uniqueKey={'occupationId'}
              displayKey={'occupationTitleHi'}
              hideDropdown={true}
              searchIcon={false}
              searchInputStyle={styles.searchInput}
              //styleListContainer={styles.listContainerData}
              items={job}
              selectText={translate('Vyaktigatdata.Job')}
              selectedItems={values.job}
              onSelectedItemsChange={value => setFieldValue('job', value)}
            />
            {errors.job && touched.job ? (
              <Text style={styles.error}>{errors.job}</Text>
            ) : null}

            <Dropdown
              style={styles.inputMargin}
              uniqueKey={'nakshatraId'}
              displayKey={'nakshatraTitleHi'}
              items={disability}
              hideDropdown={true}
              searchIcon={false}
              searchInputStyle={styles.searchInput}
              fixedHeight={true}
              selectText={translate('Vyaktigatdata.Disability')}
              selectedItems={values.disability}
              onSelectedItemsChange={value =>
                setFieldValue('disability', value)
              }
            />
            {errors.disability && touched.disability ? (
              <Text style={styles.error}>{errors.disability}</Text>
            ) : null}

            <LoginButton
              title={translate('Vyaktigatdata.Next')}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </RootScreen>
  );
};

export default PersonalInformation;

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
    marginTop: 20,
  },

  listContainerData: {
    height: hp(40),
    borderRadius: 20,
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
  profileContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    marginTop: 30,
  },
  inputMargin: {
    marginBottom: 20,
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
    marginHorizontal: 90,
  },
  profileText: {
    fontWeight: 'bold',
  },
  profileImageContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  searchInput: {
    display: 'none',
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
  inputHeight: {
    marginTop: 70,
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
    marginBottom: 5,
    color: 'red',
    textAlign: 'right',
    marginRight: 40,
    position: 'relative',
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
  mainContainer: {
    marginTop: '15%',
  },
});

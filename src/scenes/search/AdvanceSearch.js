import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  FETCH_CITY_DROPDOWN,
  FETCH_EDUCATION_DROPDOWN,
  FETCH_GOTRA_DROPDOWN,
  FETCH_JOB_DROPDOWN,
  FETCH_STATE_DROPDOWN,
  FETCH_AUSPICIOUS_DROPDOWN,
} from '../../scenes/auth/registration/redux/registrationActions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import translate from '../../translations/configTranslations';
import {advanceSearchSchema} from '../../utils/schema/advanceSearchSchema';
import Dropdown from '../../components/atoms/dropdown/Dropdown';
import {useDispatch, useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ADVANCED_SEARCH_USER} from './redux/AdvanceSearchAction';
import LoginButton from '../../components/atoms/buttons/LoginButton';
import {useEffect} from 'react';

const AdvanceSearch = ({navigation}) => {
  const dispatch = useDispatch();
  const {isFetching} = useSelector(state => state.advanceSerach);

  const {
    dropDownsData: {
      profilemaker,
      country,
      state,
      city,
      education,
      job,
      gotra,
      height,
      auspicious,
    },
  } = useSelector(state => state.registration);
  useEffect(() => {
    dispatch({
      type: FETCH_EDUCATION_DROPDOWN,
      payload: {moduleType: 'Education'},
    });

    dispatch({
      type: FETCH_JOB_DROPDOWN,
      payload: {moduleType: 'Occupation'},
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
  const handleadvanceProfile = values => {
    const payload = {
      filter: {
        gender: values.gender,
        height: {
          min: values.heightFrom[0],
          max: values.heightTo[0],
        },
        // manglik : values.auspicious,
        country: values.country[0],
        state: values.state[0],
        city: values.city[0],
        education: values.education[0],
        occupation: values.job[0],
      },
      page: 1,
      pageSIze: 10,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: ADVANCED_SEARCH_USER,
      payload,
    });

    navigation.navigate('AdvanceSearchProfile');
  };

  return (
    <RootScreen>
      <ScrollView>
        <Text style={styles.title}> {translate('advanceSearch.Gender')}</Text>

        <Formik
          initialValues={{
            gender: 'male',
            profilemaker: '',
            gotra: '',
            maritalstatus: 'married',
            heightFrom: '',
            heightTo: '',
            auspicious: '',
            country: '',
            state: '',
            city: '',
            education: '',
            job: '',
          }}
          validationSchema={advanceSearchSchema}
          onSubmit={values => handleadvanceProfile(values)}>
          {({handleSubmit, setFieldValue, values, errors, touched}) => (
            <View>
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
                searchInputStyle={styles.searchInput}
                hideDropdown={true}
                searchIcon={false}
                onSelectedItemsChange={value =>
                  setFieldValue('profilemaker', value)
                }
              />
              {errors.profilemaker && touched.profilemaker ? (
                <Text style={styles.dropboxError}>{errors.profilemaker}</Text>
              ) : null}
              <Dropdown
                style={styles.dropdownStyle}
                uniqueKey={'gotraId'}
                displayKey={'gotraTitleHi'}
                items={gotra}
                selectText={translate('Dharmikjankari.Caste')}
                selectedItems={values.gotra}
                searchInputStyle={styles.searchInput}
                hideDropdown={true}
                searchIcon={false}
                onSelectedItemsChange={value => setFieldValue('gotra', value)}
              />

              {errors.gotra && touched.gotra ? (
                <Text style={styles.error}>{errors.gotra}</Text>
              ) : null}

              <Text style={styles.title}>
                {' '}
                {translate('advanceSearch.Marital Status')}
              </Text>
              <View style={styles.radioButtonContainer}>
                <TouchableOpacity
                  style={styles.ButtonContainer}
                  onPress={() => setFieldValue('maritalstatus', 'married')}>
                  <View style={styles.radioButton}>
                    {values.maritalstatus === 'married' ? (
                      <View style={styles.radioButtonIcon} />
                    ) : null}
                  </View>
                  <Text style={styles.radioButtonText}>
                    {translate('advanceSearch.married')}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.ButtonContainer}
                  onPress={() => setFieldValue('maritalstatus', 'unmarried')}>
                  <View style={styles.radioButton}>
                    {values.maritalstatus === 'unmarried' ? (
                      <View style={styles.radioButtonIcon} />
                    ) : null}
                  </View>
                  <Text style={styles.radioButtonText}>
                    {translate('advanceSearch.unmarried')}
                  </Text>
                </TouchableOpacity>
              </View>
              {errors.maritalstatus && touched.maritalstatus ? (
                <Text style={styles.error}>{errors.maritalstatus}</Text>
              ) : null}

              <View style={styles.heightContainer}>
                <Dropdown
                  style={styles.inputMargin}
                  uniqueKey={'id'}
                  displayKey={'name'}
                  items={height}
                  selectText={translate('advanceSearch.height From')}
                  selectedItems={values.heightFrom}
                  searchInputStyle={styles.brandSearchInputStyle}
                  onSelectedItemsChange={value =>
                    setFieldValue('heightFrom', value)
                  }
                />
                <Dropdown
                  style={styles.inputMargin}
                  uniqueKey={'id'}
                  displayKey={'name'}
                  items={height}
                  selectText={translate('advanceSearch.height To')}
                  selectedItems={values.heightTo}
                  searchInputStyle={styles.brandSearchInputStyle}
                  onSelectedItemsChange={value =>
                    setFieldValue('heightTo', value)
                  }
                />
              </View>
              <View style={styles.errorText}>
                {errors.heightFrom && touched.heightFrom ? (
                  <Text style={styles.heighterror}>{errors.heightFrom}</Text>
                ) : null}
                <View style={styles.lastnameError}>
                  {errors.heightTo && touched.heightTo ? (
                    <Text style={styles.heighttoerror}>{errors.heightTo}</Text>
                  ) : null}
                </View>
              </View>

              <Dropdown
                style={styles.dropStyle}
                uniqueKey={'nakshatraId'}
                displayKey={'nakshatraTitleHi'}
                items={auspicious}
                selectText={translate('Dharmikjankari.auspicious')}
                selectedItems={values.auspicious}
                searchInputStyle={styles.brandSearchInputStyle}
                onSelectedItemsChange={value =>
                  setFieldValue('auspicious', value)
                }
              />
              {errors.auspicious && touched.auspicious ? (
                <Text style={styles.dropboxError}>{errors.auspicious}</Text>
              ) : null}

              <Dropdown
                style={styles.dropdownStyle}
                uniqueKey={'countryId'}
                displayKey={'countryName'}
                autoFocus={true}
                items={country}
                single
                searchInputStyle={styles.brandSearchInputStyle}
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
                searchInputStyle={styles.brandSearchInputStyle}
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
                searchInputStyle={styles.brandSearchInputStyle}
                items={city}
                selectText={translate('register.city')}
                selectedItems={values.city}
                onSelectedItemsChange={value => setFieldValue('city', value)}
              />
              {errors.city && touched.city ? (
                <Text style={styles.dropboxError}>{errors.city}</Text>
              ) : null}
              <Dropdown
                style={styles.dropdownStyle}
                uniqueKey={'educationId'}
                displayKey={'educationTitleHi'}
                items={education}
                selectText={translate('Vyaktigatdata.Knowledge')}
                selectedItems={values.education}
                searchInputStyle={styles.searchInput}
                hideDropdown={true}
                searchIcon={false}
                onSelectedItemsChange={value =>
                  setFieldValue('education', value)
                }
              />
              {errors.education && touched.education ? (
                <Text style={styles.error}>{errors.education}</Text>
              ) : null}

              <Dropdown
                style={styles.dropdownStyle}
                uniqueKey={'occupationId'}
                displayKey={'occupationTitleHi'}
                items={job}
                selectText={translate('Vyaktigatdata.Job')}
                selectedItems={values.job}
                searchInputStyle={styles.searchInput}
                hideDropdown={true}
                searchIcon={false}
                onSelectedItemsChange={value => setFieldValue('job', value)}
              />
              {errors.job && touched.job ? (
                <Text style={styles.error}>{errors.job}</Text>
              ) : null}

              <LoginButton
                title={translate('NewsFeed.Search')}
                onPress={handleSubmit}
                // loading={isFetching}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </RootScreen>
  );
};

export default AdvanceSearch;

const styles = EStyleSheet.create({
  title: {
    fontWeight: '400',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 30,
    color: 'white',
  },
  brandSearchInputStyle: {
    height: hp(7),
    fontSize: 18,
  },
  errorText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dropboxError: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
    marginBottom: 5,
  },
  inputStyle: {
    marginHorizontal: -20,
    width: 210,
  },
  height: {
    flexDirection: 'row',
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  lastnameerror: {
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 50,
    color: 'red',
    marginRight: 40,
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 100,
  },
  radioButtonIcon: {
    height: 12,
    width: 12,
    borderRadius: 9,
    backgroundColor: 'white',
  },
  radioButtonText: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputMargin: {
    marginBottom: 10,
    flex: 1,
    width: 200,
    marginLeft: -15,
  },
  heightContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
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
  searchInput: {
    display: 'none',
  },
  radioButtonIcon: {
    height: 12,
    width: 12,
    borderRadius: 9,
    backgroundColor: 'white',
  },
  radioButtonText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '400',
    marginTop: 20,
  },
  textinput: {
    backgroundColor: 'white',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height: hp(7),
    color: 'black',
  },
  heightinput: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    height: hp(7),
    color: 'black',
    fontSize: 15,
    flex: 0.9,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '$PRIMARY',
    height: hp(7),
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 40,
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
  },
  heighterror: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: '35%',
    color: 'red',
  },
  heighttoerror: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 40,
    color: 'red',
    textAlign: 'right',
    marginBottom: 5,
  },
  dropdownStyle: {
    marginBottom: 20,
    flex: 1,
  },
  dropStyle: {
    marginBottom: 20,
    marginTop: 20,
  },
  dropdown: {
    marginTop: 10,
  },
  anotherButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

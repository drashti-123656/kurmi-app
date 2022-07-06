import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import translate from './../../translations/configTranslations';
import LoginButton from '../../components/atoms/buttons/LoginButton';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {FETCH_SEARCH_PROFILE} from './redux/NewsfeedAction';

import {PAGE_SIZE} from '../../utils/constants/appConstants';
import {agevalidationSchema} from '../../utils/schema/newsFeedSchema';
import Loader from '../../components/atoms/buttons/Loader';

const NewsFeed = ({navigation}) => {
  const dispatch = useDispatch();

  const {newsFeedData, isFetching} = useSelector(state => state.newsfeed);

  useEffect(() => {
    const payload = {
      filter: {
        age: {
          min: 18,
          max: 40,
        },
        gender: 'male',
      },
      page: 1,
      pageSIze: PAGE_SIZE,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: FETCH_SEARCH_PROFILE,
      payload,
    });
  }, []);

  const handleSearchProfile = values => {
    const payload = {
      filter: {
        age: {
          min: values.ageFrom,
          max: values.ageTo,
        },
        gender: values.gender,
      },
      page: 1,
      pageSIze: 10,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: FETCH_SEARCH_PROFILE,
      payload,
    });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() =>
          navigation.navigate('OthersProfile', {
            id: item.userId,
          })
        }>
        <Image
          style={styles.profileImg}
          resizeMode={'center'}
          source={{uri: `${item.userProfileImage}`}}
        />
        <View style={styles.cardMargin}>
          <Text style={styles.profileText}>
            {item.userFirstName} {item.userLastName}
          </Text>
          <Text style={styles.profileIntroText}>
            Age - {item.userAge},{' '}
            {item.userPersonalInfo?.userPersonalInfoHeight?.name},
          </Text>
          <Text style={styles.profileIntroText}>
            {item.userCity.cityName},{item.userState.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isFetching) {
    return <Loader />;
  } else {
    return (
      <RootScreen scrollable={true}>
        <Text style={styles.title}>{translate('NewsFeed.title')}</Text>
        <Formik
          initialValues={{
            gender: 'male',
            ageFrom: '',
            ageTo: '',
          }}
          validationSchema={agevalidationSchema}
          onSubmit={values => handleSearchProfile(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Text style={styles.bottomText}>
                {translate('NewsFeed.choose')}
              </Text>
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
              </View>

              <View style={styles.ageContainer}>
                <TextInput
                  onChangeText={handleChange('ageFrom')}
                  onBlur={handleBlur('ageFrom')}
                  value={values.ageFrom}
                  keyboardType="numeric"
                  style={styles.textInput}
                  placeholder={translate('NewsFeed.ageFrom')}
                  placeholderTextColor={'#666666'}
                />

                <TextInput
                  onChangeText={handleChange('ageTo')}
                  onBlur={handleBlur('ageTo')}
                  value={values.ageTo}
                  keyboardType="numeric"
                  style={styles.textInput}
                  placeholder={translate('NewsFeed.ageTo')}
                  placeholderTextColor={'#666666'}
                />
              </View>
              <View style={styles.errorText}>
                {errors.ageFrom && touched.ageFrom ? (
                  <Text style={styles.ageFromError}>{errors.ageFrom}</Text>
                ) : null}
                <View style={styles.lastnameError}>
                  {errors.ageTo && touched.ageTo ? (
                    <Text style={styles.ageToError}>{errors.ageTo}</Text>
                  ) : null}
                </View>
              </View>
              <LoginButton
                title={translate('NewsFeed.Search')}
                onPress={handleSubmit}
                loading={isFetching}
              />
            </View>
          )}
        </Formik>

        <TouchableOpacity onPress={() => navigation.navigate('AdvanceSearch')}>
          <Text style={styles.text}>{translate('NewsFeed.filterProfile')}</Text>
        </TouchableOpacity>
        <ScrollView style={styles.footerContainer}>
          <View style={styles.footerTitle}>
            <Text style={styles.titleText}>
              {translate('NewsFeed.newIntro')}
            </Text>
            <Text style={styles.titleTextNext}>
              {translate('NewsFeed.recentlyJoint')}
            </Text>
          </View>
        </ScrollView>
        <FlatList
          horizontal
          data={newsFeedData}
          renderItem={renderItem}
          contentContainerStyle={styles.cardBackground}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.cardSeprater} />}
        />

        <Pressable
          onPress={() => navigation.navigate('SeeAllProfile')}
          style={styles.footerContainer}>
          <Text style={styles.footerTextseeAll}> See All </Text>
        </Pressable>
      </RootScreen>
    );
  }
};

export default NewsFeed;

const styles = StyleSheet.create({
  errorText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ageFromError: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: '35%',
    color: 'red',
  },
  ageToError: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
    marginBottom: 5,
  },

  title: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 22,
    color: '#ffffff',
  },
  bottomText: {
    marginHorizontal: 30,
    fontSize: 18,
    color: '#FFFFFF',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 80,
  },
  radioButton: {
    height: 25,
    width: 25,
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  radioButtonIcon: {
    height: 15,
    width: 15,
    borderRadius: 9,
    backgroundColor: 'white',
  },
  radioButtonText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '400',
    marginTop: 15,
  },

  ageContainer: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: 'white',
    marginLeft: 30,
    marginVertical: 10,
    flex: 0.44,
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
    height: hp(7),
    color: 'black',
  },

  submitButton: {
    backgroundColor: '#DC1C28',
    height: hp(8),
    marginHorizontal: 30,
    borderRadius: 10,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 15,
    fontSize: 20,
    color: 'white',
  },
  text: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
  SubfooterContainer: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22,
    marginTop: 10,
    paddingLeft: 5,
  },
  titleTextNext: {
    color: '#666666',
    paddingLeft: 5,
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
  },
  profileImageContainer: {
    height: hp('32'),
    width: wp('50'),
    marginTop: 20,
    marginBottom: 20,

    backgroundColor: 'white',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  profileImg: {
    flex: 1,
    width: wp('50'),
    height: wp('50'),
    resizeMode: 'content',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  footerTextContainer: {
    backgroundColor: 'white',
    flex: 1,
    height: hp('10'),
    width: wp('44'),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 3,
  },

  profileText: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  profileIntroText: {
    color: '#666666',
    textAlign: 'center',
    fontSize: 13,
  },
  footerContainer: {
    backgroundColor: '#EDEDED',
    paddingTop: 10,
    flex: 1,
  },
  footerTextseeAll: {
    color: 'red',
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  cardBackground: {
    backgroundColor: '#EDEDED',
    padding: 10,
  },
  cardSeprater: {
    width: 10,
  },
  cardMargin: {
    marginVertical: 10,
  },
});

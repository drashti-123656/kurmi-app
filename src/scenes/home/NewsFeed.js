import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
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
import {base_URL} from '../../services/httpServices/';
import Loader from '../../components/atoms/buttons/Loader';


const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const NewsFeed = ({navigation, item}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const {newsFeedData, isFetching} = useSelector(state => state.newsfeed);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

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

  const renderHeader = () => (
    <View>
      <Text style={styles.title}>{translate('NewsFeed.title')}</Text>
      <Formik
        initialValues={{
          gender: 'male',
          ageFrom: '',
          ageTo: '',
        }}
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

            <LoginButton
              title={translate('NewsFeed.Search')}
              onPress={handleSubmit}
              loading={isFetching}
            />
          </View>
        )}
      </Formik>

      <Text style={styles.text}>{translate('NewsFeed.filterProfile')}</Text>
      <ScrollView style={styles.footerContainer}>
        <View style={styles.footerTitle}>
          <Text style={styles.titleText}>{translate('NewsFeed.newIntro')}</Text>
          <Text style={styles.titleTextNext}>
            {translate('NewsFeed.recentlyJoint')}
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <ScrollView style={styles.SubfooterContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            style={styles.profileImageContainer}
            onPress={() =>
              navigation.navigate('OthersProfile', {
                id: item.userId,
              })
            }>
            
            <Image
              style={styles.profileImg}
              resizeMode={'center'}
              source={{uri: `${base_URL}${item.userProfileImage}`}}
              // source={require('../../assets/profile.png')}
            />
            {/* <View style={styles.footerTextContainer}> */}
            <Text style={styles.profileText}>
              {item.userFirstName} {item.userLastName}
            </Text>
            <Text style={styles.profileIntroText}>
              Age - {item.userAge}, {item.userCity.cityName},
            </Text>
            <Text style={styles.profileIntroText}>
              {item.userState.name},{item.userCountry.countryName}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  // const renderLoader = () => (isFetching ? <Loader /> : null);
  if (isFetching) {
    return <Loader />;
  } else {
  return (
    <RootScreen scrollable={true}>
      <FlatList
        data={newsFeedData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        initialNumToRender={10}
        //ListFooterComponent={renderLoader}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SeeAllProfile')}
        style={styles.footerContainer}>
        <Text style={styles.footerTextseeAll}> See All </Text>
      </TouchableOpacity>
    </RootScreen>
  );
  }
};

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    // backgroundColor: '#DC1C28',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageContainer: {
    marginTop: 18,
  },
  vectorImg: {
    width: 20,
    height: 5,
  },
  vectorImg_1: {
    width: 15,
    height: 5,
  },
  pinClipart: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  PinClipartImg: {
    width: 25,
    height: 25,
  },
  navbarText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 20,
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
    // flexDirection: 'row',
    //justifyContent: 'space-between',
    backgroundColor: '#EDEDED',

    //borderRadius: 10,
  },
  profileImageContainer: {
    height: hp('32'),
    width: wp('50'),
    marginTop: 30,
    paddingLeft: 6,
    borderRadius: 10,
    backgroundColor: 'white',
    
    flex: 1,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    justifyContent : 'space-evenly',
    marginHorizontal: 10,
    justifyContent: 'center',
    //alignItems :'center'
  },
  profileImg: {
    width: wp('44'),
    height: hp('23'),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: 5,
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
  SubfooterContainer: {
    backgroundColor: 'white',
    
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
  },
  footerTextseeAll: {
    color: 'red',
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

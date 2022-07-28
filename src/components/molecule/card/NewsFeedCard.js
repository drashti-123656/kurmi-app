import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import {base_URL} from '../../../services/httpServices';
import {useDispatch, useSelector} from 'react-redux';
import {SHORT_LIST_PROFILE} from '../../../scenes/shortList/redux/ShortListAction';
import {ADD_ME_VISITOR} from '../../../scenes/viewBy/redux/ViewByAction';

const NewsFeedCard = ({navigation, item, id}) => {
  const dispatch = useDispatch();
  const {
    authData: {isAuthenticated},
  } = useSelector(state => state.auth);

  const handleShortList = () => {
    const payload = {
      profileId: item.userId,
    };

    dispatch({
      type: SHORT_LIST_PROFILE,
      payload,
    });
  };

  const addMeVistor = () => {
    navigation.navigate('OthersProfile', {
      id: item.userId,
    });

    const payload = {
      profileId: item.userId,
    };

    dispatch({
      type: ADD_ME_VISITOR,
      payload,
    });
  };

  return (
    <TouchableOpacity style={styles.profileContainer} onPress={addMeVistor}>
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
          Height - {item.userPersonalInfo?.userPersonalInfoHeight?.heightTitleEn},
        </Text>
        <Text style={styles.profileIntroText}>
          {item.userCity.cityName},{' '}{item.userState.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsFeedCard;

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

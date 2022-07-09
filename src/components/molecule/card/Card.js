import {Image, Text, TouchableOpacity, View} from 'react-native';
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

const Card = ({navigation, item, id}) => {
  //const {id} = route.params;
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
    <View style={styles.profileContainer}>
      <TouchableOpacity onPress={addMeVistor}>
        <View style={styles.mainContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImg}
              resizeMode={'center'}
              source={{uri: `${item.userProfileImage}`}}
            />
            <View style={styles.footerTextContainer}>
              <Text style={styles.profileText}>
                {item.userFirstName} {item.userLastName}
              </Text>
              <Text style={styles.profileIntroText}>Age - {item.userAge},</Text>

              <Text style={styles.profileIntroText}>
                {item.userPersonalInfo?.userPersonalInfoHeight?.name},{' '}
                {item?.userCity?.cityName},
              </Text>
              <Text style={styles.profileIntroText}>{item.userState.name}</Text>
            </View>
          </View>
          <View style={styles.line} />

          <View style={styles.bottomContainer}>
            {!isAuthenticated ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.bottmIcons}>
                <Icon
                  name="star-o"
                  size={22}
                  color="#499A30"
                  style={styles.icon}
                />
                <Text style={styles.bottomText}> Shortlist </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={handleShortList}
                style={styles.bottmIcons}>
                <Icon
                  name="star-o"
                  size={22}
                  color="#499A30"
                  style={styles.icon}
                />
                <Text style={styles.bottomText}> Shortlist </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = EStyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
  },
  profileImg: {
    width: wp('20'),
    height: hp('10'),
    borderRadius: 100,
    marginTop: 10,
    marginLeft: 5,
  },

  profileText: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  profileIntroText: {
    color: '#666666',
    textAlign: 'center',
    fontSize: 13,

    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  footerTextContainer: {
    flexDirection: 'column',
    paddingBottom: 10,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingTop: 5,
    marginLeft: 10,
    marginRight: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    alignSelf: 'center',
    marginBottom: 5,
  },
  bottmIcons: {
    flexDirection: 'row',
  },
  bottomText: {
    alignSelf: 'flex-end',
    color: '$PRIMARY',
    fontWeight: '600',
    fontSize: 16,
  },
  mainContainer: {
    flexDirection: 'column',
    height: hp('20'),
    width: wp('90'),
    paddingLeft: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 15,
  },
});

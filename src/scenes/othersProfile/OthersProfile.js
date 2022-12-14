import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  alert,
  Linking,
  Platform,
  Pressable,
  Alert,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from '../../translations/configTranslations';
import {useDispatch, useSelector} from 'react-redux';
import {OTHERS_PROFILE_DETAILS} from './redux/OthersDetailAction';
import {
  SHORT_LISTED_USERS,
  SHORT_LIST_PROFILE,
} from '../shortList/redux/ShortListAction';
import {showMessage} from 'react-native-flash-message';
import Loader from '../../components/atoms/buttons/Loader';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  SEND_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST_LIST,
} from '../sendRequest/redux/sendRequestAction';

const OthersProfile = ({route, navigation}) => {
  const {othersProfileData, isFetching} = useSelector(
    state => state.othersDetail,
  );
  const {shortListedUsersData} = useSelector(state => state.shortListProfiles);

  const {sendfriendRequestData} = useSelector(state => state.friendRequest);
  const [modalVisible, setModalVisible] = useState(false);
  const [sentRequest, setsentRequest] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [btn, setBtn] = useState(true);
  var str = othersProfileData?.userContactInfo?.userContactInfoContactNo;
  var whatsapp = othersProfileData?.userContactInfo?.userContactInfoWhatsappNo;
  var storeid = sendfriendRequestData?.map(w => w.userId);
  var storeshortlistid = shortListedUsersData?.map(w => w.userId);
  var replaced = str.replace(/.(?=.{6,}$)/g, '*');
  var replace = whatsapp.replace(/.(?=.{6,}$)/g, '*');

  const {
    authData: {isAuthenticated},
  } = useSelector(state => state.auth);
  const {id} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      page: 1,
      pageSIze: 10,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: SHORT_LISTED_USERS,
      payload,
    });
    dispatch({
      type: OTHERS_PROFILE_DETAILS,
      payload: id,
    });
  }, []);
  const handleisActive = () => {
    setIsActive(current => !current);
    setBtn(false);
    setModalVisible(!modalVisible);
  };
  const handleShortList = () => {
    const payload = {
      profileId: id,
    };
    dispatch({
      type: SHORT_LIST_PROFILE,
      payload,
    });
    showMessage({
      message: 'Profile is ShortListed!',
      type: 'success',
    });
    dispatch({
      type: SHORT_LISTED_USERS,
      payload,
    });
  };

  const handleShortedList = () => {
    const payload = {
      profileId: id,
    };
    dispatch({
      type: SHORT_LIST_PROFILE,
      payload,
    });
    showMessage({
      message: 'Profile is Remove From ShortListed!',
      type: 'success',
    });
    dispatch({
      type: SHORT_LISTED_USERS,
      payload,
    });
  };
  const handleSecurity = () => {
    setIsActive(false);
    setBtn(true);
    dispatch({
      type: SEND_FRIEND_REQUEST,
      id,
    });
    showMessage({
      message: 'Friend request Send  Successfully!',
      type: 'success',
    });
    const payload = {
      page: 1,
      pageSIze: 10,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: SEND_FRIEND_REQUEST_LIST,
      payload,
    });
    setsentRequest(true);
  };

  const handleSentRequest = () => {
    setIsActive(false);
    setBtn(true);
    dispatch({
      type: SEND_FRIEND_REQUEST,
      id,
    });
    showMessage({
      message: 'Friend request Deleted Successfully!',
      type: 'success',
    });
    const payload = {
      page: 1,
      pageSIze: 10,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: SEND_FRIEND_REQUEST_LIST,
      payload,
    });
    setsentRequest(true);
  };

  const sendWhatsApp = () => {
    let msg = 'Please, Tell me What can i help you?';
    let phoneWithCountryCode = 9981424199;

    let mobile =
      Platform.OS == 'android'
        ? phoneWithCountryCode
        : '+' + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please insert message to send');
      }
    } else {
      alert('Please insert mobile no');
    }
  };

  //  const renderLoader = () => (isFetching ? <Loader /> : null);
  if (isFetching) {
    return <Loader />;
  } else {
    return (
      <View style={{flex: 1}}>
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.modalPicture}
              />
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Send Interest</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={isActive ? styles.button : styles.buttonClose}
                    onPress={handleisActive}>
                    <Text
                      style={{
                        color: isActive ? 'white' : 'black',
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  {storeid?.includes(id) ? (
                    <TouchableOpacity
                      style={btn ? styles.requestSent : styles.buttonClose}
                      onPress={() => handleSentRequest()}>
                      <Text
                        style={{
                          color: btn ? 'white' : 'black',
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}>
                        Request Sent
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={btn ? styles.button : styles.buttonClose}
                      onPress={() => handleSecurity()}>
                      <Text
                        style={{
                          color: btn ? 'white' : 'black',
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}>
                        Confirm
                      </Text>
                    </TouchableOpacity>
                  )}
                  {/* <TouchableOpacity
                    style={btn ? styles.button : styles.buttonClose}
                    onPress={() => handleSecurity()}>
                    <Text
                      style={{
                        color: btn ? 'white' : 'black',
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}>
                      Confirm
                    </Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <ScrollView>
          <Image
            style={styles.profileImg}
            resizeMode={'cover'}
            //resizeMode={'contain'}
            source={{uri: `${othersProfileData?.userProfileImage}`}}
          />

          <View style={styles.transparentText}>
            <Text style={styles.subNames}>
              {' '}
              {othersProfileData?.userFirstName}{' '}
              {othersProfileData?.userLastName}{' '}
            </Text>
            <Text style={styles.subNamesDetails}>
              {' '}
              Age - {othersProfileData?.userAge},{' '}
              {
                othersProfileData?.userPersonalInfo?.userPersonalInfoHeight
                  ?.name
              }
              , {othersProfileData?.userCity?.cityName}{' '}
            </Text>
          </View>

          <View style={styles.contactContainer}>
            {!isAuthenticated ? (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{flexDirection: 'row'}}>
                  <Icon
                    name="phone"
                    size={30}
                    color={EStyleSheet.value('$PRIMARY')}
                    style={{marginVertical: 20}}
                  />
                  <Text style={styles.contactText}> Call Now </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{flexDirection: 'row'}}>
                  <Icon
                    name="whatsapp"
                    size={28}
                    color={EStyleSheet.value('$PRIMARY')}
                    style={{marginVertical: 20}}
                  />
                  <Text style={styles.contactText}> WhatsaApp </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{flexDirection: 'row'}}>
                  <MaterialIcons
                    name="email"
                    size={30}
                    color={EStyleSheet.value('$PRIMARY')}
                    style={{marginVertical: 20}}
                  />
                  <Text style={styles.contactText}> Email </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={{flexDirection: 'row'}}>
                  <Icon
                    name="phone"
                    size={30}
                    color={EStyleSheet.value('$PRIMARY')}
                    style={{marginVertical: 17}}
                  />
                  <Text style={styles.contactText}> Call Now </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={{flexDirection: 'row'}}>
                  <Icon
                    name="whatsapp"
                    size={28}
                    color={EStyleSheet.value('$PRIMARY')}
                    style={{marginVertical: 17}}
                  />
                  <Text style={styles.contactText}> WhatsaApp </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  // onPress={handleSecurity}
                  style={{flexDirection: 'row'}}>
                  <MaterialIcons
                    name="email"
                    size={30}
                    color={EStyleSheet.value('$PRIMARY')}
                    style={{marginVertical: 17}}
                  />
                  <Text style={styles.contactText}> Email </Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          {/* {renderLoader()} */}
          <View style={styles.detailContainer}>
            <Text style={styles.headingText}>
              {translate('Vyaktigatdata.Personal information')}
            </Text>

            <View style={styles.subDetailContainer}>
              {/* <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('register.Name')}{' '}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {othersProfileData.userFirstName}{' '}
                  {othersProfileData.userLastName}{' '}
                </Text>
              </View> */}
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('register.birthdate')}{' '}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {othersProfileData?.userDob}{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('register.city')}{' '}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {othersProfileData?.userCity?.cityName}{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('register.state')}{' '}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {othersProfileData?.userState?.name}{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('Vyaktigatdata.gender')}{' '}
                </Text>

                <Text style={styles.detailsText}>
                  {' '}
                  {othersProfileData?.userGender}{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('Vyaktigatdata.profileCreatedBy')}{' '}
                </Text>

                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userProfileCreatedBy
                      ?.profileCreatedByNameHi
                  }{' '}
                </Text>
              </View>

              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('Vyaktigatdata.Marital Status')}{' '}
                </Text>

                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userPersonalInfo
                      ?.userPersonalInfoMaritalStatusId?.maritalStatusTitleHi
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('Vyaktigatdata.Height')}{' '}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userPersonalInfo?.userPersonalInfoHeight
                      ?.name
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('Vyaktigatdata.Knowledge')}{' '}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userEducationInfo
                      ?.userEducationInfoEducation?.educationTitleHi
                  }
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('Vyaktigatdata.Job')}{' '}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userEducationInfo
                      ?.userEducationInfoOccupation?.occupationTitleHi
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('Vyaktigatdata.Disability')}{' '}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userPersonalInfo
                      ?.userPersonalInfoDisability?.nakshatraTitleHi
                  }{' '}
                </Text>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: '#666666',
                borderBottomWidth: 0.5,
              }}
            />

            <Text style={styles.headingText}>
              {translate('Dharmikjankari.Dharmik Jankari')}
            </Text>
            <View style={styles.subDetailContainer}>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('Dharmikjankari.Caste')}
                </Text>
                <Text style={styles.detailsText}>
                  {othersProfileData?.userReligiousInfo?.userReligiousInfoGotra}
                </Text>
              </View>

              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('Dharmikjankari.Birthplace')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userReligiousInfo
                      ?.userReligiousInfoPlaceOfBirth
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('Dharmikjankari.auspicious')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userReligiousInfo
                      ?.userReligiousInfoManglik
                  }{' '}
                </Text>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: '#666666',
                borderBottomWidth: 0.5,
              }}
            />

            <Text style={styles.headingText}>
              {translate('ParivarikParichay.parivarikHeader')}
            </Text>
            <View style={styles.subDetailContainer}>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('ParivarikParichay.fatherName')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userFamilyInfo?.userFamilyInfoFatherName
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('ParivarikParichay.fatherOccupation')}
                </Text>

                <Text style={styles.detailsText}>
                  {
                    othersProfileData?.userFamilyInfo
                      ?.userFamilyInfoFatherOccupation
                  }
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('ParivarikParichay.motherName')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userFamilyInfo?.userFamilyInfoMotherName
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('ParivarikParichay.motherMayaka')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userFamilyInfo?.userFamilyInfoMotherMaika
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('ParivarikParichay.brother')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userFamilyInfo?.userFamilyInfoNoOfBrother
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('ParivarikParichay.sister')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userFamilyInfo?.userFamilyInfoNoOfSister
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('ParivarikParichay.land')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userFamilyInfo?.userFamilyInfoLand
                      ?.landTitleHi
                  }{' '}
                </Text>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: '#666666',
                borderBottomWidth: 0.5,
              }}
            />

            <Text style={styles.headingText}>
              {translate('samPark.samparkheader')}
            </Text>
            <View style={styles.subDetailContainer}>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('samPark.mobileNo')}
                </Text>
                {!isAuthenticated ? (
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginUrl}>{replaced}</Text>
                  </Pressable>
                ) : (
                  <>
                    <Text style={styles.detailsText}>
                      {' '}
                      {
                        othersProfileData?.userContactInfo
                          ?.userContactInfoContactNo
                      }
                    </Text>
                  </>
                )}
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('samPark.whatsAppNo')}
                </Text>
                {!isAuthenticated ? (
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginUrl}>{replace}</Text>
                  </Pressable>
                ) : (
                  <>
                    <Text style={styles.detailsText}>
                      {
                        othersProfileData?.userContactInfo
                          ?.userContactInfoWhatsappNo
                      }{' '}
                    </Text>
                  </>
                )}
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('samPark.presentAdd')}
                </Text>
                {!isAuthenticated ? (
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginUrl}>Click here to login</Text>
                  </Pressable>
                ) : (
                  <>
                    <Text style={styles.detailsText}>
                      {' '}
                      {
                        othersProfileData?.userContactInfo
                          ?.userContactInfoPresentAddress
                      }{' '}
                    </Text>
                  </>
                )}
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('samPark.permanentAdd')}
                </Text>

                {!isAuthenticated ? (
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginUrl}>Click here to login</Text>
                  </Pressable>
                ) : (
                  <>
                    <Text style={styles.detailsText}>
                      {' '}
                      {
                        othersProfileData?.userContactInfo
                          ?.userContactInfoPermanentAddress
                      }{' '}
                    </Text>
                  </>
                )}
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: '#666666',
              borderBottomWidth: 0.5,
            }}
          />
        </ScrollView>

        <View style={styles.bottomContainer}>
          {!isAuthenticated ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.shortlist}>
              <Icon
                name="star-o"
                size={40}
                color="#c3773b"
                style={{paddingLeft: 6}}
              />
              <Text style={{color: '#c3773b', fontSize: 12}}> Shortlist </Text>
            </TouchableOpacity>
          ) : storeshortlistid?.includes(id) ? (
            <TouchableOpacity
              onPress={handleShortedList}
              style={styles.shortlisted}>
              <Icon
                name="star"
                size={40}
                color="#c3773b"
                style={{paddingLeft: 8}}
              />
              <Text style={{color: '#c3773b', fontSize: 10}}>
                {' '}
                Shortlisted{' '}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleShortList}
              style={styles.shortlist}>
              <Icon
                name="star-o"
                size={40}
                color="#c3773b"
                style={{paddingLeft: 6}}
              />
              <Text style={{color: '#c3773b', fontSize: 12}}> Shortlist </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
};

export default OthersProfile;

const styles = EStyleSheet.create({
  profileImg: {
    height: heightPercentageToDP('60'),
    width: widthPercentageToDP('100'),
    backgroundColor: 'black',
  },
  contactContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 3,
    shadowColor: '#000',
    height: heightPercentageToDP('9'),
    justifyContent: 'space-evenly',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subNames: {
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
  },
  contactText: {
    fontSize: 20,
    fontWeight: '000',
    marginVertical: 20,
    color: 'black',
  },
  detailContainer: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c3773b',
    marginVertical: 10,
  },
  subHeadingText: {
    color: 'black',
    fontSize: 15,
    //marginLeft: 5,
    fontWeight: '600',
    flex: 1,
  },
  detailsText: {
    fontSize: 15,
    marginBottom: 10,
    color: '#666666',
    flex: 1,
    //marginLeft: 5,
    //marginHorizontal: 20,
  },
  subDetailContainer: {
    marginLeft: 10,
  },
  bottomContainer: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 150,
    position: 'absolute',
    bottom: '5%',
    right: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // alignSelf : 'center',
  },
  bottmIcons: {
    flexDirection: 'column',
    marginVertical: 10,
    justifyContent: 'space-evenly',
    paddingLeft: 20,
  },
  bottomText: {
    color: 'white',
  },
  shortlist: {
    flexDirection: 'column',
    //marginHorizontal : 5,
    //marginVertical : 1,
    // alignContent : 'center',
    //justifyContent : 'center',
    //  position: 'relative',
    paddingBottom: 5,
  },
  shortlisted: {
    flexDirection: 'column',
    paddingBottom: 5,
  },
  transparentText: {
    backgroundColor: 'black',
    opacity: 0.7,
    paddingLeft: 20,
    paddingTop: 5,
    height: heightPercentageToDP('8'),
  },
  subNamesDetails: {
    color: 'white',
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    // marginTop: 5,
    // marginHorizontal: 40,
    /// flexWrap: 'wrap',
    //justifyContent: 'space-evenly',
  },
  loginUrl: {
    fontSize: 15,
    marginBottom: 10,
    color: '$PRIMARY',
    flex: 1,
    paddingRight: 62,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '$PRIMARY',
    borderRadius: 50,
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  requestSent: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '$PRIMARY',
    borderRadius: 50,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textConfirm: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalPicture: {
    flex: 1,
    height: '100%',
    width: '100%',
    opacity: 0.4,
    elevation: 20,
    position: 'absolute',
  },
});

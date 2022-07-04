import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from '../../translations/configTranslations';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {fetchothersProfileData} from './redux/OthersDetailReducer';
import {OTHERS_PROFILE_DETAILS} from './redux/OthersDetailAction';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import {SHORT_LIST_PROFILE} from '../shortList/redux/ShortListAction';
import {base_URL} from '../../services/httpServices/';
import {showMessage} from 'react-native-flash-message';
import Loader from '../../components/atoms/buttons/Loader';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const OthersProfile = ({route, navigation}) => {
  const {othersProfileData, isFetching} = useSelector(
    state => state.othersDetail,
  );
  const {id} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('id====>>', id);
    dispatch({
      type: OTHERS_PROFILE_DETAILS,
      payload: id,
    });
  }, []);

  const handleShortList = () => {
    const payload = {
      profileId: id,
    };

    dispatch({
      type: SHORT_LIST_PROFILE,
      payload,
    });
  };

  //  const renderLoader = () => (isFetching ? <Loader /> : null);
  if (isFetching) {
    return <Loader />;
  } else {
    return (
      <View style={{flex: 1}}>
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
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Icon
                name="phone"
                size={30}
                color={EStyleSheet.value('$PRIMARY')}
                style={{marginVertical: 20}}
              />
              <Text style={styles.contactText}> Call Now </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Icon
                name="whatsapp"
                size={28}
                color={EStyleSheet.value('$PRIMARY')}
                style={{marginVertical: 20}}
              />
              <Text style={styles.contactText}> WhatsaApp </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row'}}>
              <MaterialIcons
                name="email"
                size={30}
                color={EStyleSheet.value('$PRIMARY')}
                style={{marginVertical: 20}}
              />
              <Text style={styles.contactText}> Email </Text>
            </TouchableOpacity>
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
                  {othersProfileData.userDob}{' '}
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
                  {' '}
                  {
                    othersProfileData?.userFamilyInfo
                      ?.userFamilyInfoFatherOccupation
                  }{' '}
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
                <Text style={styles.detailsText}>
                  {' '}
                  {othersProfileData?.userContactInfo?.userContactInfoContactNo}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('samPark.whatsAppNo')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userContactInfo
                      ?.userContactInfoWhatsappNo
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {' '}
                  {translate('samPark.presentAdd')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userContactInfo
                      ?.userContactInfoPresentAddress
                  }{' '}
                </Text>
              </View>
              <View style={styles.alignment}>
                <Text style={styles.subHeadingText}>
                  {translate('samPark.permanentAdd')}
                </Text>
                <Text style={styles.detailsText}>
                  {' '}
                  {
                    othersProfileData?.userContactInfo
                      ?.userContactInfoPermanentAddress
                  }{' '}
                </Text>
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
          <TouchableOpacity onPress={handleShortList} style={styles.shortlist}>
            <Icon
              name="star-o"
              size={40}
              color="#c3773b"
              style={{paddingLeft: 6}}
            />
            <Text style={{color: '#c3773b', fontSize: 12}}> Shortlist </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default OthersProfile;

const styles = StyleSheet.create({
  profileImg: {
    height: '27%',
    width: '100%',
    backgroundColor: 'black',
  },
  contactContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    shadowColor: '#000',
    height: '5.5%',
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
    marginBottom: '110%',
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
  transparentText: {
    backgroundColor: 'black',
    opacity: 0.7,
    paddingLeft: 20,
    paddingTop: 5,
    height: '4.5%',
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
});

import {Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from '../../translations/configTranslations';
import {useDispatch, useSelector} from 'react-redux';
import {MY_PROFILE_DETAILS} from '../profile/redux/MyProfileAction';
import Loader from '../../components/atoms/buttons/Loader';
import {fetchmyProfileDataStarted} from '../profile/redux/MyProfileReducer';
import {clearProfileDownloadStatus} from '../shareBioData/redux/DownloadPdfReducer';
import RNShare from 'react-native-share';
import {launchImageLibrary} from 'react-native-image-picker';
import {EDIT_PROFILE} from '../editProfile/redux/editProfileAction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const Profile = ({navigation}) => {
  const [response, setResponse] = useState();
  const {myProfileData, isFetching} = useSelector(
    state => state.myProfileDetail,
  );
  const {downloadProfileSuccess, downloadedProfileFilePath} = useSelector(
    state => state.downloadPdf,
  );
  const dispatch = useDispatch();
  const handleChooseProfilePic = () => {
    launchImageLibrary({noData: true, includeBase64: true}, response => {
      if (!response.didCancel) {
        setResponse(response);

        const payload = {
          userUpdateType: 'general',
          userContactInfoContactNo:
            myProfileData.userContactInfo.userContactInfoContactNo,
          userContactInfoWhatsappNo:
            myProfileData.userContactInfo.userContactInfoWhatsappNo,
          userContactInfoPresentAddress:
            myProfileData.userContactInfo.userContactInfoPresentAddress,
          userContactInfoPermanentAddress:
            myProfileData.userContactInfo.userContactInfoPermanentAddress,

          userEducationInfoEducation:
            myProfileData.userEducationInfo.userEducationInfoEducation
              .educationId,
          userEducationInfoOccupation:
            myProfileData.userEducationInfo.userEducationInfoOccupation
              .occupationId,

          userFamilyInfoFatherName:
            myProfileData.userFamilyInfo.userFamilyInfoFatherName,
          userFamilyInfoFatherOccupation:
            myProfileData.userFamilyInfo.userFamilyInfoFatherOccupation,
          userFamilyInfoMotherName:
            myProfileData.userFamilyInfo.userFamilyInfoMotherName,
          userFamilyInfoLand:
            myProfileData.userFamilyInfo.userFamilyInfoLand.landId,
          userFamilyInfoMotherMaika:
            myProfileData.userFamilyInfo.userFamilyInfoMotherMaika,
          userFamilyInfoNoOfSister:
            myProfileData.userFamilyInfo.userFamilyInfoNoOfSister,
          userFamilyInfoNoOfBrother:
            myProfileData.userFamilyInfo.userFamilyInfoNoOfBrother,

          userPersonalInfoMaritalStatusId:
            myProfileData.userPersonalInfo.userPersonalInfoMaritalStatusId
              .maritalStatusId,
          userPersonalInfoHeight:
            myProfileData.userPersonalInfo.userPersonalInfoHeight.heightId,
          userPersonalInfoDisability:
            myProfileData.userPersonalInfo.userPersonalInfoDisability
              .nakshatraId,

          userReligiousInfoGotra:
            myProfileData.userReligiousInfo.userReligiousInfoGotra,
          userReligiousInfoZodiac: 6,
          userReligiousInfoManglik:
            myProfileData.userReligiousInfo.userReligiousInfoManglik ===
            'manglik'
              ? 1
              : 0,

          userReligiousInfoMotherGotra: 5,
          userReligiousInfoPlaceOfBirth:
            myProfileData.userReligiousInfo.userReligiousInfoPlaceOfBirth,

          userFirstName: myProfileData.userFirstName,
          userLastName: myProfileData.userLastName,
          userGender: 'male',
          userDob: '1988-06-27',
          userCountry: myProfileData.userCountry.countryId,
          userState: myProfileData.userState.stateId,
          userCity: myProfileData.userCity.cityId,
          userProfileImage: `data:image/png;base64, ${response.assets[0].base64}`,
        };

        dispatch({
          type: EDIT_PROFILE,
          payload,
        });
      }
    });
  };
  useEffect(() => {
    dispatch(fetchmyProfileDataStarted());
    dispatch({
      type: MY_PROFILE_DETAILS,
    });
  }, []);
  useEffect(() => {
    if (downloadProfileSuccess) {
      RNShare.open({
        title: 'Invoice',
        message: 'Invoice',
        url: `file://${downloadedProfileFilePath}`,
      })
        .catch(reason => {
          console.log('failed: ', reason);
        })
        .finally(() => {
          dispatch(clearProfileDownloadStatus({}));
        });
    }
  }, [downloadProfileSuccess]);
  if (isFetching) {
    return <Loader />;
  } else {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={handleChooseProfilePic}
              style={styles.uploadProfile}>
              {response ? (
                <Image
                  style={styles.image}
                  source={{uri: `${response?.assets[0]?.uri}`}}
                />
              ) : (
                <TouchableOpacity onPress={handleChooseProfilePic}>
                  <Image
                    style={styles.image}
                    source={{uri: `${myProfileData.userProfileImage}`}}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handleChooseProfilePic}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{uri: `${myProfileData.userProfileImage}`}}
            />
          </TouchableOpacity> */}
            <Text style={styles.text}>
              {myProfileData.userFirstName} {myProfileData.userLastName}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textIIndex}>
                {' '}
                {translate('Myprofile.update membership')}
              </Text>
            </TouchableOpacity>

            {/* <View style={styles.whatsappIcon}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/whatsappicon.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.gmailIcon}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/gmail.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View> */}
          </View>

          <View style={styles.separatorLine} />

          <View style={styles.imageContainer}>
            <Text style={styles.heading}>
              {' '}
              {translate('Vyaktigatdata.Personal information')}
            </Text>
            <View style={styles.pencilIcon}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    translate('Vyaktigatdata.Personal information'),
                    {
                      myProfileData,
                    },
                  )
                }>
                <Icon
                  name="pencil"
                  size={35}
                  color={EStyleSheet.value('$PRIMARY')}
                />
                {/* <Image
                  source={require('../../assets/pencilimage.png')}
                  style={styles.pencil}
                /> */}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('register.Name')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userFirstName} {myProfileData?.userLastName}
              </Text>
            </View>

            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('register.EmailId')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userEmail}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Myprofile.Gender')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userGender}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Vyaktigatdata.Marital Status')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userPersonalInfo
                    ?.userPersonalInfoMaritalStatusId?.maritalStatusTitleHi
                }{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('register.birthdate')}
              </Text>
              <Text style={styles.detailsText}> {myProfileData?.userDob} </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('register.Age')}
              </Text>
              <Text style={styles.detailsText}> {myProfileData?.userAge} </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Vyaktigatdata.Height')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userPersonalInfo?.userPersonalInfoHeight?.name
                }{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Vyaktigatdata.Disability')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userPersonalInfo?.userPersonalInfoDisability
                    ?.nakshatraTitleHi
                }{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('register.ProfileName')}{' '}
              </Text>

              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userProfileCreatedBy?.profileCreatedByNameHi
                }{' '}
              </Text>
            </View>

            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('register.state')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userState?.name}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('register.city')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userCity?.cityName}{' '}
              </Text>
            </View>

            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Vyaktigatdata.Knowledge')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userEducationInfo?.userEducationInfoEducation
                    ?.educationTitleHi
                }
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Vyaktigatdata.Job')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userEducationInfo?.userEducationInfoOccupation
                    ?.occupationTitleHi
                }{' '}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.heading}>
              {' '}
              {translate('Dharmikjankari.Dharmik Jankari')}
            </Text>
            <View style={styles.pencilIcon}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('dharmikjankariEditProfile', {
                    myProfileData,
                  })
                }>
                <Icon
                  name="pencil"
                  size={35}
                  color={EStyleSheet.value('$PRIMARY')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Dharmikjankari.Caste')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userReligiousInfo?.userReligiousInfoGotra}{' '}
              </Text>
            </View>

            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Dharmikjankari.Birthplace')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userReligiousInfo
                    ?.userReligiousInfoPlaceOfBirth
                }{' '}
              </Text>
            </View>

            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('Dharmikjankari.auspicious')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userReligiousInfo?.userReligiousInfoManglik
                }{' '}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.heading}>
              {' '}
              {translate('ParivarikParichay.parivarikHeader')}
            </Text>
            <View style={styles.pencilIcon}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('parivarikParichyEditProfile', {
                    myProfileData,
                  })
                }>
                <Icon
                  name="pencil"
                  size={35}
                  color={EStyleSheet.value('$PRIMARY')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('ParivarikParichay.fatherName')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userFamilyInfo?.userFamilyInfoFatherName}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('ParivarikParichay.fatherOccupation')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userFamilyInfo?.userFamilyInfoFatherOccupation
                }{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('ParivarikParichay.motherName')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userFamilyInfo?.userFamilyInfoMotherName}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('ParivarikParichay.motherMayaka')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userFamilyInfo?.userFamilyInfoMotherMaika}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('ParivarikParichay.brother')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userFamilyInfo?.userFamilyInfoNoOfBrother}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('ParivarikParichay.sister')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userFamilyInfo?.userFamilyInfoNoOfSister}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('ParivarikParichay.land')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userFamilyInfo?.userFamilyInfoLand?.landTitleHi
                }{' '}
              </Text>
            </View>
            <View>
              <View style={styles.separatorLine} />
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.heading}>
              {' '}
              {translate('samPark.samparkheader')}
            </Text>
            <View style={styles.pencilIcon}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(translate('samPark.samparkheader'), {
                    myProfileData,
                  })
                }>
                <Icon
                  name="pencil"
                  size={35}
                  color={EStyleSheet.value('$PRIMARY')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('samPark.mobileNo')}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userContactInfo?.userContactInfoContactNo}
              </Text>
            </View>

            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('samPark.whatsAppNo')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {myProfileData?.userContactInfo?.userContactInfoWhatsappNo}{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('samPark.presentAdd')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userContactInfo?.userContactInfoPresentAddress
                }{' '}
              </Text>
            </View>
            <View style={styles.profileContain}>
              <Text style={styles.subHeadingText}>
                {translate('samPark.permanentAdd')}{' '}
              </Text>
              <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData?.userContactInfo
                    ?.userContactInfoPermanentAddress
                }{' '}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Profile;
const styles = EStyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
    backgroundColor: '$DARK',
    height: 300,
  },
  profileMargin: {
    marginTop: -20,
  },
  nameText: {
    marginRight: 120,
    color: '$PLACEHOLDER',
    fontSize: 15,
    marginBottom: 5,
  },
  genderText: {
    marginRight: 125,
    color: '$PLACEHOLDER',
    fontSize: 15,
    marginBottom: 5,
  },
  footer: {
    color: '$PRIMARY',
    marginTop: 20,
    marginVertical: 40,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  upload_img: {
    //flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,

    borderRadius: 100,
  },

  detailsText: {
    fontSize: 15,
    marginBottom: 10,
    color: '#666666',
    flex: 1,
    //marginLeft: 5,
    //marginHorizontal: 20,
  },
  parivarikText: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 160,
  },
  samparkDetails: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 80,
  },

  emailidText: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 30,
  },
  countryText: {
    marginRight: 110,
    color: '$PLACEHOLDER',
    fontSize: 15,
    marginBottom: 5,
  },
  birthText: {
    marginRight: 30,
    color: '$PLACEHOLDER',
    fontSize: 15,
    marginBottom: 5,
  },
  stateText: {
    marginRight: 130,
    color: '$PLACEHOLDER',
    fontSize: 15,
    marginBottom: 5,
  },
  cityText: {
    marginRight: 140,
    color: '$PLACEHOLDER',
    fontSize: 15,
    marginBottom: 5,
  },
  dob: {
    marginRight: 90,
    marginBottom: 5,
    color: '$PLACEHOLDER',
  },
  nativeText: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 160,
  },
  dharmikText: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 100,
  },
  heightText: {
    marginRight: 155,
    color: '$PLACEHOLDER',
    fontSize: 15,
    marginBottom: 5,
  },
  profileCreate: {
    marginRight: 145,
    color: '$PLACEHOLDER',
    fontSize: 15,
    marginBottom: 5,
  },
  dharmikLast: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 140,
  },
  dharmikManglik: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 90,
  },
  samparkText: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 110,
  },
  samparkLast: {
    fontSize: 15,
    marginBottom: 5,
    color: '$PLACEHOLDER',
    marginRight: 90,
  },
  heading: {
    color: '$PRIMARY',
    padding: heightPercentageToDP('1'),
    //marginTop: 20,
    // marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  dataContainer: {
    //marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '$PRIMARY',
    //padding: 10,
    width: 200,
    height: 50,
    //marginTop: 15,
    marginVertical: heightPercentageToDP('1.5'),
    marginLeft: widthPercentageToDP('4'),
    // marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pencilIcon: {
    position: 'absolute',
    paddingLeft: widthPercentageToDP('90'),
  },
  pencil: {
    width: 30,
    height: 30,
  },
  whatsappIcon: {
    marginTop: 25,
    marginHorizontal: 50,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  gmailIcon: {
    marginTop: 25,
    marginHorizontal: -40,
  },
  textIIndex: {
    color: '$WHITE',
    fontSize: 20,
  },
  bottomContainer: {
    flex: 3,
    marginHorizontal: 20,
    marginTop: 30,
    fontSize: 20,
  },
  mainContainer: {
    flex: 1,
    marginBottom: heightPercentageToDP('2'),
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 225,
    height: 225,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 125,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 5,
  },
  separatorLine: {
    borderBottomColor: '#666666',
    borderBottomWidth: 0.5,
    marginVertical: heightPercentageToDP('1'),
  },
  text: {
    color: '$WHITE',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle: {
    color: '$DARK',
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: '600',
  },
  textHeading: {
    color: '$DARK',
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: '600',
  },
  headerText: {
    color: '$DARK',
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: '600',
  },
  profileContain: {
    flexDirection: 'row',
    //justifyContent: 'space-evenly',
  },
  subHeadingText: {
    color: 'black',
    fontSize: 15,
    marginHorizontal: 20,
    fontWeight: '600',
    flex: 1,
  },
});

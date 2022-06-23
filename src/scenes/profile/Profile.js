import {Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from '../../translations/configTranslations';
import {useDispatch, useSelector} from 'react-redux';
import {MY_PROFILE_DETAILS} from '../profile/redux/MyProfileAction';
import Loader from '../../components/atoms/buttons/Loader';
import {fetchmyProfileDataStarted} from '../profile/redux/MyProfileReducer';
import {clearLedgerDownloadStatus} from '../shareBioData/redux/DownloadPdfReducer';
import RNShare from 'react-native-share';
import {launchImageLibrary} from 'react-native-image-picker';
import {EDIT_PROFILE} from '../editProfile/redux/editProfileAction';
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
      if (response) {
        setResponse(response);

        const payload = {
          userUpdateType: 'general',
          userContactInfoContactNo: '9874563210',
          userContactInfoWhatsappNo: 9874563210,
          userContactInfoPresentAddress: 'Address',
          userContactInfoPermanentAddress: 'Permanent',

          userEducationInfoEducation: 1,
          userEducationInfoOccupation: 1,

          userFamilyInfoFatherName: 'FatherName',
          userFamilyInfoFatherOccupation: 1,
          userFamilyInfoMotherName: 'MotherName',
          userFamilyInfoLand: 1,
          userFamilyInfoMotherMaika: 'dffdf',
          userFamilyInfoNoOfSister: 1,
          userFamilyInfoNoOfBrother: 1,

          userPersonalInfoMaritalStatusId: 2,
          userPersonalInfoHeight: 1,
          userPersonalInfoDisability: 1,

          userReligiousInfoGotra: 4,
          userReligiousInfoZodiac: 6,
          userReligiousInfoManglik: 5,
          userReligiousInfoMotherGotra: 5,

          userFirstName: 'stest',
          userLastName: 'stest',
          userGender: 'male',
          userDob: '1988-06-27',
          userCountry: 5,
          userState: 5,
          userCity: 5,
          userProfileImage: `data:image/png;base64, ${response.assets[0].base64}`,
        };
        console.log('payloddddd==>', payload.userProfileImage);

        dispatch({
          type: EDIT_PROFILE,
          payload,
        });
      }
    });
  };
  useEffect(() => {
    console.log('myprofileDataaa====>>', myProfileData);
    dispatch(fetchmyProfileDataStarted());
    console.log('myprofileDataaa====>>', isFetching);
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
          dispatch(clearLedgerDownloadStatus({}));
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
          <View>
            <View style={styles.separatorLine} />
          </View>
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
                <Image
                  source={require('../../assets/pencilimage.png')}
                  style={styles.pencil}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.headerText}>{translate('register.Name')}</Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userFirstName}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('register.EmailId')}
            </Text>
            <Text style={styles.detailsText}> {myProfileData.userEmail} </Text>
            <Text style={styles.textStyle}>
              {translate('Myprofile.Gender')}{' '}
            </Text>
            <Text style={styles.detailsText}> {myProfileData.userGender} </Text>
            <Text style={styles.textStyle}>
              {translate('Vyaktigatdata.Marital Status')}
            </Text>
            {/* <Text style={styles.detailsText}>
              {' '}
              {
                myProfileData.userPersonalInfo.userPersonalInfoMaritalStatusId
                  .maritalStatusTitleHi
              }{' '}
            </Text> */}
            <Text style={styles.textStyle}>
              {translate('register.birthdate')}
            </Text>
            <Text style={styles.detailsText}> {myProfileData.userDob} </Text>
            <Text style={styles.textStyle}>
              {translate('Vyaktigatdata.Height')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userPersonalInfo.userPersonalInfoHeight}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('Vyaktigatdata.Disability')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userPersonalInfo.userPersonalInfoDisability}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('register.ProfileName')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userProfileCreatedBy.profileCreatedByNameHi}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('register.country')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userCountry.countryName}{' '}
            </Text>
            <Text style={styles.textStyle}>{translate('register.state')} </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userState.name}{' '}
            </Text>
            <Text style={styles.textStyle}>{translate('register.city')} </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userCity.cityName}{' '}
            </Text>
            <View style={styles.dataContainer}>
              <Text style={styles.textHeading}>
                {translate('Vyaktigatdata.Knowledge')}
              </Text>
              {/* <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData.userEducationInfo.userEducationInfoEducation
                    .educationTitleHi
                }
              </Text> */}
              <Text style={styles.textStyle}>
                {translate('Vyaktigatdata.Job')}
              </Text>
              {/* <Text style={styles.detailsText}>
                {' '}
                {
                  myProfileData.userEducationInfo.userEducationInfoOccupation
                    .occupationTitleHi
                }{' '}
              </Text> */}
            </View>
          </View>
          <View>
            <View style={styles.separatorLine} />
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
                <Image
                  source={require('../../assets/pencilimage.png')}
                  style={styles.pencil}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.textHeading}>
              {translate('samPark.mobileNo')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userContactInfo.userContactInfoContactNo}
            </Text>
            <Text style={styles.textStyle}>
              {translate('samPark.whatsAppNo')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userContactInfo.userContactInfoWhatsappNo}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('samPark.presentAdd')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userContactInfo.userContactInfoPresentAddress}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('samPark.permanentAdd')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                myProfileData.userContactInfo.userContactInfoPermanentAddress
              }{' '}
            </Text>
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
                <Image
                  source={require('../../assets/pencilimage.png')}
                  style={styles.pencil}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.textHeading}>
              {translate('Dharmikjankari.Caste')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {/* {
                myProfileData.userReligiousInfo.userReligiousInfoGotra
                  .gotraTitleHi
              }{' '} */}
            </Text>
            <Text style={styles.textStyle}>
              {translate('Dharmikjankari.Native')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                myProfileData.userReligiousInfo.userReligiousInfoMotherGotra
              }{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('Dharmikjankari.Birthtime')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                myProfileData.userReligiousInfo.userReligiousInfoTimeOfBirth
              }{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('Dharmikjankari.Birthplace')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                myProfileData.userReligiousInfo.userReligiousInfoPlaceOfBirth
              }{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('Dharmikjankari.Zodiacsign')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                myProfileData.userReligiousInfo.userReligiousInfoZodiac
                  .zodiacTitleHi
              }{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('Dharmikjankari.auspicious')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userReligiousInfo.userReligiousInfoManglik}{' '}
            </Text>
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
                <Image
                  source={require('../../assets/pencilimage.png')}
                  style={styles.pencil}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.textHeading}>
              {translate('ParivarikParichay.fatherName')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userFamilyInfo.userFamilyInfoFatherName}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('ParivarikParichay.fatherOccupation')}{' '}
            </Text>
            {/* <Text style={styles.detailsText}>
              {' '}
              {
                myProfileData.userFamilyInfo.userFamilyInfoFatherOccupation
                  .occupationTitleHi
              }{' '}
            </Text> */}
            <Text style={styles.textStyle}>
              {translate('ParivarikParichay.motherName')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userFamilyInfo.userFamilyInfoMotherName}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('ParivarikParichay.motherMayaka')}
            </Text>
            {/* <Text style={styles.detailsText}>
              {' '}
              {
                myProfileData.userFamilyInfo.userFamilyInfoMotherOccupation
                  .occupationTitleHi
              }{' '}
            </Text> */}
            <Text style={styles.textStyle}>
              {translate('ParivarikParichay.brother')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userFamilyInfo.userFamilyInfoNoOfBrother}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('ParivarikParichay.sister')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userFamilyInfo.userFamilyInfoNoOfSister}{' '}
            </Text>
            <Text style={styles.textStyle}>
              {translate('ParivarikParichay.land')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {myProfileData.userFamilyInfo.userFamilyInfoLand.landTitleHi}{' '}
            </Text>
          </View>
          <View>
            <View style={styles.separatorLine} />
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
  profileCreated: {
    marginTop: -15,
    marginHorizontal: 25,
    color: ' $PLACEHOLDER',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailsText: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    color: '$PLACEHOLDER',
    marginLeft: 18,
  },
  heading: {
    color: '$PRIMARY',
    marginTop: 20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  dataContainer: {
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '$PRIMARY',
    padding: 10,
    width: 200,
    height: 60,
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 100,
  },
  pencilIcon: {
    marginHorizontal: 170,
    marginTop: 20,
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
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 10,
  },
  separatorLine: {
    flex: 1,
    backgroundColor: '$PLACEHOLDER',
    height: 1.2,
    marginTop: 19,
  },
  text: {
    color: '$WHITE',
    textAlign: 'center',
    marginTop: 20,
  },
  textStyle: {
    color: '$DARK',
    marginHorizontal: 20,
    marginTop: 15,
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
});

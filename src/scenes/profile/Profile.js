import {Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from '../../translations/configTranslations';
import {useDispatch, useSelector} from 'react-redux';
import {MY_PROFILE_DETAILS} from '../profile/redux/MyProfileAction'
import Loader from '../../components/atoms/buttons/Loader';
import {fetchmyProfileDataStarted} from '../profile/redux/MyProfileReducer';
import {base_URL} from '../../services/httpServices/';
const Profile = ({route}) => {
  const {myProfileData, isFetching} = useSelector(
    state => state.myProfileDetail,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('myprofileDataaa====>>', myProfileData);
    dispatch(fetchmyProfileDataStarted());
    console.log('myprofileDataaa====>>', isFetching);
    dispatch({
      type: MY_PROFILE_DETAILS,
    });
  }, []);

  if (isFetching) {
    return <Loader />;
  } else {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: `${base_URL}${myProfileData.userProfileImage}`}}
            />
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

            <View style={styles.whatsappIcon}>
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
            </View>
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
              <TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>
      {' '}
      {myProfileData.userProfileCreatedBy}{' '}
    </Text> */}
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
              <TouchableOpacity>
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
              <TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>
      {' '}
      {
        myProfileData.userReligiousInfo.userReligiousInfoSubCaste
          .subcasteTitleHi
      }{' '}
    </Text> */}
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
              {translate('Myprofile.Education And Career')}
            </Text>
            <View style={styles.pencilIcon}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/pencilimage.png')}
                  style={styles.pencil}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.textHeading}>
              {translate('Vyaktigatdata.Knowledge')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {/* {
                myProfileData.userEducationInfo.userEducationInfoEducation
                  .educationTitleHi
              } */}
            </Text>
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

          <View>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.heading}>
              {' '}
              {translate('ParivarikParichay.parivarikHeader')}
            </Text>
            <View style={styles.pencilIcon}>
              <TouchableOpacity>
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
        {myProfileData.userFamilyInfo.userFamilyInfoFatherOccupation}{' '}
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
        {myProfileData.userFamilyInfo.userFamilyInfoMotherOccupation.occupationTitleHi}{' '}
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
              {myProfileData.userFamilyInfo.userFamilyInfoLand}{' '}
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
  detailsText: {
    fontSize: 15,
    marginBottom: 5,
    color: '$DARK',
    marginLeft: 18,
    fontWeight: 'bold',
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
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
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
  },
  bottomContainer: {
    flex: 3,
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
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textHeading: {
    color: '$DARK',
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText: {
    color: '$DARK',
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

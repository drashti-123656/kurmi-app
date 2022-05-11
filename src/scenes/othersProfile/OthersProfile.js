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

const OthersProfile = ({route, navigation}) => {
  const {othersProfileData} = useSelector(state => state.othersDetail);
  const {id} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('othersProfileData====>>', othersProfileData);
    dispatch({
      type: OTHERS_PROFILE_DETAILS,
      payload: id,
    });

   
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Image
          style={styles.profileImg}
          source={require('./../../assets/profile.png')}
        />

        <View style={styles.transparentText}>
          <Text style={styles.subNames}>
            {' '}
            {othersProfileData.userFirstName} {othersProfileData.userLastName}{' '}
          </Text>
          <Text style={styles.subNamesDetails}>
            {' '}
            Age - {othersProfileData.userAge},{' '}{' '}
            {othersProfileData.userCity.cityName},{' '}{' '}
            {othersProfileData.userState.name},{' '}{' '}
            {othersProfileData.userCountry.countryName}
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
            <MaterialIcons
              name="email"
              size={30}
              color={EStyleSheet.value('$PRIMARY')}
              style={{marginVertical: 20}}
            />
            <Text style={styles.contactText}> Email </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.headingText}>
            {translate('Vyaktigatdata.Personal information')}
          </Text>
          <View style={styles.subDetailContainer}>
            <Text style={styles.subHeadingText}>
              {translate('register.Name')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userFirstName} {othersProfileData.userLastName}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('register.birthdate')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userDob}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('register.city')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}

             
             {othersProfileData.userCity.cityName}{' '} 

            </Text>
            <Text style={styles.subHeadingText}>
              {translate('register.state')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}

              {othersProfileData.userState.name}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('register.country')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userCountry.countryName}{' '}

             

            </Text>
            <Text style={styles.subHeadingText}>
              {translate('Vyaktigatdata.Marital Status')}{' '}
            </Text>

            

             {/* <Text style={styles.detailsText}> {othersProfileData.userPersonalInfo.userPersonalInfoMaritalStatusId.maritalStatusTitleHi} </Text> */}
            

            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Vyaktigatdata.Height')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userPersonalInfo.userPersonalInfoHeight}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Vyaktigatdata.Knowledge')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userEducationInfo.userEducationInfoEducation
                  .educationTitleHi

              }

             

            </Text>
            <Text style={styles.subHeadingText}>
              {translate('Vyaktigatdata.Job')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userEducationInfo.userEducationInfoOccupation
                  .occupationTitleHi
              }{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Vyaktigatdata.Disability')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userPersonalInfo.userPersonalInfoDisability
              }{' '}
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />

          <Text style={styles.headingText}>
            {translate('Dharmikjankari.Dharmik Jankari')}
          </Text>
          <View style={styles.subDetailContainer}>
            <Text style={styles.subHeadingText}>
              {translate('Dharmikjankari.Caste')}
            </Text>
            <Text style={styles.detailsText}>

             

              {/* {
                othersProfileData.userReligiousInfo.userReligiousInfoGotra
                  .gotraTitleHi
              } */}

            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Dharmikjankari.Native')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userReligiousInfo.userReligiousInfoMotherGotra
              }{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Dharmikjankari.Birthtime')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userReligiousInfo.userReligiousInfoTimeOfBirth
              }{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('Dharmikjankari.Birthplace')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userReligiousInfo
                  .userReligiousInfoPlaceOfBirth
              }{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Dharmikjankari.Zodiacsign')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userReligiousInfo.userReligiousInfoZodiac
                  .zodiacTitleHi
              }{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Dharmikjankari.auspicious')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userReligiousInfo.userReligiousInfoManglik
              }{' '}
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />

          <Text style={styles.headingText}>
            {translate('ParivarikParichay.parivarikHeader')}
          </Text>
          <View style={styles.subDetailContainer}>
            <Text style={styles.subHeadingText}>
              {translate('ParivarikParichay.fatherName')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userFamilyInfo.userFamilyInfoFatherName}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.fatherOccupation')}
            </Text>

           

           
            <Text style={styles.detailsText}>
      
              {' '}
              {/* {
                othersProfileData.userFamilyInfo.userFamilyInfoFatherOccupation
                  .occupationTitleHi
              }{' '} */}

            </Text> 

           
            
            
            

            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.motherName')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userFamilyInfo.userFamilyInfoMotherName}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('ParivarikParichay.motherMayaka')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userFamilyInfo.userFamilyInfoMotherMaika}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.brother')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userFamilyInfo.userFamilyInfoNoOfBrother}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.sister')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userFamilyInfo.userFamilyInfoNoOfSister}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.land')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userFamilyInfo.userFamilyInfoLand}{' '}
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />

          <Text style={styles.headingText}>
            {translate('samPark.samparkheader')}
          </Text>
          <View style={styles.subDetailContainer}>
            <Text style={styles.subHeadingText}>
              {translate('samPark.mobileNo')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userContactInfo.userContactInfoContactNo}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('samPark.whatsAppNo')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userContactInfo.userContactInfoWhatsappNo}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('samPark.presentAdd')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userContactInfo.userContactInfoPresentAddress
              }{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('samPark.permanentAdd')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {
                othersProfileData.userContactInfo
                  .userContactInfoPermanentAddress
              }{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.shortlist}>
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
};

export default OthersProfile;

const styles = StyleSheet.create({
  profileImg: {
    height: '20%',
    width: '100%',
  },
  contactContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    height: '3.5%',
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
    marginBottom: '120%',
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
    marginLeft: 5,
    fontWeight: '600',
  },
  detailsText: {
    fontSize: 15,
    marginBottom: 10,
    color: '#666666',
    marginLeft: 5,
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
    height: '3.5%',
  },
  subNamesDetails: {
    color: 'white',
  },
});

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from './../../translations/configTranslations';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { fetchothersProfileData } from './redux/NewsfeedReducer';
import { OTHERS_PROFILE_DETAILS } from './redux/NewsfeedAction';

const OthersProfile = ({route, navigation}) => {
  const othersProfileData = useSelector(state => state.newsfeed);
  const {id} = route.params;
  const dispatch = useDispatch();

  // useEffect(() => {
    
  //   dispatch({
  //     type: OTHERS_PROFILE_DETAILS,
  //     id,
  //   });
  // }, []);


  return (
    <View style={{flex: 1}}>
      <RootScreen scrollable={true}>
        <Image
          style={styles.profileImg}
          source={require('./../../assets/profile.png')}
        />
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
          <View style={styles.subDetailContainer}>
            <Text style={styles.headingText}>
              {translate('Vyaktigatdata.Personal information')}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('register.Name')}{' '}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {othersProfileData.userFirstName}{' '}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('register.birthdate')}{' '}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {translate('register.city')}{' '}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {translate('register.state')}{' '}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {translate('Vyaktigatdata.Marital Status')}{' '}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Vyaktigatdata.Height')}{' '}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Vyaktigatdata.Knowledge')}{' '}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {translate('Vyaktigatdata.Job')}{' '}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Vyaktigatdata.Disability')}{' '}
            </Text>
            <Text style={styles.detailsText}> single </Text>
          </View>

          <View style={styles.subDetailContainer}>
            <Text style={styles.headingText}>
              {translate('Dharmikjankari.Dharmik Jankari')}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('Dharmikjankari.Caste')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Dharmikjankari.Native')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Dharmikjankari.Birthtime')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {translate('Dharmikjankari.Birthplace')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Dharmikjankari.Zodiacsign')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('Dharmikjankari.auspicious')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
          </View>
          <View style={styles.subDetailContainer}>
            <Text style={styles.headingText}>
              {translate('ParivarikParichay.parivarikHeader')}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('ParivarikParichay.fatherName')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.fatherOccupation')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.motherName')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {translate('ParivarikParichay.motherMayaka')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.brother')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.sister')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('ParivarikParichay.land')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
          </View>

          <View style={styles.subDetailContainer}>
            <Text style={styles.headingText}>
              {translate('samPark.samparkheader')}
            </Text>
            <Text style={styles.subHeadingText}>
              {translate('samPark.mobileNo')}
            </Text>
            <Text style={styles.detailsText}>
              {' '}
              {/* {newsFeedData.userContactInfo.userContactInfoContactNo} */}
            </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('samPark.whatsAppNo')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {' '}
              {translate('samPark.presentAdd')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
            <Text style={styles.subHeadingText}>
              {translate('samPark.permanentAdd')}
            </Text>
            <Text style={styles.detailsText}> single </Text>
          </View>
        </View>
      </RootScreen>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.bottmIcons}>
          <Icon name="star-o" size={30} color="white" style={{paddingLeft:15}}/>
          <Text style={styles.bottomText}> Shortlist </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottmIcons}>
          <Icon name="heart-o" size={30} color="white" style={{paddingLeft:25}} />
          <Text style={styles.bottomText}> Send Interest </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottmIcons}>
          <Entypo name="cross" size={35} color="white" style={{paddingLeft:25}} />
          <Text style={styles.bottomText}> Not Intrested </Text>
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
    height: '3%',
    justifyContent: 'space-evenly',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

    marginVertical: 10,
  },
  subHeadingText: {
    color: 'black',
    fontSize: 15,

    fontWeight: '600',
  },
  detailsText: {
    fontSize: 15,
    marginBottom: 10,
    color: 'red',
  },
  subDetailContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 30,
    marginVertical: 20,
  },
  bottomContainer: {
   height : '8%',
    backgroundColor: '#c3773b',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottmIcons: {
    flexDirection: 'column',
    marginVertical : 10,
    justifyContent: 'space-evenly',
    paddingLeft : 20,
  },
  bottomText : {
    color: 'white',
    
  }
});

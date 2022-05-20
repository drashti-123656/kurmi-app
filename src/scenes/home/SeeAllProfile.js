import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {base_URL} from '../../services/httpServices/';
import Card from '../../components/molecule/card/Card';


const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const SeeAllProfile = ({navigation}) => {
  const {newsFeedData, isFetching} = useSelector(state => state.newsfeed);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />
  };

  const renderLoader = () => (isFetching ? <Loader /> : null);

  return (
    <RootScreen scrollable={true}>
      <View style={styles.container}>
        <FlatList
          data={newsFeedData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialNumToRender={10}
          ListFooterComponent={renderLoader}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </RootScreen>
  );
};

export default SeeAllProfile;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.2,
    backgroundColor: 'red',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 20,
  },
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 20,
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
    fontSize: 20,
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
  footerContainer: {
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
  },
  titleTextNext: {
    color: '#666666',
  },
  profileContainer: {
    marginHorizontal: 2,
  },
  profileImageContainer: {
    flexDirection: 'row',
  },
  profileImg: {
    width: wp('25'),
    height: hp('13'),
    borderRadius: 100,
    marginTop: 10,
  },

  profileText: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  profileIntroText: {
    color: '#666666',
    textAlign: 'center',
    fontSize: 13,

    textAlign: 'center',

    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  footerContainer: {
    backgroundColor: 'white',
  },
  footerTextseeAll: {
    color: 'red',
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  footerTextContainer: {
    flexDirection: 'column',
    //alignSelf : 'flex-start'
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    alignSelf: 'center',
    marginBottom: 5,
  },
  bottmIcons: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  bottomText: {
    color: 'black',
  },
  mainContainer: {
    flexDirection: 'column',
    height: hp('20'),
    width: wp('90'),
    //marginTop: 30,
    paddingLeft: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 15,
    // flexDirection: 'row',
  },
});

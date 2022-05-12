import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DIVORCED_PROFILE} from './redux/divorcedAction';
import Card from '../../components/molecule/card/Card';

const DivorcedProfile = ({navigation}) => {
  const {divorcedData} = useSelector(state => state.divorcedProfile);
  
  const dispatch = useDispatch();

  const payload = {
    page: 1,
    pageSIze: 10,
    order: {
      column: "id",
      type: 'desc',
    },
  };

  useEffect(() => {
    dispatch({
      type: DIVORCED_PROFILE,
      payload,
    });
  });


  const renderItem = ({item}) => {
    return (
      <Card navigation={navigation} item={item} />
    );
  };
  
  return (
    <RootScreen scrollable={true}>
      <View style={styles.container}>
      <FlatList
        data={divorcedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={10}
      />
      </View>
    </RootScreen>
  );
};

export default DivorcedProfile;

const styles = StyleSheet.create({
  container : {
    marginBottom : 20,
    justifyContent : 'center',
    marginTop : 20, 
   },
});

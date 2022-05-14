import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import {DISABILITY_PROFILE} from './redux/disabilityAction';
import { fetchDisabilityDataStarted } from './redux/disabilityReducer';
import Loader from '../../components/atoms/buttons/Loader';

const DisabilityProfile = ({navigation}) => {
  const {disabilityData, isFetching} = useSelector(state => state.disabilityProfile);

  const dispatch = useDispatch();

  const payload = {
    page: 1,
    pageSIze: 10,
    order: {
      column: 'id',
      type: 'desc',
    },
  };

  useEffect(() => {
    dispatch(fetchDisabilityDataStarted())
    dispatch({
      type: DISABILITY_PROFILE,
      payload,
    });
  }, []);

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  const renderLoader = () => 
    isFetching ? <Loader /> : null;

  return (
    <RootScreen scrollable={true}>
      <View style={styles.container}>
        <FlatList
          data={disabilityData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          initialNumToRender={10}
        />
      </View>
    </RootScreen>
  );
};

export default DisabilityProfile;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
});

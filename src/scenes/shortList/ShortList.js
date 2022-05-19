import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl
} from 'react-native';

import React, {useEffect, useState} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import { SHORT_LISTED_USERS } from './redux/ShortListAction';
import Loader from '../../components/atoms/buttons/Loader';
import { fetchShortlistedUserDataStarted } from './redux/ShortListReducer';


const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const ShortList = ({navigation}) => {
  const {shortListedUsersData, isfatching} = useSelector(state => state.shortListProfiles);
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
    console.log('happyyy===>>',shortListedUsersData)
    dispatch(fetchShortlistedUserDataStarted());
    dispatch({
      type: SHORT_LISTED_USERS,
      payload,
    });
  }, []);

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  const renderLoader = () => (isfatching ? <Loader /> : null);

  return (
    <RootScreen scrollable={true}>
    {console.log('shortListedUsersData', shortListedUsersData)}
      <View style={styles.container}>
        <FlatList
          data={shortListedUsersData.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          initialNumToRender={10}
        />
      </View>
    </RootScreen>
  );
};

export default ShortList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
});

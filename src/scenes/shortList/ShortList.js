import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import {SHORT_LISTED_USERS} from './redux/ShortListAction';
import Loader from '../../components/atoms/buttons/Loader';
import {fetchShortlistedUserDataStarted} from './redux/ShortListReducer';
import {PAGE_SIZE} from '../../utils/constants/appConstants';

const ShortList = ({navigation}) => {
  const dispatch = useDispatch();
  const {shortListedUsersData, isFetching, isPaginationRequired, pageIndex} =
    useSelector(state => state.shortListProfiles);

  const _fetchProfiles = pageNumber => {
    const payload = {
      page: pageNumber,
      pageSIze: PAGE_SIZE,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: SHORT_LISTED_USERS,
      payload,
    });
  };

  useEffect(() => {
    _fetchProfiles(1);
  }, []);

  const _refreshOnPull = () => {
    _fetchProfiles(1);
  };

  const _paginateUsersProfiles = () => {
    if (isPaginationRequired) {
      _fetchProfiles(pageIndex + 1);
    }
  };

  const _renderEmptyMsg = () => {
    return (
      <View style={styles.Container}>
        <Text style={styles.textStyle}>
          {' '}
          आपने अभी तक किसी भी प्रोफाइल को शॉर्टलिस्ट नहीं किया है
        </Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  const renderLoader = () => (isFetching ? <Loader /> : null);

  return (
    <RootScreen>
      <FlatList
        data={shortListedUsersData}
        renderItem={renderItem}
        keyExtractor={item => item.userId}
        ListFooterComponent={renderLoader}
        ListEmptyComponent={_renderEmptyMsg}
        initialNumToRender={10}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={_refreshOnPull} />
        }
        onEndReachedThreshold={0.5}
        onEndReached={_paginateUsersProfiles}
      />
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
  Container: {
    justifyContent: 'center',

    marginTop: '80%',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
  },
});

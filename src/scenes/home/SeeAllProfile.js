import {FlatList, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../../components/molecule/card/Card';
import {useDispatch, useSelector} from 'react-redux';
import {FETCH_SEARCH_PROFILE} from './redux/NewsfeedAction';
import Loader from '../../components/atoms/buttons/Loader';
import {PAGE_SIZE} from '../../utils/constants/appConstants';

const SeeAllProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const {newsFeedData, isFetching, isPaginationRequired, pageIndex} =
    useSelector(state => state.newsfeed);

  const _fetchProfiles = pageNumber => {
    const payload = {
      filter: {
        age: {
          min: 18,
          max: 40,
        },
      },
      page: pageNumber,
      pageSIze: PAGE_SIZE,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: FETCH_SEARCH_PROFILE,
      payload,
    });
  };

  const _refreshOnPull = () => {
    _fetchProfiles(1);
  };

  const _paginateUsersProfiles = () => {
    if (isPaginationRequired) {
      _fetchProfiles(pageIndex + 1);
    }
  };

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  const renderLoader = () => (isFetching ? <Loader /> : null);

  return (
    <RootScreen>
      <FlatList
        data={newsFeedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={_refreshOnPull} />
        }
        onEndReachedThreshold={0.5}
        onEndReached={_paginateUsersProfiles}
      />
    </RootScreen>
  );
};

export default SeeAllProfile;

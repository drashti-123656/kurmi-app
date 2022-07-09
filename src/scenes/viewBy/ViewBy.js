import {FlatList, RefreshControl, Text} from 'react-native';
import React, {useEffect} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import Loader from '../../components/atoms/buttons/Loader';
import {PAGE_SIZE} from '../../utils/constants/appConstants';
import {VIEW_BY_USERS} from './redux/ViewByAction';
const ViewBy = ({navigation}) => {
  const {viewByUsersData, isfetching, isPaginationRequired, pageIndex} =
    useSelector(state => state.viewByProfiles);
  const dispatch = useDispatch();

  const _fetchProfiles = pageNumber => {
    const payload = {
      page: pageNumber,
      pageSIze: PAGE_SIZE,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    console.log('payload=============>>>', payload);
    dispatch({
      type: VIEW_BY_USERS,
      payload,
    });
  };

  useEffect(() => {
    _fetchProfiles(1);
  }, []);

  const __refreshOnPull = () => {
    _fetchProfiles(1);
  };

  const _paginateUSersProfiles = () => {
    if (isPaginationRequired) {
      _fetchProfiles(pageIndex + 1);
    }
  };

  const _renderEmptyMsg = () => {
    return <Text> no one has seen your profile </Text>;
  };

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  const renderLoader = () => (isfetching ? <Loader /> : null);

  return (
    <RootScreen>
      <FlatList
        data={viewByUsersData.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        ListEmptyComponent={_renderEmptyMsg}
        initialNumToRender={10}
        refreshControl={
          <RefreshControl refreshing={isfetching} onRefresh={__refreshOnPull} />
        }
        onEndReachedThreshold={0.5}
        onEndReached={_paginateUSersProfiles}
      />
    </RootScreen>
  );
};

export default ViewBy;

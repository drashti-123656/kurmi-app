import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';

import React, {useEffect} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import {VIEW_BY_USERS} from '../../scenes/viewBy/redux/ViewByAction';
import Loader from '../../components/atoms/buttons/Loader';
import {
  fetchViewByUserDataStarted,
  fetchViewByDataSuccess,
} from '../../scenes/viewBy/redux/ViewByReducer';
import {PAGE_SIZE} from '../../utils/constants/appConstants';
import NoResultFound from '../../components/molecule/NoResultFound';
// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };
const ViewBy = ({navigation}) => {
  const {viewByUsersData, isfetching, isPaginationRequired, page} = useSelector(
    state => state.viewByProfiles,
  );
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
    dispatch(fetchViewByUserDataStarted());
    dispatch({
      type: VIEW_BY_USERS,
      payload,
    });
  };

  const _refreshOnPull = () => {
    _fetchProfiles(1);
  };
  const _paginateUsersProfiles = () => {
    if (isPaginationRequired) {
      _fetchProfiles(page + 1);
    }
  };

  const payload = {
    page: 1,
    pageSIze: 2,
    order: {
      column: 'id',
      type: 'desc',
    },
  };
  useEffect(() => {
    console.log('happyyy===>>', viewByUsersData);
    dispatch(fetchViewByUserDataStarted());
    dispatch({
      type: VIEW_BY_USERS,
      payload,
    });
  }, []);

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };
  const _handleEmptyComponentRender = () =>
    isfetching && viewByUsersData === 0 ? <Loader /> : <NoResultFound />;
  const renderLoader = () =>
    isfetching && viewByUsersData !== 0 ? <Loader /> : null;

  return (
    <RootScreen scrollable={true}>
      {console.log('viewbyUsersData', viewByUsersData)}
      <View style={styles.container}>
        <FlatList
          data={viewByUsersData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          ListEmptyComponent={_handleEmptyComponentRender}
          initialNumToRender={10}
          refreshControl={
            <RefreshControl
              refreshing={isfetching}
              onRefresh={_refreshOnPull}
            />
          }
          onEndReachedThreshold={0.5}
          onEndReached={_paginateUsersProfiles}
        />
      </View>
    </RootScreen>
  );
};

export default ViewBy;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
});

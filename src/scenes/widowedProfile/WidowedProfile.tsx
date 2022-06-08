import {FlatList, RefreshControl} from 'react-native';
import React from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import {WIDOWED_PROFILE} from './redux/widowedAction';
import Loader from '../../components/atoms/buttons/Loader';
import { PAGE_SIZE } from '../../utils/constants/appConstants';

const WidowedProfile = ({navigation}) => {
  const {widowedData, isFetching, isPaginationRequired, pageIndex} = useSelector(state => state.widowedProfile);
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
    dispatch({
      type: WIDOWED_PROFILE,
      payload,
    });
  };

  const __refreshOnPull = () => {
    _fetchProfiles(1);
  }

  const _paginateUSersProfiles = () => {
    if(isPaginationRequired) {
      _fetchProfiles(pageIndex + 1)
    }
  }

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  const renderLoader = () => (isFetching ? <Loader /> : null);

  return (
    <RootScreen>
        <FlatList
          data={widowedData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          initialNumToRender={10}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={__refreshOnPull} />
          }
          onEndReachedThreshold={0.5}
          onEndReached={_paginateUSersProfiles}
        />
    </RootScreen>
  );
};

export default WidowedProfile;


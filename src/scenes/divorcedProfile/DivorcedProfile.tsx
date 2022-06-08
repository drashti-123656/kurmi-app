import {FlatList, RefreshControl} from 'react-native';
import React from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import {DIVORCED_PROFILE} from './redux/divorcedAction';
import Card from '../../components/molecule/card/Card';
import Loader from '../../components/atoms/buttons/Loader';
import {PAGE_SIZE} from '../../utils/constants/appConstants';

const DivorcedProfile = ({navigation}) => {
  const {divorcedData, isFetching, isPaginationRequired, pageIndex} =
    useSelector(state => state.divorcedProfile);
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
      type: DIVORCED_PROFILE,
      payload,
    });
  };

  const __refreshOnPull = () => {
    _fetchProfiles(1);
  };

  const _paginateUSersProfiles = () => {
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
        data={divorcedData}
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

export default DivorcedProfile;

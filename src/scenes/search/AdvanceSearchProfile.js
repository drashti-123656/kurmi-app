import {Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import Loader from '../../components/atoms/buttons/Loader';
import EStyleSheet from 'react-native-extended-stylesheet';
import {PAGE_SIZE} from '../../utils/constants/appConstants';
import {ADVANCED_SEARCH_USER} from './redux/AdvanceSearchAction';
const AdvanceSearchProfile = ({navigation, route}) => {
  const {advanceserachData, isFetching, isPaginationRequired, pageIndex} =
    useSelector(state => state.advanceSerach);
  const dispatch = useDispatch();

  const _fetchProfiles = ({pageNumber}) => {
    const payload = {
      filter: {
        gender: route.params.paramKey.gender,
        height: {
          min: route.params.paramKey.height.min,
          max: route.params.paramKey.height.max,
        },
        manglik: route.params.paramKey.manglik,
        country: route.params.paramKey.country,
        state: route.params.paramKey.state,
        city: route.params.paramKey.city,
        education: route.params.paramKey.education,
        occupation: route.params.paramKey.occupation,
      },
      page: pageNumber,
      pageSIze: PAGE_SIZE,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: ADVANCED_SEARCH_USER,
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
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.text}> No Record Found </Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  const renderLoader = () => (isFetching ? <Loader /> : null);
  return (
    <RootScreen>
      <View style={styles.container}>
        <FlatList
          data={advanceserachData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          initialNumToRender={10}
          ListEmptyComponent={_renderEmptyMsg}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={__refreshOnPull}
            />
          }
          onEndReachedThreshold={0.5}
          onEndReached={_paginateUSersProfiles}
        />
      </View>
    </RootScreen>
  );
};

export default AdvanceSearchProfile;
const styles = EStyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
  textStyle: {
    fontWeight: 'bold',
    color: '$WHITE',
    marginHorizontal: 120,
    marginTop: 250,
    fontSize: 20,
  },
  titleContainer: {
    justifyContent: 'center',

    marginTop: '60%',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});

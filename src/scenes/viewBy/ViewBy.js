import {StyleSheet, View, FlatList} from 'react-native';

import React, {useEffect} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import {VIEW_BY_USERS} from '../../scenes/viewBy/redux/ViewByAction';
import Loader from '../../components/atoms/buttons/Loader';
import {fetchViewByUserDataStarted} from '../../scenes/viewBy/redux/ViewByReducer';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const ViewBy = ({navigation}) => {
  const {viewByUsersData, isfetching} = useSelector(
    state => state.viewByProfiles,
  );
  const dispatch = useDispatch();

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

  const renderLoader = () => (isfetching ? <Loader /> : null);

  return (
    <RootScreen scrollable={true}>
      {console.log('viewbyUsersData', viewByUsersData)}
      <View style={styles.container}>
        <FlatList
          data={viewByUsersData.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          initialNumToRender={10}
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

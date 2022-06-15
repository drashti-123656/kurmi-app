import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import Loader from '../../components/atoms/buttons/Loader';
import EStyleSheet from 'react-native-extended-stylesheet';
const AdvanceSearchProfile = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const {advanceserachData, isFetching} = useSelector(
    state => state.advanceSerach,
  );
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  const renderLoader = () => (isFetching ? <Loader /> : null);

  return (
    <RootScreen>
      {advanceserachData ? (
        <View style={styles.container}>
          <FlatList
            data={advanceserachData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={renderLoader}
            initialNumToRender={10}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      ) : (
        <Text style={styles.textStyle}>No record found</Text>
      )}
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
    marginHorizontal: 85,
    marginTop: 250,
    fontSize: 30,
  },
});

import {
    StyleSheet,
    Text,
    View,
    FlatList,
    RefreshControl,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import RootScreen from '../../components/molecule/rootScreen/RootScreen';
  import {useDispatch, useSelector} from 'react-redux';
  import Card from '../../components/molecule/card/Card';
import { WIDOWER_PROFILE } from './redux/widowerAction';
import Loader from '../../components/atoms/buttons/Loader';
  
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

  const WidowerProfile = ({navigation}) => {
    const {widowerData, isFetching} = useSelector(state => state.widowerProfile);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, []);

    const payload = {
        page: 1,
        pageSIze: 10,
        order: {
            column: "id",
            type: "desc"
        }
    };
  
    useEffect(() => {
      dispatch({
        type: WIDOWER_PROFILE,
        payload,
      });
    });
  
  
    const renderItem = ({item}) => {
      return (
        <Card navigation={navigation} item={item} />
      );
    };
    
    const renderLoader = () => (isFetching ? <Loader /> : null);

    return (
      <RootScreen scrollable={true}>
        <View style={styles.container}>
        <FlatList
          data={widowerData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialNumToRender={10}
          ListFooterComponent={renderLoader}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
        </View>
      </RootScreen>
    );
  };
  
  export default WidowerProfile;
  
  const styles = StyleSheet.create({
    container : {
      marginBottom : 20,
      justifyContent : 'center',
      marginTop : 20, 
     },
  });
  
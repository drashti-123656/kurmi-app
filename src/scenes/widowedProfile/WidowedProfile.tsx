import {
    StyleSheet,
    Text,
    View,
    FlatList,
  } from 'react-native';
  import React, {useEffect} from 'react';
  import RootScreen from '../../components/molecule/rootScreen/RootScreen';
  import {useDispatch, useSelector} from 'react-redux';
  import Card from '../../components/molecule/card/Card';
import { WIDOWED_PROFILE } from './redux/widowedAction';
import Loader from '../../components/atoms/buttons/Loader';
import { fetchWidowedDataStarted } from './redux/widowedReducer';
  
  const WidowedProfile = ({navigation}) => {
    const {widowedData, isFetching} = useSelector(state => state.widowedProfile);
    
    const dispatch = useDispatch();
  
    const payload = {
        page: 1,
        pageSIze: 10,
        order: {
            column: "id",
            type: "desc"
        }
    };
  
    useEffect(() => {
      dispatch(fetchWidowedDataStarted());
      dispatch({
        type: WIDOWED_PROFILE,
        payload,
      });
    }, []);
  
  
    const renderItem = ({item}) => {
      return (
        <Card navigation={navigation} item={item} />
      );
    };
    
    const renderLoader = () => 
    isFetching ? <Loader /> : null;

    return (
      <RootScreen scrollable={true}>
        <View style={styles.container}>
        <FlatList
          data={widowedData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          initialNumToRender={10}
        />
        </View>
      </RootScreen>
    );
  };
  
  export default WidowedProfile;
  
  const styles = StyleSheet.create({
    container : {
      marginBottom : 20,
      justifyContent : 'center',
      marginTop : 20, 
     },
  });
  
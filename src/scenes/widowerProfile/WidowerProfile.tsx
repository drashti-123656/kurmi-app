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
import { WIDOWER_PROFILE } from './redux/widowerAction';
  
  const WidowerProfile = ({navigation}) => {
    const {widowerData} = useSelector(state => state.widowerProfile);
    
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
    
    return (
      <RootScreen scrollable={true}>
        <View style={styles.container}>
        <FlatList
          data={widowerData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialNumToRender={10}
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
  
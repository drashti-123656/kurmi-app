import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/molecule/card/Card';
import {DISABILITY_PROFILE} from './redux/disabilityAction';

const DisabilityProfile = ({navigation}) => {
  const {disabilityData} = useSelector(state => state.disabilityProfile);

  const dispatch = useDispatch();

  const payload = {
    page: 1,
    pageSIze: 10,
    order: {
      column: 'id',
      type: 'desc',
    },
  };

  useEffect(() => {
    dispatch({
      type: DISABILITY_PROFILE,
      payload,
    });
  });

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  return (
    <RootScreen scrollable={true}>
      <View style={styles.container}>
        <FlatList
          data={disabilityData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialNumToRender={10}
        />
      </View>
    </RootScreen>
  );
};

export default DisabilityProfile;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
});
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

const ShortList = () => {

    const {shortListData} = useSelector(state => state.shortListProfiles);

  const renderItem = ({item}) => {
    return <Card navigation={navigation} item={item} />;
  };

  return (
    <RootScreen scrollable={true}>
      <View style={styles.container}>
        <FlatList
          data={shortListData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialNumToRender={10}
        />
      </View>
    </RootScreen>
  );
};

export default ShortList;

const styles = StyleSheet.create({});

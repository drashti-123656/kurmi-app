import React from 'react';
import {Text, View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const NoResultFound = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/not-found.png')}
        style={styles.Image}
        tintColor={EStyleSheet.value('$PRIMARY')}
      />
      <Text style={styles.h1}>No results found</Text>
    </View>
  );
};

export default NoResultFound;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '$TEXT',
  },
  Image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
});

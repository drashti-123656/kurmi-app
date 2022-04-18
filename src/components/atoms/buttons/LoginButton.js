import {StyleSheet, Text, View,ActivityIndicator,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const LoginButton = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DC1C28',
    height: 50,
    borderRadius: 10,
    marginTop: heightPercentageToDP('1'),
    marginBottom: heightPercentageToDP('2'),
    marginHorizontal: widthPercentageToDP('8'),
  },
  title: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
});

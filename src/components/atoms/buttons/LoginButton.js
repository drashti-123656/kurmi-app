import {StyleSheet, Text, View,ActivityIndicator,TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const LoginButton = ({title, onPress, loading}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator  size={30} color={'white'} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};




export default LoginButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c3773b',
    height: 50,
    borderRadius: 10,
    marginTop: heightPercentageToDP('2'),
    marginBottom: heightPercentageToDP('2'),
    marginHorizontal: widthPercentageToDP('8'),
    justifyContent: 'center',
    alignItems : 'center'
  },
  title: {
    textAlign: 'center',
    fontWeight: '400',
   
    fontSize: 20,
    color: 'white',
  },
  
});

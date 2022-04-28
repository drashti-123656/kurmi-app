import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ExtendedTextInput = ({onChangeText, onBlur, value, placeholder,keyboardType}) => {
  return (
    <View style={styles.textinput}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#666666'}
        keyboardType={keyboardType}
      />

      
    </View>
  );
};

export default ExtendedTextInput;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
   
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height: hp(7),
    color: 'black',
  },
  input_img: {
    height: hp('7'),
    paddingRight: 30,
    resizeMode: 'center',
    width: wp('7'),
  },
  input : {
    flex: 1,
    color: 'black',
  }
});

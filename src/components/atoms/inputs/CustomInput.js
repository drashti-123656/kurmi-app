import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CustomInput = ({
  onChangeText,
  value,
  placeholder,
  editable,
  keyboardType,
  multiline,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        editable={editable}
        keyboardType={keyboardType}
        multiline={multiline}
        placeholderTextColor="#666666"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height: hp(15),
    color: 'black',
  },
  input: {
    flex: 1,
    color: 'black',
    textAlignVertical: 'top',
  },
});

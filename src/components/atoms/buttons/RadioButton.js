import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const RadioButton = ({value, title, onChangeValue}) => {
  const handleOnChange = () => {
    onChangeValue(!value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnChange}>
        <View style={styles.border}>
          {value ? <View style={styles.dot}></View> : null}
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  border: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 30,
    height: 25,
    marginTop: 10,
    width: 25,
  },
  dot: {
    alignSelf: 'center',
    marginTop: 4,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'white',
    width: 15,
  },
  title: {
    color: 'white',
    marginTop: 12,
    fontSize: 15,
    marginLeft: 20,
  },
});

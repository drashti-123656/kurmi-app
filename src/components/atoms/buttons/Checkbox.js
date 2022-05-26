import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {TouchableOpacity, Text, EStyleSheet} from 'react-native';

const CheckBox = ({
  selected,
  onPress,
  style,
  size = 30,
  color = '#FFFFFF',
  text = '',
  ...props
}) => (
  <TouchableOpacity
    style={[styles.checkBox, style]}
    onPress={onPress}
    {...props}>
    <Icon
      size={size}
      color={color}
      name={selected ? 'check-box' : 'check-box-outline-blank'}
    />

    <Text style={styles.textStyle}> {text} </Text>
  </TouchableOpacity>
);

export default CheckBox;

const styles = EStyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
  textStyle: {
    color: '$WHITE',
  },
});

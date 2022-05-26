import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

type TextExtendedProps = {
  bold?: boolean;
  semiBold?: boolean;
  size?: number;
  color?: string;
  style?: TextStyle;
  numberOfLines?: number;
  children: React.ReactNode;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
};

const TextExtended: React.FC<TextExtendedProps> = ({
  bold,
  size,
  color,
  style,
  numberOfLines,
  children,
  ellipsizeMode,
}) => {
  return (
    <Text
      style={EStyleSheet.flatten([
        {
          color: color ? color : EStyleSheet.value('$BLACK'),
          fontSize: size,
          fontWeight: bold ? 'bold' : 'normal',
        },
        styles.text,
        style,
      ])}
      numberOfLines={numberOfLines ? numberOfLines : 0}
      ellipsizeMode={ellipsizeMode ? ellipsizeMode : 'tail'}>
      {children}
    </Text>
  );
};

export default TextExtended;

const styles = StyleSheet.create({
  text: {},
});

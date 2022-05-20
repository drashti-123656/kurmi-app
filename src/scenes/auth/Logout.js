import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';

const Logout = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={EStyleSheet.value('$PRIMARY')} />
    </View>
  );
};

export default Logout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icons: {
        width: 40,
        height: 40,
      },
});
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const OthersProfile = () => {
  return (
    <View scrollable={true} style={{flex:1}}>
      <Image
        style={styles.profileImg}
        source={require('./../../assets/profile.png')}
      />
      <View style={styles.contactContainer}>
          <Text style={styles.contactText}> Call Now </Text>
          <Text> Email </Text>
      </View>
    </View>
  );
};

export default OthersProfile;

const styles = StyleSheet.create({
    profileImg : {
        height : '50%',
        width:  '100%'
    },
    contactContainer : {
        flexDirection: 'row',
        backgroundColor : 'white',
   
    },
    contactText : {

    }
});

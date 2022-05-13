import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {Formik} from 'formik';

import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import translate from './../../translations/configTranslations';
import { WhatsappSchema } from '../../utils/schema/whatsappSchema';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import {LOG_USER} from './redux/authActions';
import {useDispatch} from 'react-redux';
import LoginButton from '../../components/atoms/buttons/LoginButton';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Whatsapp = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handlelogUser = values => {
    const payload = {
      visitorName: values.name,
      visitorMobileNo: values.whatsappno,
      visitorDeviceInfo: 'apple',
    };
    dispatch({
      type: LOG_USER,
      payload,
    });
    setLoading(true);

  };

  return (
    <RootScreen scrollable={true}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Text style={styles.note}>{translate('whatsapp.Note')}</Text>
      <Formik
        initialValues={{
          name: '',
          whatsappno: '',
        }}
        validationSchema={WhatsappSchema}
        onSubmit={values => handlelogUser(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formikContainer}>
            <ExtendedTextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              
              value={values.name}
              placeholder={translate('whatsapp.name')}
              placeholderTextColor={'#666666'}
            />
            {errors.name && touched.name ? (
              <Text style={styles.error}>{errors.name}</Text>
            ) : null}
            <ExtendedTextInput
              onChangeText={handleChange('whatsappno')}
              onBlur={handleBlur('whatsappno')}
              value={values.whatsappno}
            
              maxLength={10}
              keyboardType = 'numeric'
              placeholder={translate('whatsapp.phoneno')}
              placeholderTextColor={'#666666'}
            />
            {errors.whatsappno && touched.whatsappno ? (
              <Text style={styles.error}>{errors.whatsappno}</Text>
            ) : null}

            <LoginButton
              title={translate('whatsapp.Continue')}
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>

      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footer_text}>{translate('genral.webLink')}</Text>
      </TouchableOpacity>
    </RootScreen>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    marginTop: '40%',
    alignSelf: 'center',
  },
  note: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#DC1C28',
    height: 50,
    borderRadius: 10,
    marginTop: heightPercentageToDP('1'),
    marginBottom: heightPercentageToDP('2'),
    marginHorizontal: widthPercentageToDP('8'),
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  footer: {
    marginTop: heightPercentageToDP('15'),
  },
  footer_text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    color: 'white',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
  },
});

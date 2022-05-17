import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';

import {Formik} from 'formik';
import translate from './../../translations/configTranslations';
import ExtendedTextInput from './../../components/atoms/inputs/ExtendedTextInput';
import LoginButton from '../../components/atoms/buttons/LoginButton';
import {contactUsValidationSchema} from '../../utils/schema/contactUsSchema';
import {useDispatch} from 'react-redux';
import {CONTACT_USER} from './redux/contactAction';
import CustomInput from '../../components/atoms/inputs/CustomInput';

const ContactUs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleContactUser = values => {
    const payload = {
      name: values.name,
      mobileNumber: values.mobileNo,
      message: values.message,
    };
    dispatch({
      type: CONTACT_USER,
      payload,
    });
    setLoading(true);
  };

  return (
    <RootScreen scrollable={true}>
      <Text style={styles.title}> {translate('ContactUs.heading')}</Text>
      <Formik
        initialValues={{name: '', mobileNo: '', message: ''}}
        validationSchema={contactUsValidationSchema}
        onSubmit={values => handleContactUser(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <ExtendedTextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.textinput}
              placeholder={translate('ContactUs.Name')}
              placeholderTextColor={'#666666'}
            />
            {errors.name && touched.name ? (
              <Text style={styles.error}>{errors.name}</Text>
            ) : null}
            <ExtendedTextInput
              onChangeText={handleChange('mobileNo')}
              onBlur={handleBlur('mobileNo')}
              value={values.mobileNo}
              keyboardType="numeric"
              style={styles.textinput}
              placeholder={translate('ContactUs.MobileNo')}
              placeholderTextColor={'#666666'}
            />
            {errors.mobileNo && touched.mobileNo ? (
              <Text style={styles.error}>{errors.mobileNo}</Text>
            ) : null}

            <CustomInput
              onChangeText={handleChange('message')}
              value={values.message}
              placeholder={translate('ContactUs.message')}
              editable={true}
              multiline={true}
              height={150}
            />

            {errors.message && touched.message ? (
              <Text style={styles.error}>{errors.message}</Text>
            ) : null}

            <LoginButton
              title={translate('ContactUs.Submit')}
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>

      <View style={styles.footer}>
        <Text style={styles.footer_text}>
          {translate('ContactUs.contactToUs')}
        </Text>
        <View style={styles.info}>
          <Image
            style={styles.info_img}
            source={require('../../assets/phoneCall.png')}
          />
          <Text style={styles.info_text}>{translate('genral.phoneNo')}</Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.info_img}
            source={require('../../assets/message.png')}
          />
          <Text style={styles.info_text}>{translate('genral.email')}</Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.info_img}
            source={require('../../assets/whatsapp.png')}
          />
          <Text style={styles.info_text}>{translate('genral.whatsappNo')}</Text>
        </View>
      </View>
    </RootScreen>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  bg_img: {
    flex: 1,
  },
  title: {
    marginTop: 25,
    marginBottom: 60,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#ffffff',
  },
  input_view: {
    flex: 1,
  },
  textinput: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 20,
    height: hp(8),
    color: 'black',
  },
  textinput_msg: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 20,
    textAlignVertical: 'top',
    color: 'black',
  },
  button: {
    backgroundColor: '#DC1C28',
    height: hp(7),
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 10,
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  footer: {
    backgroundColor: '#c3773b',
    marginTop: 60,
    marginHorizontal: 30,
    borderRadius: 10,
    height: hp(15),
  },
  footer_text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  info: {
    flexDirection: 'row',
  },
  info_img: {
    marginHorizontal: 20,
    height: hp(2.5),
    width: wp(5),
  },
  info_text: {
    color: 'white',
    fontWeight: '500',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
});

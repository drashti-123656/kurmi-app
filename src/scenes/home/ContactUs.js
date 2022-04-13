import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import translate from './../../translations/configTranslations';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('*Required'),
  mobileno: Yup.number().min(10).required('*Required'),
});

const ContactUs = ({navigation}) => {
  return (
    <RootScreen>
      <ScrollView>
        <Text style={styles.title}> {translate('ContactUs.heading')}</Text>
        <Formik
          initialValues={{name: '', mobileno: '', message: ''}}
          validationSchema={validationSchema}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
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
              <TextInput
                onChangeText={handleChange('mobileno')}
                onBlur={handleBlur('mobileno')}
                value={values.mobileno}
                style={styles.textinput}
                 placeholder={translate('ContactUs.MobileNo')}
                placeholderTextColor={'#666666'}
              />
              {errors.mobileno && touched.mobileno ? (
                <Text style={styles.error}>{errors.mobileno}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                value={values.message}
                style={styles.textinput_msg}
                numberOfLines={7}
                placeholder={translate('ContactUs.message')}
                placeholderTextColor={'#666666'}
              />
              {errors.message && touched.message ? (
                <Text style={styles.error}>{errors.message}</Text>
              ) : null}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                
                <Text style={styles.text_btn} onPress={() => navigation.goBack()} >{translate('ContactUs.Submit')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <View style={styles.footer}>
          <Text style={styles.footer_text}>{translate('ContactUs.contactToUs')}</Text>
          <View style={styles.info}>
            <Image
              style={styles.info_img}
              source={require('../../assets/phoneCall.png')}
            />
            <Text style={styles.info_text}>+91-7987233880</Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.info_img}
              source={require('../../assets/message.png')}
            />
            <Text style={styles.info_text}>contact@kurmishadi.com</Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.info_img}
              source={require('../../assets/whatsapp.png')}
            />
            <Text style={styles.info_text}>+91-7987233880</Text>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: '#DC1C28',
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

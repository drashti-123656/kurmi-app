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
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import translate from './../../translations/configTranslations';
import {samparkScreen} from './../../utils/Schemas/RegistrationSchema';

const Sampark = () => {
  return (
    <RootScreen>
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{
            mobileno: '',
            whatsappno: '',
            presentadd: '',
            permanentadd: '',
          }}
          validationSchema={samparkScreen}
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
              <ExtendedTextInput
                onChangeText={handleChange('mobileno')}
                onBlur={handleBlur('mobileno')}
                value={values.mobileno}
                style={styles.textinput}
                placeholder={translate('Sampark.mobileno')}
                placeholderTextColor={'#666666'}
              />

              {errors.mobileno && touched.mobileno ? (
                <Text style={styles.error}>{errors.mobileno}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('whatsappno')}
                onBlur={handleBlur('whatsappno')}
                value={values.whatsappno}
                style={styles.textinput}
                placeholder={translate('Sampark.whatsappno')}
                placeholderTextColor={'#666666'}
              />

              {errors.whatsappno && touched.whatsappno ? (
                <Text style={styles.error}>{errors.whatsappno}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('presentadd')}
                onBlur={handleBlur('presentadd')}
                value={values.presentadd}
                style={styles.textinput}
                placeholder={translate('Sampark.presentadd')}
                placeholderTextColor={'#666666'}
              />

              {errors.presentadd && touched.presentadd ? (
                <Text style={styles.error}>{errors.presentadd}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('permanentadd')}
                onBlur={handleBlur('permanentadd')}
                value={values.permanentadd}
                style={styles.textinput}
                placeholder={translate('Sampark.permanentadd')}
                placeholderTextColor={'#666666'}
              />

              {errors.permanentadd && touched.permanentadd ? (
                <Text style={styles.error}>{errors.permanentadd}</Text>
              ) : null}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text_btn}>{translate('Sampark.Next')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </RootScreen>
  );
};

export default Sampark;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
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
  button: {
    backgroundColor: '#DC1C28',
    height: hp(7),
    marginHorizontal: 30,
    marginTop: 50,
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
    marginLeft: '75%',
  },
});

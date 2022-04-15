import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import translate from './../../translations/configTranslations';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('*Required'),
  whatsappno: Yup.number().min(10).required('*Required'),
});

const Whatsapp = ({navigation}) => {
  return (
    <RootScreen>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />

        <Text style={styles.note}>{translate('whatsapp.Note')}</Text>
        <Formik
          initialValues={{name: '', whatsappno: ''}}
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
                placeholder={translate('whatsapp.name')}
                placeholderTextColor={'#666666'}
              />
              {errors.name && touched.name ? (
                <Text style={styles.error}>{errors.name}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('whatsappno')}
                onBlur={handleBlur('whatsappno')}
                value={values.whatsappno}
                style={styles.textinput}
                keyboardType={'numeric'}
                placeholder={translate('whatsapp.phoneno')}
                placeholderTextColor={'#666666'}
              />
              {errors.whatsappno && touched.whatsappno ? (
                <Text style={styles.error}>{errors.whatsappno}</Text>
              ) : null}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text_btn} onPress={() => navigation.navigate('DashboardNavigation')}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footer_text}>{translate('genral.webLink')}</Text>
        </TouchableOpacity>
      </View>
    </RootScreen>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 37,
    alignSelf: 'center',
  },
  note: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 25,
    color: '#ffffff',
  },
  input_view: {
    flex: 1,
  },
  textinput: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius: 10,
    padding: 10,
    height: 50,
    color: 'black',
  },
  button: {
    backgroundColor: '#DC1C28',
    height: 50,
    marginTop: hp('1'),
    marginHorizontal: 30,
    borderRadius: 10,
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
  },
  footer: {
    marginTop: 160,
  },
  footer_text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
});

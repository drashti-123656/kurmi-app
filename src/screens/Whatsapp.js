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
import * as Yup from 'yup'
import {Formik} from 'formik';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('*Required'),
  whatsappno: Yup.number().min(10).required('*Required'),
})


const Whatsapp = () => {

  return (
    <View style={styles.container}>
      {/* <ImageBackground style={styles.bg_img} source={require('../assets/Image/kurmibg(2)1.png')} > */}
      <Image
        source={require('../assets/Image/logo.png')}
        style={styles.image}
      />

      <Text style={styles.note}>
        नोट: केवल कुर्मी समाज के लोग ही रजिस्टर करें
      </Text>
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
              placeholder="नाम"
              placeholderTextColor={'lightgrey'}
            />
            {errors.name && touched.name ? (
                  <Text style={styles.error}>{errors.name}</Text>
                ) : null}
            <TextInput
              onChangeText={handleChange('whatsappno')}
              onBlur={handleBlur('whatsappno')}
              value={values.whatsappno}
              style={styles.textinput}
              placeholder="Whatsapp नंबर  दर्ज करें"
              placeholderTextColor={'lightgrey'}
            />
            {errors.whatsappno && touched.whatsappno ? (
                  <Text style={styles.error}>{errors.whatsappno}</Text>
                ) : null}
            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
              <Text style={styles.text_btn}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
          
      <TouchableOpacity style={styles.footer}>
          <Text style={styles.footer_text}>www.kurmishaddi.com</Text>
          </TouchableOpacity>
    </View>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a4c4c',
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
    height: 55,
    color: 'black',
  },
  button: {
    backgroundColor: '#DC1C28',
    height: 50,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20
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

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';


import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import translate from './../../translations/configTranslations';


import {WhatsappSchema} from './../../utils/Schemas/LoginSchema';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import LoginButton from '../../components/atoms/buttons/LoginButton';

const Whatsapp = () => {
  

  return (
    <RootScreen>
      <ScrollView>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <Text style={styles.note}>{translate('whatsapp.Note')}</Text>
        <Formik
          initialValues={{
            name: '',
            whatsappno: '',
          }}
          validationSchema={WhatsappSchema}
          onSubmit={values => console.log(values)}>
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
                value={values.Source}
                placeholder={translate('whatsapp.name')}
                placeholderTextColor={'#666666'}
              />
              {errors.name && touched.name ? (
                <Text style={styles.error}>{errors.name}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('whatsappno')}
                onBlur={handleBlur('whatsappno')}
                value={values.password}
                placeholder={translate('whatsapp.phoneno')}
                placeholderTextColor={'#666666'}
              />
              {errors.whatsappno && touched.whatsappno ? (
                <Text style={styles.error}>{errors.whatsappno}</Text>
              ) : null}

              <LoginButton 
                     title={translate('whatsapp.Continue')}
                  onPress={handleSubmit}
  
                />

              
            </View>
          )}
        </Formik>
      
        <TouchableOpacity style={styles.footer}>
            <Text style={styles.footer_text}>{translate('genral.webLink')}</Text>
          </TouchableOpacity>

      </ScrollView>
    </RootScreen>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
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
  footer: {
    marginTop: 160,
  },
  footer_text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    color: 'white',
    marginTop: '25%',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
 
});

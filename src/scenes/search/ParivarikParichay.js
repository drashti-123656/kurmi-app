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

const validationSchema = Yup.object().shape({
  fatherName: Yup.string().required(translate('ParivarikParichay.Required')),
  fatherOccupation: Yup.string().required(translate('ParivarikParichay.Required')),
  motherName: Yup.string().required(translate('ParivarikParichay.Required')),
  motherMayaka: Yup.string().required(translate('ParivarikParichay.Required')),
  brother: Yup.string().required(translate('ParivarikParichay.Required')),
  sister: Yup.string().required(translate('ParivarikParichay.Required')),
  land: Yup.string().required(translate('ParivarikParichay.Required')),
});

const ParivarikParichay = () => {
  return (
    <RootScreen>
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{
            fatherName: '',
            fatherOccupation: '',
            motherName: '',
            motherMayaka: '',
            brother: '',
            sister: '',
            land: '',
          }}
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
              <ExtendedTextInput
                onChangeText={handleChange('fatherName')}
                onBlur={handleBlur('fatherName')}
                value={values.fatherName}
                placeholder={translate('ParivarikParichay.fatherName')}
                placeholderTextColor={'#666666'}
              />

              {errors.fatherName && touched.fatherName ? (
                <Text style={styles.error}>{errors.fatherName}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('fatherOccupation')}
                onBlur={handleBlur('fatherOccupation')}
                value={values.fatherOccupation}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.fatherOccupation')}
                placeholderTextColor={'#666666'}
              />
              
              {errors.fatherOccupation && touched.fatherOccupation ? (
                <Text style={styles.error}>{errors.fatherOccupation}</Text>
              ) : null}

              <ExtendedTextInput 
                onChangeText={handleChange('motherName')}
                onBlur={handleBlur('motherName')}
                value={values.motherName}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.motherName')}
                placeholderTextColor={'#666666'}
              />
              
              {errors.motherName && touched.motherName ? (
                <Text style={styles.error}>{errors.motherName}</Text>
              ) : null}

              <ExtendedTextInput 
                onChangeText={handleChange('m0therMayaka')}
                onBlur={handleBlur('motherMayaka')}
                value={values.motherMayaka}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.motherMayaka')}
                placeholderTextColor={'#666666'}
              />
              
              {errors.motherMayaka && touched.motherMayaka ? (
                <Text style={styles.error}>{errors.motherMayaka}</Text>
              ) : null}

              <ExtendedTextInput 
                 onChangeText={handleChange('brother')}
                onBlur={handleBlur('brother')}
                value={values.brother}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.brother')}
                placeholderTextColor={'#666666'}

              />
             
              {errors.brother && touched.brother ? (
                <Text style={styles.error}>{errors.brother}</Text>
              ) : null}

              <ExtendedTextInput 
                onChangeText={handleChange('sister')}
                onBlur={handleBlur('sister')}
                value={values.sister}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.sister')}
                placeholderTextColor={'#666666'}
              />
              
              {errors.sister && touched.sister ? (
                <Text style={styles.error}>{errors.sister}</Text>
              ) : null}

              <ExtendedTextInput 
                 onChangeText={handleChange('land')}
                onBlur={handleBlur('land')}
                value={values.land}
                style={styles.textinput}
                placeholder={translate('ParivarikParichay.land')}
                placeholderTextColor={'#666666'}

              />
              
              {errors.land && touched.land ? (
                <Text style={styles.error}>{errors.land}</Text>
              ) : null}

             
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text_btn}>{translate('ParivarikParichay.register')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </RootScreen>
  );
};

export default ParivarikParichay;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    marginTop: 20,
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
    //textAlign: 'right',
    marginLeft : '80%'
    
  },
});

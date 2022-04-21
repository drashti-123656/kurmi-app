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
import React, { useEffect } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from './../../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import ExtendedTextInput from './../../../components/atoms/inputs/ExtendedTextInput';
import translate from './../../../translations/configTranslations';
import {samparkSchema} from './../../../utils/schema/registerSchema';

import {sampark} from './redux/registrationReducer';
import {useDispatch, useSelector} from 'react-redux';

const Sampark = () => {
  const dispatch = useDispatch();
  const {samparkData} = useSelector(state => state.registration);

  useEffect(() => {
    console.log('samparkData', samparkData)
  }, [samparkData])
  
  
  const handleSampark = values => {
    const payload = {
      userContactInfoContactNo: values.mobileNo,
      userContactInfoWhatsappNo: values.whatsAppNo,
      userContactInfoPresentAddress: values.presentAdd,
      userContactInfoPermanentAddress: values.permanentAdd,
    };

    dispatch(sampark(payload));
  };

 

  return (
    <RootScreen>
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{
            mobileNo: samparkData.mobileNo,
            whatsAppNo: samparkData.whatsAppNo,
            presentAdd: samparkData.permanentAdd,
            permanentAdd: samparkData.presentAdd,
          }}
          validationSchema={samparkSchema}
          onSubmit={values => handleSampark(values)}>
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
                onChangeText={handleChange('mobileNo')}
                onBlur={handleBlur('mobileNo')}
                value={values.mobileNo}
                style={styles.textInput}
                placeholder={translate('samPark.mobileNo')}
                placeholderTextColor={'#666666'}
              />

              {errors.mobileNo && touched.mobileNo ? (
                <Text style={styles.errorStyle}>{errors.mobileNo}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('whatsAppNo')}
                onBlur={handleBlur('whatsAppNo')}
                value={values.whatsAppNo}
                style={styles.textInput}
                placeholder={translate('samPark.whatsAppNo')}
                placeholderTextColor={'#666666'}
              />

              {errors.whatsAppNo && touched.whatsAppNo ? (
                <Text style={styles.errorStyle}>{errors.whatsAppNo}</Text>
              ) : null}
              <ExtendedTextInput
                onChangeText={handleChange('presentAdd')}
                onBlur={handleBlur('presentAdd')}
                value={values.presentAdd}
                style={styles.textInput}
                placeholder={translate('samPark.presentAdd')}
                placeholderTextColor={'#666666'}
              />

              {errors.presentAdd && touched.presentAdd ? (
                <Text style={styles.errorStyle}>{errors.presentAdd}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('permanentAdd')}
                onBlur={handleBlur('permanentAdd')}
                value={values.permanentAdd}
                style={styles.textInput}
                placeholder={translate('samPark.permanentAdd')}
                placeholderTextColor={'#666666'}
              />

              {errors.permanentAdd && touched.permanentAdd ? (
                <Text style={styles.errorStyle}>{errors.permanentAdd}</Text>
              ) : null}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text_btn}>{translate('samPark.Next')}</Text>
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
  textInput: {
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
  errorStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    marginLeft: '75%',
  },
});

import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import RootScreen from '../../../components/molecule/rootScreen/RootScreen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import translate from '../../../translations/configTranslations';
import ExtendedTextInput from '../../../components/atoms/inputs/ExtendedTextInput';
import LoginButton from '../../../components/atoms/buttons/LoginButton';
import {FORGOT_PASSWORD} from './redux/forgotPasswordAction';
import {useDispatch, useSelector} from 'react-redux';

const Forgotpassword = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.forgotpassword);
  const handleForgotPassword = values => {
    const payload = {
      email: values.email,
    };
    dispatch({
      type: FORGOT_PASSWORD,
      payload,
    });
  };
  return (
    <RootScreen scrollable={true}>
      <Formik
        initialValues={{email: ''}}
        onSubmit={values => handleForgotPassword(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.formContainer}>
            <Text style={styles.webLink}>
              {translate('ForgotPassword.EnterYourEmail')}
            </Text>

            <ExtendedTextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder={translate('ForgotPassword.EnterYourEmail')}
              placeholderTextColor={'#666666'}
            />
            <LoginButton
              title={translate('ForgotPassword.Send')}
              onPress={handleSubmit}
              loading={isLoading}
            />
            {/* {/* <View>
      <Text>Forgotpassword</Text> */}
          </View>
        )}
      </Formik>
    </RootScreen>
  );
};

export default Forgotpassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a4c4c',
  },
  formContainer: {
    marginVertical: 200,
    flex: 1,
  },
  createAcccount: {
    color: 'white',
    fontSize: widthPercentageToDP('4.5%'),
    alignSelf: 'center',
    marginTop: heightPercentageToDP('5%'),
  },
  webLink: {
    color: 'white',
    fontSize: widthPercentageToDP('4.5%'),
    marginHorizontal: 36,
    paddingTop: 20,
    marginBottom: -1,
  },
  btnContainer: {
    backgroundColor: '#c3773b',
    height: 50,
    borderRadius: 10,
    marginTop: heightPercentageToDP('2'),
    marginBottom: heightPercentageToDP('2'),
    marginHorizontal: widthPercentageToDP('8'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '400',

    fontSize: 20,
    color: 'white',
  },
  alignedRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP('6'),
  },
  alignedRowContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 190,
    height: 190,
    marginTop: heightPercentageToDP('6'),
    marginBottom: heightPercentageToDP('3'),
    alignSelf: 'center',
  },
  formikContainer: {
    paddingHorizontal: widthPercentageToDP('5'),
  },
  input: {
    height: 50,
    marginTop: heightPercentageToDP('1'),
    marginBottom: heightPercentageToDP('2'),
    marginHorizontal: widthPercentageToDP('3'),
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  forgotPassword: {
    color: 'white',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#DC1C28',
    height: 50,
    borderRadius: 10,
    marginTop: heightPercentageToDP('1'),
    marginBottom: heightPercentageToDP('2'),
    marginHorizontal: widthPercentageToDP('3'),
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  checkBox: {
    color: 'white',
  },
  button2: {
    backgroundColor: '#DC1C28',
    height: 50,
    marginHorizontal: widthPercentageToDP('3'),
    borderRadius: 10,
    marginTop: 25,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
  },
});

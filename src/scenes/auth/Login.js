import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import translate from './../../translations/configTranslations';
import {useDispatch, useSelector} from 'react-redux';
import {LoginSchema} from '../../utils/schema/loginSchema';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import LoginButton from '../../components/atoms/buttons/LoginButton';
import {LOG_IN} from './redux/authActions';
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {authData} = useSelector(state => state.auth);

  const handleLogin = values => {
    const payload = {
      userLoginId: values.login,
      userPassword: values.password,
    };
    dispatch({
      type: LOG_IN,
      payload,
    });
  };

  return (
    <RootScreen scrollable={true}>
      <Image source={require('../../assets/logo1.png')} style={styles.image} />
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => handleLogin(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <ExtendedTextInput
              onChangeText={handleChange('login')}
              onBlur={handleBlur('login')}
              value={values.Source}
              placeholder={translate('login.IdPlaceholder')}
              placeholderTextColor={'#666666'}
            />
            {errors.login && touched.login ? (
              <Text style={styles.error}>{errors.login}</Text>
            ) : null}
            <ExtendedTextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
              placeholder={translate('login.Password')}
              placeholderTextColor={'#666666'}
            />
            {errors.password && touched.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}

            <LoginButton
              title={translate('login.Log-in')}
              onPress={handleSubmit}
              loading={authData.loading}
            />

            <View style={styles.alignedRowContainer}>
              <View style={styles.alignedRowContainer1}></View>

              <Text style={styles.forgotPassword}>
                {translate('login.forgotPassword')}
              </Text>
            </View>

            <Text style={styles.createAcccount}>
              {translate('login.createAccountPrefix')}
            </Text>

            <Pressable
              onPress={() => navigation.navigate('Registration')}
              style={styles.btnContainer}>
              <Text style={styles.title}>
                {translate('login.createAccount')}
              </Text>
            </Pressable>

            <Text style={styles.webLink}>{translate('genral.webLink')}</Text>
          </View>
        )}
      </Formik>
    </RootScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a4c4c',
  },
  formContainer: {
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
    alignSelf: 'center',
    paddingTop: 20,
    marginBottom: 20,
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

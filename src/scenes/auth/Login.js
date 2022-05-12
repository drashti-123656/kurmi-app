import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import CheckBox from '@react-native-community/checkbox';
import * as Yup from 'yup';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import translate from './../../translations/configTranslations';
import {useDispatch, useSelector} from 'react-redux';
import {LoginSchema} from './../../utils/schema/login';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import LoginButton from '../../components/atoms/buttons/LoginButton';
import {LOG_IN} from './redux/authActions';
import { login } from './login/loginReducer';
const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const loginData= useSelector(state => state.auth);
  const handleLogin = values => {
    const payload = {
      userLoginId: values.login,
      userPassword: values.password,
    };
    dispatch({
      type: LOG_IN,
      payload,
    });
    
    dispatch(loginSuccess(payload));
    // setLoading(true);
  };

  // const handleLogin = () => {
  //   dispatch(
  //     login({
  //       isAuthenticated: true,
  //       user: {},
  //       token: '',
  //       error: null,
  //       loading: false,
  //     }),
  //   );
  // };

  return (
    <RootScreen scrollable={true}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Formik
        initialValues={{
          login: loginData.login,
          password:loginData.password,
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
            />

            <View style={styles.alignedRowContainer}>
              <View style={styles.alignedRowContainer1}>
                <CheckBox
                  tintColors={{true: 'white'}}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={{color: 'white', fontSize: 15}}>
                  {translate('login.remenberMe')}
                </Text>
              </View>

              <Text style={{color: 'white', fontSize: 15}}>
                {translate('login.forgotPassword')}
              </Text>
            </View>

            <Text
              style={{
                color: 'white',
                fontSize: widthPercentageToDP('4.5%'),
                alignSelf: 'center',
                marginTop: heightPercentageToDP('5%'),
              }}>
              {translate('login.createAccountPrefix')}
            </Text>

            <LoginButton
              title={translate('login.createAccount')}
              onPress={handleLogin}
              loading={loading}
            />

            <Text
              style={{
                color: 'white',
                fontSize: widthPercentageToDP('4.5%'),
                alignSelf: 'center',
                paddingTop: 20,
                marginBottom: 20,
              }}>
              {translate('genral.webLink')}
            </Text>
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
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
});

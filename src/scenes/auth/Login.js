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
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {login} from './redux/authReducer';

const validationSchema = Yup.object({
  login: Yup.string().required('*Required'),
  password: Yup.string().required('*Required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleLogin = () => {
    dispatch(
      login({
        isAuthenticated: true,
        user: {},
        token: '',
        error: null,
        loading: false,
      }),
    );
  };

  return (
    <RootScreen>
      <ScrollView>
        <Image source={require('../../assets/logo.png')} style={styles.image} />

        <Formik
          initialValues={{
            login: '',
            password: '',
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
            <View style={styles.formikContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('login')}
                onBlur={handleBlur('login')}
                value={values.Source}
                placeholder={translate('login.IdPlaceholder')}
                placeholderTextColor={'#666666'}
              />
              {errors.login && touched.login ? (
                <Text style={styles.error}>{errors.login}</Text>
              ) : null}
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder={translate('login.password')}
                placeholderTextColor={'#666666'}
              />
              {errors.password && touched.password ? (
                <Text style={styles.error}>{errors.password}</Text>
              ) : null}

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text_btn} onPress={() => navigation.navigate('NewsFeed')} >Log in</Text>
              </TouchableOpacity>

              <View style={styles.alignedRowContainer}>
                <View style={styles.alignedRowContainer1}>
                  <CheckBox
                    style={{color: 'white'}}
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
                  paddingTop: 40,
                }}>
                {translate('login.createAccountPrefix')}
              </Text>
              <TouchableOpacity style={styles.button2} onPress={handleLogin}>
                <Text style={styles.text_btn}>
                  {translate('login.createAccount')}
                </Text>
              </TouchableOpacity>

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
      </ScrollView>
    </RootScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a4c4c',
  },
  alignedRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP('3'),
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
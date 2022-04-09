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

const validationSchema = Yup.object({
  login: Yup.string().required('*Required'),
  password: Yup.string().required('*Required'),
});

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
          onSubmit={values => navigation.navigate('Consultation')}>
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
                placeholder="kurmishadi ID/Mobile No/Email ID"
              />
              {errors.login && touched.login ? (
                <Text style={styles.login}>{errors.login}</Text>
              ) : null}
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <Text style={styles.password}>{errors.password}</Text>
              ) : null}

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text_btn}>Log in</Text>
              </TouchableOpacity>

              <View style={styles.alignedRowContainer}>
                <View style={styles.alignedRowContainer}>
                  <CheckBox
                    style={{color: 'white'}}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <Text style={{color: 'white', fontSize: 15}}>
                    Remember me
                  </Text>
                </View>

                <Text style={{color: 'white', fontSize: 15}}>
                  Forgot Password
                </Text>
              </View>

              <Text
                style={{
                  color: 'white',
                  fontSize: widthPercentageToDP('4.5%'),
                  alignSelf: 'center',
                  paddingTop: 40,
                }}>
                क्या आपके पास अकाउंट नहीं है?
              </Text>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.text_btn}> अभी बनाए </Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: 'white',
                  fontSize: widthPercentageToDP('4.5%'),
                  alignSelf: 'center',
                  paddingTop: 20,
                  marginBottom: 20,
                }}>
                www.kurmishaddi.com
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
    marginBottom: heightPercentageToDP('3'),
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#DC1C28',
    height: 50,
    borderRadius: 10,
    marginBottom: heightPercentageToDP('2'),
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
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 25,
  },
});

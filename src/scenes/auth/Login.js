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
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  login: Yup.string().required('*Required'),
  password: Yup.string().required('*Required'),
});

const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <RootScreen>
    <ScrollView style={styles.container}>
      
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
          <View>
            <TextInput
              style={styles.textinput}
              onChangeText={handleChange('login')}
              onBlur={handleBlur('login')}
              value={values.login}
              placeholder="kurmishadi ID/Mobile No/Email ID"
              placeholderTextColor={'#666666'}
            />
            {errors.login && touched.login ? (
              <Text style={styles.error}>{errors.login}</Text>
            ) : null}
            <TextInput
              style={styles.textinput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              placeholderTextColor={'#666666'}
            />
            {errors.password && touched.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
              <Text style={styles.text_btn} onPress={() => navigation.navigate('NewsFeed')}>Log in</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.checkbox}>
        <View style={styles.checkbox_view} >
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.checkbox_txt}> Remember me </Text>
        </View>
        <Text style={styles.checkbox_txt}> Forgot Password</Text>
      </View>

      <Text style={styles.footer}> क्या आपके पास अकाउंट नहीं है? </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text_btn}> अभी बनाए </Text>
      </TouchableOpacity>

      <Text style={{...styles.footer, marginTop: 10, marginBottom: 30}}> www.kurmishaddi.com </Text>
    </ScrollView>
    </RootScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 210,
    height: 210,
    marginTop: 40,
    alignSelf: 'center',
  },
  textinput: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 5,
    borderRadius: 10,
    flex: 1,
    paddingLeft: 20,
    height: hp(8),
    color: 'black',
  },
  button: {
    backgroundColor: '#DC1C28',
    height: hp(7),
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 10,
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: 15 , 
    marginHorizontal : 30,
    justifyContent: 'space-between',
  },
  checkbox_view: {
    flexDirection: 'row',
  },
  checkbox_txt: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
  },
  footer: {
    color: 'white',
    fontSize: 18 , 
    alignSelf : 'center', 
    marginTop: 50,
    marginBottom: 10,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
});
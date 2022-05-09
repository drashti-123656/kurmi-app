import {Formik} from 'formik';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import {passwordChangeValidationSchema} from '../utils/schema/passwordChangeValidationSchema';
const PasswordChange = () => {
  return (
    <>
      <Formik
        initialValues={{
          currentPassword: '',
          NewPassword: '',
          Retypenewpassword: '',
        }}
        validationSchema={passwordChangeValidationSchema}
        onSubmit={values => console.log(values)}>
        {({handleSubmit, setFieldValue, values, errors, touched}) => (
          <View style={styles.passwordContainer}>
            <PasswordInputText
              value={values.currentPassword}
              label={'Current Password'}
              onChangeText={currentPassword => setFieldValue({currentPassword})}
            />
            {errors.currentPassword && touched.currentPassword ? (
              <Text style={styles.error}>{errors.currentPassword}</Text>
            ) : null}
            <PasswordInputText
              value={values.NewPassword}
              label={'New Password'}
              onChangeText={NewPassword => setFieldValue({NewPassword})}
            />
            {errors.NewPassword && touched.NewPassword ? (
              <Text style={styles.error}>{errors.NewPassword}</Text>
            ) : null}
            <PasswordInputText
              value={values.Retypenewpassword}
              label={'Retype New Password'}
              onChangeText={Retypenewpassword =>
                setFieldValue({Retypenewpassword})
              }
            />
            {errors.Retypenewpassword && touched.Retypenewpassword ? (
              <Text style={styles.error}>{errors.Retypenewpassword}</Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.text}>Update</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};

export default PasswordChange;

const styles = StyleSheet.create({
  passwordContainer: {
    margin: 20,
  },
  button: {
    marginHorizontal: 120,
    marginTop: 60,
    borderWidth: 1,
    borderRadius: 50,
    width: 120,
    height: 40,
    backgroundColor: '#c3773b',
    borderColor: '#DC1C28',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
  text: {
    paddingLeft: 35,
    padding: 10,
    color: 'white',
  },
});

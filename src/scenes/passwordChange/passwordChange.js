import {Formik} from 'formik';
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import LoginButton from '../../components/atoms/buttons/LoginButton';
import {passwordChangeValidationSchema} from '../../utils/schema/passwordChangeValidationSchema';
import {CHANGE_PASSWORD} from './redux/passwordAction';

const PasswordChange = () => {
  const textInput = useRef(null);
  const newInput = useRef(null);
  const currentInput = useRef(null);

  const dispatch = useDispatch();

  const {isLoading} = useSelector(state => state.changePassword);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [password, setPassword] = useState(true);
  const [newPassword, setnewPassword] = useState(true);

  const handleChangePassword = values => {
    const payload = {
      userUpdateType: 'chnagePassword',
      userOldPassword: values.currentPassword,
      userPassword: values.NewPassword,
      userConfrimPassword: values.Retypenewpassword,
    };
    dispatch({
      type: CHANGE_PASSWORD,
      payload,
    });
  };
  return (
    <>
      <Formik
        initialValues={{
          currentPassword: '',
          NewPassword: '',
          Retypenewpassword: '',
        }}
        validationSchema={passwordChangeValidationSchema}
        onSubmit={values => {
          handleChangePassword(values);

          currentInput.current.clear();
          newInput.current.clear();
          textInput.current.clear();
          textInput.current.blur();
          currentInput.current.focus();
        }}>
        {({handleSubmit, handleChange, values, errors, touched}) => (
          <View style={styles.passwordContainer}>
            <View>
              <TextInput
                style={styles.currentContain}
                ref={currentInput}
                secureTextEntry={passwordVisible}
                value={values.currentPassword}
                label={'Current Password'}
                onChangeText={handleChange('currentPassword')}
                right={
                  <TextInput.Icon
                    name={passwordVisible ? 'eye-off' : 'eye'}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
              />
              {errors.currentPassword && touched.currentPassword ? (
                <Text style={styles.error}>{errors.currentPassword}</Text>
              ) : null}
            </View>
            <View style={styles.newpasswordcontainer}>
              <TextInput
                style={styles.currentContain}
                ref={newInput}
                secureTextEntry={password}
                value={values.NewPassword}
                label={'New Password'}
                onChangeText={handleChange('NewPassword')}
                right={
                  <TextInput.Icon
                    name={password ? 'eye-off' : 'eye'}
                    onPress={() => setPassword(!password)}
                  />
                }
              />
              {errors.NewPassword && touched.NewPassword ? (
                <Text style={styles.error}>{errors.NewPassword}</Text>
              ) : null}
            </View>
            <View style={styles.newpasswordcontainer}>
              <TextInput
                style={styles.reContainer}
                ref={textInput}
                secureTextEntry={newPassword}
                value={values.Retypenewpassword}
                label={'Retype New Password'}
                onChangeText={handleChange('Retypenewpassword')}
                right={
                  <TextInput.Icon
                    name={newPassword ? 'eye-off' : 'eye'}
                    onPress={() => setnewPassword(!newPassword)}
                  />
                }
              />
              {errors.Retypenewpassword && touched.Retypenewpassword ? (
                <Text style={styles.error}>{errors.Retypenewpassword}</Text>
              ) : null}
            </View>
            <View style={styles.button}>
              <LoginButton
                title={'Update'}
                onPress={handleSubmit}
                loading={isLoading}
              />
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

export default PasswordChange;

const styles = StyleSheet.create({
  passwordContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  currentContain: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  newpasswordcontainer: {
    marginBottom: 20,
  },
  reContainer: {
    backgroundColor: 'white',
  },
  button: {
    marginTop: 50,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
});

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
  
  const validationSchema = Yup.object().shape({
    fatherName: Yup.string().required('*Required'),
    fatherOccupation: Yup.string().required('*Required'),
    motherName: Yup.string().required('*Required'),
    motherMayaka: Yup.string().required('*Required'),
    brother: Yup.string().required('*Required'),
    sister: Yup.string().required('*Required'),
    land: Yup.string().required('*Required'),
  });
  
  const ParivarikParichay = () => {
    return (
      <RootScreen>
        <ScrollView style={styles.container}>
          <Formik
            initialValues={{fatherName: '', fatherOccupation: '', motherName: '', motherMayaka: '', brother: '', sister: '', land: ''}}
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
                  onChangeText={handleChange('fatherName')}
                  onBlur={handleBlur('fatherName')}
                  value={values.fatherName}
                  style={styles.textinput}
                  placeholder="पिता का नाम "
                  placeholderTextColor={'#666666'}
                />
                {errors.fatherName && touched.fatherName ? (
                  <Text style={styles.error}>{errors.fatherName}</Text>
                ) : null}
                <TextInput
                  onChangeText={handleChange('fatherOccupation')}
                  onBlur={handleBlur('fatherOccupation')}
                  value={values.fatherOccupation}
                  style={styles.textinput}
                  placeholder="पिता का व्यवसाय"
                  placeholderTextColor={'#666666'}
                />
                {errors.fatherOccupation && touched.fatherOccupation ? (
                  <Text style={styles.error}>{errors.fatherOccupation}</Text>
                ) : null}
                <TextInput
                  onChangeText={handleChange('motherName')}
                  onBlur={handleBlur('motherName')}
                  value={values.motherName}
                  style={styles.textinput}
                  placeholder="माँ का नाम"
                  placeholderTextColor={'#666666'}
                />
                {errors.motherName && touched.motherName ? (
                  <Text style={styles.error}>{errors.motherName}</Text>
                ) : null}
                <TextInput
                  onChangeText={handleChange('m0therMayaka')}
                  onBlur={handleBlur('motherMayaka')}
                  value={values.motherMayaka}
                  style={styles.textinput}
                  placeholder="माँ का मायका"
                  placeholderTextColor={'#666666'}
                />
                {errors.motherMayaka && touched.motherMayaka ? (
                  <Text style={styles.error}>{errors.motherMayaka}</Text>
                ) : null}
                <TextInput
                  onChangeText={handleChange('brother')}
                  onBlur={handleBlur('brother')}
                  value={values.brother}
                  style={styles.textinput}
                  placeholder="भाई"
                  placeholderTextColor={'#666666'}
                />
                {errors.brother && touched.brother ? (
                  <Text style={styles.error}>{errors.brother}</Text>
                ) : null}
                <TextInput
                  onChangeText={handleChange('sister')}
                  onBlur={handleBlur('sister')}
                  value={values.sister}
                  style={styles.textinput}
                  placeholder="बहन"
                  placeholderTextColor={'#666666'}
                />
                {errors.sister && touched.sister ? (
                  <Text style={styles.error}>{errors.sister}</Text>
                ) : null}
                <TextInput
                  onChangeText={handleChange('land')}
                  onBlur={handleBlur('land')}
                  value={values.land}
                  style={styles.textinput}
                  placeholder="जमीन"
                  placeholderTextColor={'#666666'}
                />
                {errors.land && touched.land ? (
                  <Text style={styles.error}>{errors.land}</Text>
                ) : null}
                <TextInput
                  onChangeText={handleChange('sister')}
                  onBlur={handleBlur('sister')}
                  value={values.sister}
                  style={styles.textinput}
                  placeholder="बहन"
                  placeholderTextColor={'#666666'}
                />
                {errors.sister && touched.sister ? (
                  <Text style={styles.error}>{errors.sister}</Text>
                ) : null}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.text_btn}>आगे</Text>
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
      textAlign: 'right',
    },
  });
  
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import RootScreen from '../../components/molecule/rootScreen/RootScreen';
  import {Formik} from 'formik';
  import translate from './../../translations/configTranslations';
  import dropDownList from '../../utils/constants/dropDownList';
  import { PersonalinformationSchema } from '../../utils/schema/personalInformationSchema';
  import Dropdown from '../../components/atoms/dropdown/Dropdown';
  const Personalinformation = ({navigation}) => {
    return (
      <RootScreen>
          <Formik
            initialValues={{
              height: '',
              maritalstatus: '',
              knowledge: '',
              job: '',
              colour: '',
              disability: '',
              bloodgroup: '',
            }}
            validationSchema={PersonalinformationSchema}
            onSubmit={values => console.log(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={styles.container}>
                  <View style={styles.imageContainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles.backArrow_img}
                        source={require('../../assets/backarrow.png')}
                      />
                    </TouchableOpacity>
                  </View>
  
                  <Text style={styles.navbarText}>
                    {translate('Vyaktigatdata.Personal information')}{' '}
                  </Text>
                </View>
  
                <>
                  <Dropdown
                    style={styles.inputHeight}
                    items={dropDownList}
                    selectText={translate('Vyaktigatdata.Height')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value => setFieldValue('name', value)}
                  />
  
                  {errors.height && touched.height ? (
                    <Text style={styles.error}>{errors.height}</Text>
                  ) : null}
  
                  <Dropdown
                    style={styles.textinputstyle}
                    items={dropDownList}
                    selectText={translate('Vyaktigatdata.Marital Status')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value => setFieldValue('name', value)}
                  />
  
                  {errors.maritalstatus && touched.maritalstatus ? (
                    <Text style={styles.error}>{errors.maritalstatus}</Text>
                  ) : null}
  
                  <Dropdown
                    style={styles.inputMargin}
                    items={dropDownList}
                    selectText={translate('Vyaktigatdata.Knowledge')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value => setFieldValue('name', value)}
                  />
                  {errors.knowledge && touched.knowledge ? (
                    <Text style={styles.error}>{errors.knowledge}</Text>
                  ) : null}
  
                  <Dropdown
                    style={styles.inputMargin}
                    items={dropDownList}
                    selectText={translate('Vyaktigatdata.Job')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value => setFieldValue('name', value)}
                  />
                  {errors.job && touched.job ? (
                    <Text style={styles.error}>{errors.job}</Text>
                  ) : null}
                  <View style={styles.inputMargin}>
                    <Dropdown
                      items={dropDownList}
                      selectText={translate('Vyaktigatdata.Colour')}
                      selectedItems={values.name}
                      onSelectedItemsChange={value =>
                        setFieldValue('name', value)
                      }
                    />
                  </View>
                  {errors.colour && touched.colour ? (
                    <Text style={styles.error}>{errors.colour}</Text>
                  ) : null}
                  <Dropdown
                    style={styles.inputMargin}
                    items={dropDownList}
                    selectText={translate('Vyaktigatdata.Disability')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value => setFieldValue('name', value)}
                  />
                  {errors.disability && touched.disability ? (
                    <Text style={styles.error}>{errors.disability}</Text>
                  ) : null}
                  <Dropdown
                    style={styles.inputMargin}
                    items={dropDownList}
                    selectText={translate('Vyaktigatdata.BloodGroup')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value => setFieldValue('name', value)}
                  />
                  {errors.bloodgroup && touched.bloodgroup ? (
                    <Text style={styles.error}>{errors.bloodgroup}</Text>
                  ) : null}
  
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}>
                    <Text
                      style={styles.text_btn}
                      onPress={() => navigation.navigate('Dharmikjankari')}>
                      {translate('Vyaktigatdata.Next')}{' '}
                    </Text>
                  </TouchableOpacity>
                </>
              </>
            )}
          </Formik>
      </RootScreen>
    );
  };
  
  export default Personalinformation;
  
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      height: 52,
      flexDirection: 'row',
      backgroundColor: '#DC1C28',
      paddingLeft: 10,
      paddingRight: 10,
    },
    backArrow_img: {
      width: 30,
      height: 25,
    },
  
    dataContainer: {
      flexDirection: 'row',
      marginHorizontal: 16,
      marginTop: 20,
    },
    term: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: 'bold',
      marginTop: 6,
    },
    inputContainer: {
      marginTop: 10,
    },
    upload_img: {
      flex: 1,
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    profileContainer: {
      justifyContent: 'center',
      alignSelf: 'center',
      flex: 1,
      marginTop: 30,
    },
    inputMargin: {
      marginTop: 20,
    },
    ageContainer: {
      flexDirection: 'row',
      marginTop: 30,
    },
    textinputstyle: {
      marginTop: 18,
    },
    firstImage: {
      marginHorizontal: 10,
    },
    SecondImage: {
      marginHorizontal: 170,
    },
    footeContainer: {
      backgroundColor: '#EDEDED',
      height: 380,
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 40,
    },
    profile_img: {
      width: 180,
      height: 180,
      marginTop: 50,
      marginLeft: -160,
    },
    footerTextContainer: {
      marginHorizontal: -160,
      height: 50,
      width: 180,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pinClipart: {
      position: 'absolute',
      left: 340,
      top: 15,
    },
    titleText: {
      fontWeight: 'bold',
      marginTop: 15,
    },
    titleTextnext: {
      marginTop: 3,
      color: '#8A8787',
    },
    bottomText: {
      marginHorizontal: 20,
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    PinClipart_img: {
      width: 25,
      height: 25,
    },
    navbarText: {
      color: '#FFFFFF',
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginHorizontal: 90,
    },
    profileText: {
      fontWeight: 'bold',
    },
    profileImageContainer: {
      flexDirection: 'row',
      marginTop: 40,
    },
  
    imageContainer: {
      marginTop: 18,
    },
    bg_img: {
      flex: 1,
    },
    title: {
      marginTop: 20,
      marginBottom: 30,
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 20,
      color: '#ffffff',
    },
    input_view: {
      flex: 1,
    },
    textinput: {
      backgroundColor: 'white',
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 10,
      paddingLeft: 10,
      height: hp(7),
      color: 'black',
      width: 155,
      fontSize: 15,
      marginTop: 5,
    },
    input: {
      backgroundColor: 'white',
      marginVertical: 10,
      borderRadius: 10,
      paddingLeft: 50,
      height: hp(7),
      color: 'black',
      width: 150,
      fontSize: 17,
      marginTop: 5,
    },
    inputHeight: {
      marginTop: 70,
    },
    commonInput: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 30,
      marginVertical: 10,
      paddingLeft: 15,
      height: hp(7),
      color: 'black',
      fontSize: 15,
    },
    textinput_msg: {
      backgroundColor: 'white',
      marginHorizontal: 30,
      marginVertical: 10,
      borderRadius: 10,
      paddingLeft: 20,
      textAlignVertical: 'top',
      color: 'black',
    },
  
    submitButton: {
      backgroundColor: '#DC1C28',
      height: hp(7),
      marginHorizontal: 30,
      marginTop: 30,
      borderRadius: 10,
      marginBottom: 60,
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
      marginHorizontal: 50,
      color: 'red',
      marginRight: 40,
      position: 'relative',
      top: 5,
    },
    lastnameerror: {
      fontSize: 12,
      fontWeight: 'bold',
      marginHorizontal: 50,
      color: 'red',
      marginRight: 40,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 45,
      marginTop: 20,
    },
    ButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 100,
    },
    radioButton: {
      height: 20,
      width: 20,
      backgroundColor: '#F8F8F8',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#E6E6E6',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    button: {
      height: 20,
      width: 20,
      backgroundColor: '#F8F8F8',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#E6E6E6',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    radioButtonIcon: {
      height: 14,
      width: 14,
      borderRadius: 9,
      backgroundColor: 'black',
    },
    buttonIcon: {
      height: 14,
      width: 14,
      borderRadius: 9,
      backgroundColor: 'black',
    },
  
    radioButtonText: {
      fontSize: 25,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginTop: 20,
    },
    ButtonText: {
      fontSize: 25,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginTop: 20,
    },
    text: {
      marginHorizontal: 40,
      fontSize: 15,
      color: '#FFFFFF',
      marginTop: 15,
    },
    star: {
      color: '#FF0000',
    },
    checkboxcontainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 15,
      marginHorizontal: 20,
    },
  });
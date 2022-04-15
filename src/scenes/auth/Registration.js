import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import translate from './../../translations/configTranslations';
import {RegistrationvalidationSchema} from '../../utils/schema';
import dropDownList from '../../utils/constants/dropDownList';
import DropDown from '../../components/atoms/DropDown/Dropdown';
const Registration = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: translate('register.Var'), selected: true},
    {id: 2, value: false, name: translate('register.Vadhu'), selected: false},
  ]);
  const onRadioBtnClick = item => {
    let updatedState = isLiked.map(isLikedItem =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };

  return (
    <RootScreen>
      <ScrollView>
        <Formik
          initialValues={{
            profilemaker: '',
            firstname: '',
            lastname: '',
            emailid: '',
            mobilenumber: '',
            birthdate: '',
            caste: '',
            country: '',
            state: '',
            city: '',
            password: '',
          }}
          validationSchema={RegistrationvalidationSchema}
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

                <Text style={styles.navbarText}>Registration</Text>
              </View>
              <View style={styles.profileContainer}>
                <Image
                  style={styles.upload_img}
                  source={require('../../assets/upload.png')}
                />
              </View>
              <View style={styles.radioButtonContainer}>
                {isLiked.map(item => (
                  <View style={styles.ButtonContainer}>
                    <TouchableOpacity
                      onPress={() => onRadioBtnClick(item)}
                      style={styles.radioButton}>
                      {item.selected ? (
                        <View style={styles.radioButtonIcon} />
                      ) : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
                      <Text style={styles.radioButtonText}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
              <>
                <DropDown
                style={styles.dropdownMargin}
                  items={dropDownList}
                  selectText={translate('register.ProfileName')}
                  selectedItems={values.name}
                  onSelectedItemsChange={value => setFieldValue('name', value)}
                />

                {errors.profilemaker && touched.profilemaker ? (
                  <Text style={styles.error}>{errors.profilemaker}</Text>
                ) : null}
                <View style={styles.dataContainer}>
                  <TextInput
                    onChangeText={handleChange('firstname')}
                    onBlur={handleBlur('firstname')}
                    value={values.Source}
                    style={styles.textinput}
                    placeholder={translate('register.FirstName')}
                    placeholderTextColor={'#666666'}
                  />

                  <TextInput
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    value={values.Source}
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor={'#666666'}
                  />
                </View>
                <View style={styles.errorText}>
                  {errors.firstname && touched.firstname ? (
                    <Text style={styles.error}>{errors.firstname}</Text>
                  ) : null}
                  <View style={styles.lastnameError}>
                    {errors.lastname && touched.lastname ? (
                      <Text style={styles.error}>{errors.lastname}</Text>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TextInput
                    onChangeText={handleChange('emailid')}
                    onBlur={handleBlur('emailid')}
                    value={values.Source}
                    style={styles.commonInput}
                    placeholder={translate('register.EmailId')}
                    placeholderTextColor={'#666666'}
                  />
                  {errors.emailid && touched.emailid ? (
                    <Text style={styles.error}>{errors.emailid}</Text>
                  ) : null}
                  <TextInput
                    onChangeText={handleChange('mobilenumber')}
                    onBlur={handleBlur('mobilenumber')}
                    value={values.Source}
                    style={styles.commonInput}
                    placeholder={translate('register.MobileNumber')}
                    placeholderTextColor={'#666666'}
                  />
                  {errors.mobilenumber && touched.mobilenumber ? (
                    <Text style={styles.error}>{errors.mobilenumber}</Text>
                  ) : null}
                </View>

                <View style={styles.birthdayInput}>
                  <DropDown
                    items={dropDownList}
                    selectText={translate('register.birthdate')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value =>
                      setFieldValue('name', value)
                    }
                  />
                </View>
                {errors.birthdate && touched.birthdate ? (
                  <Text style={styles.error}>{errors.birthdate}</Text>
                ) : null}
                <Text style={styles.text}>
                  <Text style={styles.star}>*</Text>
                  {translate('register.Note')}
                </Text>
                
                  <DropDown
                  style={styles.inputMargin}
                    items={dropDownList}
                    selectText={translate('register.caste')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value =>
                      setFieldValue('name', value)
                    }
                  />
                {errors.caste && touched.caste ? (
                  <Text style={styles.error}>{errors.caste}</Text>
                ) : null}
              
                  <DropDown
                  style={styles.inputMargin}
                    items={dropDownList}
                    selectText={translate('register.country')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value =>
                      setFieldValue('name', value)
                    }
                  />
                {errors.country && touched.country ? (
                  <Text style={styles.error}>{errors.country}</Text>
                ) : null}
                  <DropDown
                  style={styles.inputMargin}
                    items={dropDownList}
                    selectText={translate('register.state')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value =>
                      setFieldValue('name', value)
                    }
                  />
                {errors.state && touched.state ? (
                  <Text style={styles.error}>{errors.state}</Text>
                ) : null}
                
                  <DropDown
                   style={styles.inputMargin}
                    items={dropDownList}
                    selectText={translate('register.city')}
                    selectedItems={values.name}
                    onSelectedItemsChange={value =>
                      setFieldValue('name', value)
                    }
                  />
                {errors.city && touched.city ? (
                  <Text style={styles.error}>{errors.city}</Text>
                ) : null}
                <View style={styles.inputMargin}>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.Source}
                    style={styles.commonInput}
                    placeholder={translate('register.enterpassword')}
                    placeholderTextColor={'#666666'}
                  />
                </View>
                {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
                <Text style={styles.text}>
                  <Text style={styles.star}>*</Text>{' '}
                  {translate('register.Note@')}
                </Text>
                <View style={styles.checkboxcontainer}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <Text style={styles.term}>
                    {' '}
                    {translate('register.checkbox')}{' '}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleSubmit}>
                  <Text style={styles.text_btn}>
                    {translate('register.create Account')}
                  </Text>
                </TouchableOpacity>
              </>
            </>
          )}
        </Formik>
      </ScrollView>
    </RootScreen>
  );
};

export default Registration;

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
  errorText:{
flexDirection:'row'
  },
  dropdownMargin: {
    marginTop: 40,
  },
  inputMargin: {
    marginTop: 20,
  },
  lastnameError: {
    marginHorizontal: 30,
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
  ageContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  birthdayInput: {
    marginTop: 5,
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
    backgroundColor: 'transparent',
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
    height: 12,
    width: 12,
    borderRadius: 9,
    backgroundColor: 'white',
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

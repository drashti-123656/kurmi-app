import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';
import {Formik} from 'formik';
import DropDown from '../../components/organisms/DropDown';
import dropDownList from '../../utils/constant';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import translate from './../../translations/configTranslations';


const AdvanceSearch = ({navigation}) => {
  const [gender, setGender] = useState([
    {id: 1, value: true, name: 'Male', selected: true},
    {id: 2, value: false, name: 'Female', selected: false},
  ]);
  const [status, setStatus] = useState([
    {id: 3, value: true, name: 'Married', selected: true},
    {id: 4, value: false, name: 'Unmarried', selected: false},
  ]);

  const onRadioBtnClick = item => {
    let updatedState = gender.map(genderItem =>
      genderItem.id === item.id
        ? {...genderItem, selected: true}
        : {...genderItem, selected: false},
    );
    setGender(updatedState);
  };

  const onPressRadioBtn = item => {
    let updatedState = status.map(statusItem =>
      statusItem.id === item.id
        ? {...statusItem, selected: true}
        : {...statusItem, selected: false},
    );
    setStatus(updatedState);
  };

  return (
    <RootScreen>
      <ScrollView>
        <Text style={styles.title}>Gender</Text>

        <View style={styles.radioButtonContainer}>
          {gender.map(item => (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                onPress={() => onRadioBtnClick(item)}
                style={styles.radioButton}>
                {item.selected ? <View style={styles.radioButtonIcon} /> : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
                <Text style={styles.radioButtonText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Formik
          initialValues={{
            name: '',
            subcaste: '',
            manglik: '',
            country: '',
            state: '',
            city: '',
            education: '',
            occupation: '',
            profession: '',
            income: '',
          }}
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
            <View>
              <DropDown
                items={dropDownList}
                selectText={translate('advanceSearch.Profile')}
                selectedItems={values.name}
                onSelectedItemsChange={value =>
                  setFieldValue('name', value)
                }
              />

              <ExtendedTextInput
                onChangeText={handleChange('subcaste')}
                onBlur={handleBlur('subcaste')}
                value={values.subcaste}
                placeholder="Subcaste"
                placeholderTextColor={'#666666'}
              />

              {errors.subcaste && touched.subcaste ? (
                <Text style={styles.error}>{errors.subcaste}</Text>
              ) : null}
              <Text style={styles.title}>Marital Status</Text>
              <View style={styles.radioButtonContainer}>
                {status.map(item => (
                  <View style={styles.ButtonContainer}>
                    <TouchableOpacity
                      onPress={() => onPressRadioBtn(item)}
                      style={styles.radioButton}>
                      {item.selected ? (
                        <View style={styles.radioButtonIcon} />
                      ) : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onPressRadioBtn(item)}>
                      <Text style={styles.radioButtonText}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
              <View style={styles.height}>
                <ExtendedTextInput
                  onChangeText={handleChange('heightFrom')}
                  onBlur={handleBlur('heightFrom')}
                  value={values.heightFrom}
                  placeholder="Height From"
                  placeholderTextColor={'#666666'}
                />

                {errors.heightFrom && touched.heightFrom ? (
                  <Text style={styles.error}>{errors.heightFrom}</Text>
                ) : null}

                <ExtendedTextInput
                  onChangeText={handleChange('heightTo')}
                  onBlur={handleBlur('heightTo')}
                  value={values.heightTo}
                  placeholder="Height To"
                  placeholderTextColor={'#666666'}
                />

                {errors.heightTo && touched.heightTo ? (
                  <Text style={styles.error}>{errors.heightTo}</Text>
                ) : null}
              </View>

              <ExtendedTextInput
                onChangeText={handleChange('manglik')}
                onBlur={handleBlur('manglik')}
                value={values.manglik}
                placeholder="Manglik"
                placeholderTextColor={'#666666'}
              />
              {errors.manglik && touched.manglik ? (
                <Text style={styles.error}>{errors.manglik}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('country')}
                onBlur={handleBlur('country')}
                value={values.country}
                placeholder="Country"
                placeholderTextColor={'#666666'}
              />

              {errors.country && touched.country ? (
                <Text style={styles.error}>{errors.country}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('state')}
                onBlur={handleBlur('state')}
                value={values.state}
                placeholder="State"
                placeholderTextColor={'#666666'}
              />

              {errors.state && touched.state ? (
                <Text style={styles.error}>{errors.state}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
                placeholder="City"
                placeholderTextColor={'#666666'}
              />

              {errors.city && touched.city ? (
                <Text style={styles.error}>{errors.city}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('education')}
                onBlur={handleBlur('education')}
                value={values.education}
                placeholder="Education"
                placeholderTextColor={'#666666'}
              />

              {errors.education && touched.education ? (
                <Text style={styles.error}>{errors.education}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('occupation')}
                onBlur={handleBlur('occupation')}
                value={values.occupation}
                placeholder="Occupation"
                placeholderTextColor={'#666666'}
              />

              {errors.occupation && touched.occupation ? (
                <Text style={styles.error}>{errors.occupation}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('profession')}
                onBlur={handleBlur('profession')}
                value={values.profession}
                placeholder="Profession"
                placeholderTextColor={'#666666'}
              />

              {errors.profession && touched.profession ? (
                <Text style={styles.error}>{errors.profession}</Text>
              ) : null}

              <ExtendedTextInput
                onChangeText={handleChange('income')}
                onBlur={handleBlur('income')}
                value={values.income}
                placeholder="Income"
                placeholderTextColor={'#666666'}
              />

              {errors.income && touched.income ? (
                <Text style={styles.error}>{errors.income}</Text>
              ) : null}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text
                  style={styles.text_btn}
                  onPress={() => navigation.goBack()}>
                  खोजे
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </RootScreen>
  );
};

export default AdvanceSearch;

const styles = StyleSheet.create({
  title: {
    fontWeight: '400',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 30,
    color: 'white',
  },
  height: {
    flexDirection: 'row',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
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
  radioButtonText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '400',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#DC1C28',
    height: hp(7),
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 40,
  },
  text_btn: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
});

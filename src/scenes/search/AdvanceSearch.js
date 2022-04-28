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
import dropDownList from '../../utils/constants/dropDownList';
import translate from '../../translations/configTranslations';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import { manglikSchema } from '../../utils/schema/manglikSchema';



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
            heightFrom: '',
            heightTo: '',
            manglik: '',
            country: '',
            state: '',
            city: '',
            education: '',
            occupation: '',
            profession: '',
            income: '',
          }}
          validationSchema={manglikSchema}
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
                onSelectedItemsChange={value => setFieldValue('name', value)}
              />

              <DropDown
                items={dropDownList}
                selectText={'Subcaste'}
                selectedItems={values.subcaste}
                onSelectedItemsChange={value =>
                  setFieldValue('subcaste', value)
                }
              />
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
                <DropDown
                  items={dropDownList}
                  selectText={'Height From'}
                  selectedItems={values.heightFrom}
                  onSelectedItemsChange={value =>
                    setFieldValue('heightFrom', value)
                  }
                />

                <DropDown
                  items={dropDownList}
                  selectText={'Height To'}
                  selectedItems={values.heightTo}
                  onSelectedItemsChange={value =>
                    setFieldValue('heightTo', value)
                  }
                />
              </View>
                <TextInput
                  onChangeText={handleChange('manglik')}
                  onBlur={handleBlur('manglik')}
                  value={values.manglik}
                  style={styles.textinput}
                  placeholder="Manglik"
                  placeholderTextColor={'#666666'}
                />
                {errors.manglik && touched.manglik ? (
                  <Text style={styles.error}>{errors.manglik}</Text>
                ) : null}


              <DropDown
                items={dropDownList}
                selectText={'Country'}
                selectedItems={values.country}
                onSelectedItemsChange={value => setFieldValue('country', value)}
              />

              <DropDown
                items={dropDownList}
                selectText={'State'}
                selectedItems={values.state}
                onSelectedItemsChange={value => setFieldValue('state', value)}
              />

              <DropDown
                items={dropDownList}
                selectText={'City'}
                selectedItems={values.city}
                onSelectedItemsChange={value => setFieldValue('city', value)}
              />

              <DropDown
                items={dropDownList}
                selectText={'Education'}
                selectedItems={values.education}
                onSelectedItemsChange={value =>
                  setFieldValue('education', value)
                }
              />

              <DropDown
                items={dropDownList}
                selectText={'Occupation'}
                selectedItems={values.occupation}
                onSelectedItemsChange={value =>
                  setFieldValue('occupation', value)
                }
              />

              <DropDown
                items={dropDownList}
                selectText={'Profession'}
                selectedItems={values.profession}
                onSelectedItemsChange={value =>
                  setFieldValue('profession', value)
                }
              />

              <DropDown
                items={dropDownList}
                selectText={'Income'}
                selectedItems={values.income}
                onSelectedItemsChange={value => setFieldValue('income', value)}
              />
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
  textinput: {
    backgroundColor: 'white',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height: hp(7),
    color: 'black',
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
    marginRight: 30,
    color: 'red',
    textAlign: 'right',
  },
});

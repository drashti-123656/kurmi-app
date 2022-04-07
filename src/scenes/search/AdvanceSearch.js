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
import * as Yup from 'yup';
import {Formik} from 'formik';
import ExtendedTextInput from '../../components/atoms/inputs/ExtendedTextInput';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('*Required'),
  mobileno: Yup.number().min(10).required('*Required'),
});

var gender = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
];

const AdvanceSearch = () => {
  const [selected, setSelected] = useState(0);
  return (
    <RootScreen>
      <ScrollView>
        <Text style={styles.title}>Gender</Text>
        <View style={styles.radioButton}>
          <RadioForm
            initial={0}
            gender={gender}
            onPress={value => setSelected(value)}
          />
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
              <ExtendedTextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="प्रोफाइल बनने वाला"
                placeholderTextColor={'#666666'}
              />
              {errors.name && touched.name ? (
                <Text style={styles.error}>{errors.name}</Text>
              ) : null}

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
              {/* <View style={styles.radioButton}>
                <RadioButton value={setSelected} title="Married" />
                <RadioButton value={setSelected} title="Unmarried" />
              </View> */}
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
                <Text style={styles.text_btn}>खोजे</Text>
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
  radioButton: {
    flexDirection: 'row',
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
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    textAlign: 'right',
  },
});

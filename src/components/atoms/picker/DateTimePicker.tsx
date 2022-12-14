import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment';
import ExtendedText from '../text/ExtendedText';

interface DateTimePickerProps {
  value: Date;
  onSelect: (value: Date) => void;
  mode: 'datetime' | 'date' | 'time';
  style: 'marginTop' | 'marginBottom';
  placeholder: 'string' | 'string';
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  onSelect,
  mode,
  style,
}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onSelect(date);
  }, [date, value]);

  return (
    <View>
      <TouchableOpacity
        style={[styles.textinput, style]}
        onPress={() => setOpen(true)}>
        {moment(value).format('DD/MM/YYYY') !==
        moment().format('DD/MM/YYYY') ? (
          <ExtendedText>
            {mode === 'date'
              ? moment(value).format('DD/MM/YYYY')
              : moment(value).format('HH:mm')}
          </ExtendedText>
        ) : (
          <Text>select DOB</Text>
        )}
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={value}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode={mode}
      />
    </View>
  );
};
export default DateTimePicker;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,

    borderRadius: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height: hp(7),
    color: 'black',
  },
  input: {
    flex: 1,
    color: 'black',
  },
});

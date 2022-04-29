import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Modal, Pressable} from 'react-native';
import {Calendar} from 'react-native-calendars';
import EStyleSheet from 'react-native-extended-stylesheet';

const CalendarPicker = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
     
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowModal(true)}>
           {props.value.dateString ? (
          <Text style={{color: 'black'}}>{props.value.dateString}</Text>
          ) : (
          <Text style={{color: 'black'}}>{props.placeholder}</Text>
          )}
        </TouchableOpacity>
    
       
    

      <Modal animationType="fade" visible={showModal} transparent={true}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Pressable
            onPress={() => setShowModal(false)}
            style={{
              height: '100%',
              width: '100%',
              opacity: 0.7,
              backgroundColor: '#000',
              position: 'absolute',
            }}> </Pressable>
          <View style={styles.modalCont}>
            <Calendar
              onDayPress={day => {
                props.onSelect(day);
                setShowModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CalendarPicker;

const styles = EStyleSheet.create({
  h1: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginTop: 15,
    color: '$TEXT',
  },
  modalCont: {
    padding: 10,
    flex: 0.5,
    marginHorizontal: 20,
    backgroundColor: 'gray',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '$PRIMARY',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  h1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  h2: {
    // color: '$TEXT',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    // borderBottomColor: '$ALPHA_TEXT',
    borderBottomWidth: 1,
  },
  input: {
    height: 55,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    color: 'black',
  },
});
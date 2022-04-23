import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Whatsapp from '../scenes/auth/Whatsapp';
import Login from '../scenes/auth/Login';
import Registration from '../scenes/auth/registration/Registration';
import DharmikJankari from '../scenes/auth/registration/DharmikJankari';
import Sampark from '../scenes/auth/registration/Sampark';
import ParivarikParichay from '../scenes/auth/registration/ParivarikParichay';
import Personalinformation from '../scenes/auth/registration/personalInformation';
import EStyleSheet from 'react-native-extended-stylesheet';
const Stack = createNativeStackNavigator();

const RegistrationStack = () => {
  return (
    <Stack.Navigator      screenOptions={{
      headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
      headerTintColor: '#fff',
    }}>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Personalinformation"
        component={Personalinformation}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="DharmikJankari"
        component={DharmikJankari}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Sampark"
        component={Sampark}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="ParivarikParichay"
        component={ParivarikParichay}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default RegistrationStack;

const styles = StyleSheet.create({});

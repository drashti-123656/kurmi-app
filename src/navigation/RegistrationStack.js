import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../scenes/auth/registration/Registration';
import DharmikJankari from '../scenes/auth/registration/DharmikJankari';
import Sampark from '../scenes/auth/registration/Sampark';
import ParivarikParichay from '../scenes/auth/registration/ParivarikParichay';
import PersonalInformation from '../scenes/auth/registration/PersonalInformation';
import EStyleSheet from 'react-native-extended-stylesheet';
import translate from './../translations/configTranslations';
// import Forgotpassword from './../scenes/auth/forgotPassword/Forgotpassword';
const Stack = createNativeStackNavigator();

const RegistrationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: EStyleSheet.value('$PRIMARY')},
        headerTintColor: '#fff',
      }}>

{/* <Stack.Screen
        name="Forgotpassword"
        component={Forgotpassword}
        options={{
          headerShown: true,
          headerTitle: translate('login.ForgotPassword'),
        }}
      /> */}
        
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: true,
          headerTitle: translate('register.registration'),
        }}
      />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
        options={{
          headerShown: true,
          headerTitle: translate('Vyaktigatdata.Personal information'),
        }}
      />
      <Stack.Screen
        name="DharmikJankari"
        component={DharmikJankari}
        options={{
          headerShown: true,
          headerTitle: translate('Dharmikjankari.Dharmik Jankari'),
        }}
      />
      <Stack.Screen
        name="Sampark"
        component={Sampark}
        options={{
          headerShown: true,
          headerTitle: translate('samPark.samparkheader'),
        }}
      />
      <Stack.Screen
        name="ParivarikParichay"
        component={ParivarikParichay}
        options={{
          headerShown: true,
          headerTitle: translate('ParivarikParichay.parivarikHeader'),
        }}
      />
    </Stack.Navigator>
  );
};

export default RegistrationStack;

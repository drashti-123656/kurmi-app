import registrationReducer from '../scenes/auth/registration/redux/registrationReducer';
import authReducer from './../scenes/auth/redux/authReducer';

const rootReducer = {
  auth: authReducer,
  registration: registrationReducer
};

export default rootReducer;

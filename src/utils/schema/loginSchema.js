import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const LoginSchema = Yup.object().shape({
  login: Yup.string().required(translate('login.IdPlaceholderRequired')),
  password: Yup.string()
    .required(translate('login.enterPassword'))
    // .oneOf([Yup.ref('password'), null])
    // .min(8, translate('register.passwordhave8Character'))
    // .oneOf([Yup.ref('password'), null])
    // .matches(/[a-z]/, translate('register.passwordhaveLowerCase'))
    // .oneOf([Yup.ref('password'), null])
    // .matches(/[A-Z]/, translate('register.passwordhaveUpperCase')),
});



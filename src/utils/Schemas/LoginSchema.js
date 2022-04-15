import * as Yup from 'yup';
import translate from './../../translations/configTranslations';

export const LoginSchema = Yup.object().shape({
    login: Yup.string().required(translate('login.IdPlaceholderRequired')),
    password: Yup
    .string()
    .required(translate('login.enterPassword'))
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      translate('login.passwordMustHave')
      
    ),
});

export const WhatsappSchema = Yup.object().shape({
    name: Yup.string().required(translate('whatsapp.NameRequired')).min(3, "Name must be at least 3 characters"),
    whatsappno: Yup.string()
    .required(translate('whatsapp.fieldRequired'))
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
});
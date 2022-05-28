import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const samparkSchema = Yup.object().shape({
  mobileNo: Yup.string()
    .required(translate('samPark.Required'))
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      translate('samPark.PhoneNumberValid'),
    )
    .min(10, translate('samPark.itMustBe10Digits'))
    .max(10, translate('samPark.itMustBe10Digits')),
  whatsAppNo: Yup.string()
    .required(translate('samPark.Required'))
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      translate('samPark.PhoneNumberValid'),
    )

    .min(10, translate('samPark.itMustBe10Digits'))
    .max(10, translate('samPark.itMustBe10Digits'))
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      translate('samPark.PhoneNumberValid'),
    ),
  presentAdd: Yup.string().required(translate('samPark.Required')),
  permanentAdd: Yup.string().required(translate('samPark.Required')),
});

export const parivarikSchema = Yup.object().shape({
  fatherName: Yup.string()
    .required(translate('ParivarikParichay.NameRequired'))
    .matches(/^[A-Za-z ]*$/, translate('ParivarikParichay.validName'))
    .min(3, translate('ParivarikParichay.nameMustbe3')),
  fatherOccupation: Yup.number().required(
    translate('ParivarikParichay.Required'),
  ),
  motherName: Yup.string()
    .required(translate('ParivarikParichay.NameRequired'))
    .matches(/^[A-Za-z ]*$/, translate('ParivarikParichay.validName'))
    .min(3, translate('ParivarikParichay.nameMustbe3')),
  motherMayaka: Yup.string().required(translate('ParivarikParichay.Required')),
  brother: Yup.string().required(translate('ParivarikParichay.Required')),
  sister: Yup.string().required(translate('ParivarikParichay.Required')),
  land: Yup.number().required(translate('ParivarikParichay.Required')),
});
export const RegistrationvalidationSchema = Yup.object({
  profilemaker: Yup.number().required(translate('register.Required')),
  firstname: Yup.string()
    .required(translate('register.Required'))
    .matches(/^[A-Za-z ]*$/, translate('register.validName'))
    .min(3, translate('register.nameMustbe3')),
  lastname: Yup.string()
    .required(translate('register.Required'))
    .matches(/^[A-Za-z ]*$/, translate('register.validName'))
    .min(3, translate('register.nameMustbe3')),
  emailid: Yup.string()
    .required(translate('register.Required'))
    .email(translate('register.InvalidEmail')),
  mobilenumber: Yup.string()
    .required(translate('register.Required'))
    .typeError(translate('register.NotLookLikePhnno'))
    .min(10, translate('register.itMustBe10Digits'))
    .max(10, translate('register.itMustBe10Digits'))

    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      translate('whatsapp.phoneNumberNotValid'),
    ),
  birthdate: Yup.date().max(
    new Date(Date.now() - 662256000000),
    translate('register.PleaseChoose21Above'),
  ),
  country: Yup.number().required(translate('register.Required')),
  state: Yup.number().required(translate('register.Required')),
  city: Yup.number().required(translate('register.Required')),
  password: Yup.string()
    .required(translate('register.validPassword'))
    .oneOf([Yup.ref('password'), null])
    .min(8, translate('register.passwordhave8Character'))
    .oneOf([Yup.ref('password'), null])
    .matches(/[a-z]/, translate('register.passwordhaveLowerCase'))
    .oneOf([Yup.ref('password'), null])
    .matches(/[A-Z]/, translate('register.passwordhaveUpperCase')),
});

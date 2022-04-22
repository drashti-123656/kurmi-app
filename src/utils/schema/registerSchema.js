import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const samparkSchema = Yup.object().shape({
  mobileNo: Yup.string()
    .required(translate('samPark.Required'))
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      translate('samPark.PhoneNumberValid')
    ),
    whatsAppNo: Yup.string()
    .required(translate('samPark.Required'))
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      translate('samPark.WhatsappNumberValid')
    ),
    presentAdd: Yup.string().required(translate('samPark.Required')),
    permanentAdd: Yup.string().required(translate('samPark.Required')),
});

export const parivarikSchema = Yup.object().shape({
    fatherName: Yup.string().required(translate('ParivarikParichay.Required')),
    fatherOccupation: Yup.string().required(translate('ParivarikParichay.Required')),
    motherName: Yup.string().required(translate('ParivarikParichay.Required')),
    motherMayaka: Yup.string().required(translate('ParivarikParichay.Required')),
    brother: Yup.string().required(translate('ParivarikParichay.Required')),
    sister: Yup.string().required(translate('ParivarikParichay.Required')),
    land: Yup.string().required(translate('ParivarikParichay.Required')),
});
export const RegistrationvalidationSchema = Yup.object({
    // profilemaker: Yup.string().required('*Required'),
    // firstname: Yup.string().required('*Required'),
    // lastname: Yup.string().required('*Required'),
    // emailid: Yup.string().required('*Required'),
    // mobilenumber: Yup.string().required('*Required'),
    // birthdate: Yup.string().required('*Required'),
    // caste: Yup.string().required('*Required'),
    // country: Yup.string().required('*Required'),
    // state: Yup.string().required('*Required'),
    // city: Yup.string().required('*Required'),
    // password: Yup.string().required('*Required'),
  });

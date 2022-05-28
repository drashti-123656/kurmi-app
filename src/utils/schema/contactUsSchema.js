import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const contactUsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required(translate('ContactUs.NameRequired'))
    .matches(/^[A-Za-z ]*$/, translate('ContactUs.validName'))
    .min(3, translate('ContactUs.nameMustbe3')),
  mobileNo: Yup.string()
    .required(translate('ContactUs.Required'))
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      translate('ContactUs.PhoneNumberValid'),
    )
    .min(10, translate('ContactUs.itMustBe10Digits'))
    .max(10, translate('ContactUs.itMustBe10Digits')),
});

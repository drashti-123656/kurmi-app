import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const WhatsappSchema = Yup.object().shape({
    name: Yup.string()
      .required(translate('whatsapp.NameRequired'))
      .matches(/^[A-Za-z ]*$/, translate('whatsapp.validName'))
      .min(3, translate('whatsapp.nameMustbe3')),
    whatsappno: Yup.string()
      .required(translate('whatsapp.fieldRequired'))
      .min(10, translate('whatsapp.itMustBe10Digits'))
      .max(10, translate('whatsapp.itMustBe10Digits'))
      .typeError(translate('whatsapp.NotLookLikePhnno'))
  
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        translate('whatsapp.phoneNumberNotValid'),
      ),
  });
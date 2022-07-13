import * as Yup from 'yup';
import translate from '../../translations/configTranslations';
export const EditProfileSchema = Yup.object({
  firstname: Yup.string()
    .trim()
    .required(translate('register.Required'))
    .matches(/^[A-Za-z ]*$/, translate('register.validName'))
    .min(3, translate('register.nameMustbe3')),
  lastname: Yup.string()
    .trim()
    .required(translate('register.Required'))
    .matches(/^[A-Za-z ]*$/, translate('register.validName'))
    .min(3, translate('register.nameMustbe3')),
});

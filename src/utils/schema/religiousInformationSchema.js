import * as Yup from 'yup';
import translate from './../../translations/configTranslations';

export const ReligiousinformationvalidationSchema = Yup.object({
  gotra: Yup.string().required(translate('Dharmikjankari.Required')),
  birthplace: Yup.string()
    .required(translate('Dharmikjankari.Required'))
    .matches(/^[A-Za-z ]*$/, translate('Dharmikjankari.validName')),
  auspicious: Yup.number().required(translate('Dharmikjankari.Required')),
});

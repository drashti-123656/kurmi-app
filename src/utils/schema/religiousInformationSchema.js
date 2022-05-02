import * as Yup from 'yup';
import translate from './../../translations/configTranslations';

export const ReligiousinformationvalidationSchema = Yup.object({
    gotra: Yup.number().required(translate('Dharmikjankari.Required')),
    native: Yup.number().required(translate('Dharmikjankari.Required')),
     birthtime: Yup.date().required(translate('Dharmikjankari.Required')),
    birthplace: Yup.string().required(translate('Dharmikjankari.Required'))
    .matches(/^[A-Za-z ]*$/, translate('Dharmikjankari.validName')),
    zodiacsign: Yup.number().required(translate('Dharmikjankari.Required')),
    // auspicious: Yup.number().required(translate('Dharmikjankari.Required')),
   
  })
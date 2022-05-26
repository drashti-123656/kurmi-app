import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const advanceSearchSchema = Yup.object().shape({
  // profilemaker: Yup.number().required(translate('register.Required')),
  // gotra: Yup.number().required(translate('Dharmikjankari.Required')),
  heightFrom: Yup.number().required(translate('Vyaktigatdata.Required')),
  heightTo: Yup.number().required(translate('Vyaktigatdata.Required')),
  // auspicious: Yup.number().required(translate('Dharmikjankari.Required')),
  // country: Yup.number().required(translate('register.Required')),
  // state: Yup.number().required(translate('register.Required')),
  // city: Yup.number().required(translate('register.Required')),
  // education: Yup.number().required(translate('Vyaktigatdata.Required')),
  // job: Yup.number().required(translate('Vyaktigatdata.Required')),
});



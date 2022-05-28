import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const PersonalinformationSchema = Yup.object({
  height: Yup.number().required(translate('Vyaktigatdata.Required')),
  maritalstatus: Yup.number().required(translate('Vyaktigatdata.Required')),
  education: Yup.number().required(translate('Vyaktigatdata.Required')),
  job: Yup.number().required(translate('Vyaktigatdata.Required')),

  disability: Yup.number().required(translate('Vyaktigatdata.Required')),
});

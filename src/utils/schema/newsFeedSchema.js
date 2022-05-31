import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const AgevalidationSchema = Yup.object().shape({
  ageFrom: Yup.number().required(translate('NewsFeed.Required')),
  ageTo: Yup.number().required(translate('NewsFeed.Required')),
});

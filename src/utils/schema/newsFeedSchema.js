import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const agevalidationSchema = Yup.object().shape({
  ageFrom: Yup.number()
    .required(translate('NewsFeed.Required'))
    .test('Is positive?', translate('NewsFeed.Not Valid'), value => value > 0),
  ageTo: Yup.number()
    .required(translate('NewsFeed.Required'))
    .test('Is positive?', translate('NewsFeed.Not Valid'), value => value > 0),
});

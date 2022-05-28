import * as Yup from 'yup';
import translate from '../../translations/configTranslations';

export const passwordChangeValidationSchema = Yup.object().shape({
  currentPassword: Yup.string().required('*Required'),
  NewPassword: Yup.string().required('*Required'),
  Retypenewpassword: Yup.string()
    .required('*Required')
    .oneOf([Yup.ref('NewPassword'), null], 'Passwords must match'),
});

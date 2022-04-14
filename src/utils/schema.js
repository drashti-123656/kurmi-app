import * as Yup from 'yup';

export const ManglikSchema = Yup.object({
    manglik: Yup.string().required('*Required'),
  });
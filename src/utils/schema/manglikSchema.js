import * as Yup from 'yup';

export const manglikSchema = Yup.object().shape({
    manglik: Yup.number().required('*Required'),
  });
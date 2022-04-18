import * as Yup from 'yup';

export const ReligiousinformationvalidationSchema = Yup.object({
    caste: Yup.string().required('*Required'),
    native: Yup.string().required('*Required'),
    birthtime: Yup.string().required('*Required'),
    birthplace: Yup.string().required('*Required'),
    zodiacsign: Yup.string().required('*Required'),
    auspicious: Yup.string().required('*Required'),
    bloodgroup: Yup.string().required('*Required'),
  })
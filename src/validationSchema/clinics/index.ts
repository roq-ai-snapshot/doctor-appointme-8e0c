import * as yup from 'yup';

export const clinicValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  image: yup.string().nullable(),
  name: yup.string().required(),
  location: yup.string().nullable(),
  clinic_revenue: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  clinc_id: yup.string().nullable(),
});

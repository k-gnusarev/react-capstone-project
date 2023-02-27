import * as Yup from 'yup';

const errorMessages = {
  required: 'This field is required',
  email: 'Email address invalid',
  max140: 'Maximum length is 140 characters',
  max256: 'Maximum length is 256 characters',
  max512: 'Maximum length is 512 characters',
  min1: 'Minimum length is 1 character',
  min8: 'Minimum length is 8 characters'
}

export const SignupValidationSchema = Yup.object({
  email: Yup.string()
    .email(errorMessages.email)
    .required(errorMessages.required),
  password: Yup.string()
    .min(8, errorMessages.min8)
    .max(256, errorMessages.max256)
    .required(errorMessages.required),
  name: Yup.string()
    .min(1, errorMessages.min1)
    .max(512, errorMessages.max512),
  id: Yup.string().required(errorMessages.required)
});

export const LoginValidationSchema = Yup.object({
  id: Yup.string()
    .required(errorMessages.required),
  password: Yup.string()
    .min(8, errorMessages.min8)
    .max(256, errorMessages.max256)
    .required(errorMessages.required),
});

export const TweetValidationSchema = Yup.object({
  text: Yup.string()
    .min(1, errorMessages.min1)
    .max(140, errorMessages.max140)
});

import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Username too Short!')
    .max(40, 'Username too Long!')
    .required('Should Not be Empty'),
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string()
    .min(8, 'Password too Short!')
    .max(20, 'Password too Long!')
    .required('Password Required '),
  confirmPassword: Yup.string()
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Passwords do not match.',
      ),
    })
    .required('Confirm Password Required'),
});

export const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string().required('Password Required'),
});

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  newPassword: Yup.string()
    .min(8, 'Password too Short!')
    .max(20, 'Password too Long!')
    .required('Password Required'),
  confirmPassword: Yup.string()
    .when('newPassword', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('newPassword')],
        'Passwords do not match.',
      ),
    })
    .required('Confirm Password Required'),
});

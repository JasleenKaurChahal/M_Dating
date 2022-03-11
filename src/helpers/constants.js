import {Linking} from 'react-native';
import {images} from '../assets/images';

export const SocialButtonLogin = [
  {
    title: 'Login with FaceBook',
    colors: ['#4c669f', '#3b5998', '#192f6a'],
    image: images.facebook,
    handlePress: () => Linking.openURL('https://www.facebook.com/'),
  },
  {
    title: 'Login with Phone Number',
    colors: ['#3EAF28', '#31A350'],
    image: images.phone,
    handlePress: () =>
      Linking.openURL(
        'https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1',
      ),
  },
  {
    title: 'LogIn with Apple',
    colors: ['#333333', '#000000'],
    image: images.apple,
    handlePress: () =>
      Linking.openURL('https://appleid.apple.com/#!&page=signin'),
  },
];

export const SocialButtonSignUp = [
  {
    title: 'SignUp with FaceBook',
    colors: ['#4c669f', '#3b5998', '#192f6a'],
    image: images.facebook,
    handlePress: () => Linking.openURL('https://www.facebook.com/'),
  },
  {
    title: 'SignUp with Phone Number',
    colors: ['#3EAF28', '#31A350'],
    image: images.phone,
    handlePress: () =>
      Linking.openURL(
        'https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1',
      ),
  },
  {
    title: 'SignUp with Apple',
    colors: ['#333333', '#000000'],
    image: images.apple,
    handlePress: () =>
      Linking.openURL('https://appleid.apple.com/#!&page=signin'),
  },
];

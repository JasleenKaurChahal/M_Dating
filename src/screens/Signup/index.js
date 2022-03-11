import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import Loading from '../Loading';

import {SocialButtonSignUp, SignUpSchema} from '../../helpers';
import {images} from '../../assets/images';

const Signup = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const signUpAction = async values => {
    setLoading(true);
    try {
      console.log(values);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Home');
      }, 2000);
    } catch (err) {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <ScrollView style={styles.scroll}>
      <View style={styles.loginContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.michigan} resizeMode="contain" />
        </View>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={values => signUpAction(values)}>
          {props => (
            <>
              <TextInput
                selectionColor="#F7C505"
                color="#F7C505"
                name="username"
                placeholder="UserName"
                placeholderTextColor="white"
                style={styles.textInput}
                onChangeText={props.handleChange('username')}
                onBlur={props.handleBlur('username')}
                value={props.values.username}
                nextField="email"
              />
              {props.touched.username && (
                <Text style={styles.error}>{props.errors.username}</Text>
              )}
              <TextInput
                selectionColor="#F7C505"
                color="#F7C505"
                name="email"
                placeholder="Email"
                placeholderTextColor="white"
                style={styles.textInput}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                keyboardType="email-address"
                nextField="password"
              />
              {props.touched.email && (
                <Text style={styles.error}>{props.errors.email}</Text>
              )}
              <TextInput
                selectionColor="#F7C505"
                color="#F7C505"
                placeholderTextColor="white"
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                value={props.values.password}
                secureTextEntry
                nextField="confirmPassword"
              />
              {props.touched.password && (
                <Text style={styles.error}>{props.errors.password}</Text>
              )}
              <TextInput
                selectionColor="#F7C505"
                color="#F7C505"
                placeholderTextColor="white"
                name="confirmPassword"
                placeholder="Confirm Password"
                sdsd
                style={styles.textInput}
                onChangeText={props.handleChange('confirmPassword')}
                onBlur={props.handleBlur('confirmPassword')}
                value={props.values.confirmPassword}
                secureTextEntry
              />
              {props.touched.confirmPassword && (
                <Text style={styles.error}>{props.errors.confirmPassword}</Text>
              )}
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={styles.submitBlock}>
                <View style={styles.submitButton}>
                  <Text style={styles.submitText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <View style={styles.orBlock}>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.Or}>OR</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        {SocialButtonSignUp.map(item => {
          return (
            <TouchableOpacity
              onPress={item.handlePress}
              style={styles.touchButton}>
              <LinearGradient
                colors={item.colors}
                style={styles.linearGradient}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.logo}
                />
                <Text style={styles.buttonText}>{item.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
        <View style={styles.bottomBox}>
          <Text style={styles.account}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.signUp}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

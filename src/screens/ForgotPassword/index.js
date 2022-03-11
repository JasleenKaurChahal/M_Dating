import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {Formik} from 'formik';

import {styles} from './styles';
import Loading from '../Loading';

import {images} from '../../assets/images';
import {ResetPasswordSchema} from '../../helpers';

const ForgotPassword = ({navigation}) => {
  const forgotPasswordAction = async values => {
    try {
      console.log(values);
      Alert.alert('Check your Email-ID !');
      navigation.navigate('Login');
    } catch (err) {}
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.loginContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.michigan} resizeMode="contain" />
        </View>
        <Formik
          initialValues={{email: '', newPassword: '', confirmPassword: ''}}
          validationSchema={ResetPasswordSchema}
          onSubmit={values => forgotPasswordAction(values)}>
          {props => (
            <>
              <TextInput
                selectionColor="#F7C505"
                color="#F7C505"
                name="email"
                placeholder="UserName / Email"
                placeholderTextColor="white"
                style={styles.textInput}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                keyboardType="email-address"
                nextField="newPassword"
              />
              {props.touched.email && (
                <Text style={styles.error}>{props.errors.email}</Text>
              )}
              <TextInput
                selectionColor="#F7C505"
                color="#F7C505"
                placeholderTextColor="white"
                name="newPassword"
                placeholder="New Password"
                style={styles.textInput}
                onChangeText={props.handleChange('newPassword')}
                onBlur={props.handleBlur('newPassword')}
                value={props.values.password}
                secureTextEntry
                nextField="confirmPassword"
              />
              {props.touched.newPassword && (
                <Text style={styles.error}>{props.errors.newPassword}</Text>
              )}
              <TextInput
                selectionColor="#F7C505"
                color="#F7C505"
                placeholderTextColor="white"
                name="confirmPassword"
                placeholder="Confirm Password"
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
                  <Text style={styles.submitText}>Reset Password</Text>
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
        <View style={styles.bottomBox}>
          <View style={styles.parts}>
            <Text style={styles.account}>Does not have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={styles.signUp}> Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.parts}>
            <Text style={styles.account}>Go back to Login Screen</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.signUp}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

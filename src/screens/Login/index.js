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

import {images} from '../../assets/images';
import {LogInSchema, SocialButtonLogin} from '../../helpers';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const signInAction = async values => {
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

  const navigateToPasswordScreen = () => {
    navigation.navigate('ForgotPassword');
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
          initialValues={{email: '', password: ''}}
          validationSchema={LogInSchema}
          onSubmit={values => signInAction(values)}>
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
              />
              <View style={styles.forgotBlock}>
                {props.touched.password ? (
                  <Text style={styles.errorMsg}>{props.errors.password}</Text>
                ) : (
                  <Text style={styles.block} />
                )}
                <TouchableOpacity
                  style={styles.block}
                  onPress={navigateToPasswordScreen}>
                  <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={styles.submitBlock}>
                <View style={styles.submitButton}>
                  <Text style={styles.submitText}>Log In</Text>
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
        {SocialButtonLogin.map(item => {
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
          <Text style={styles.account}>Does not have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.signUp}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

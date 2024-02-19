import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LoginTextInput from '../components/LoginTextInput';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUp: React.FC = () => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const navigation = useNavigation();

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={-hp('45%')}
        style={{flex: 1}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
          <Text style={styles.lightText}>Create a new account</Text>
        </View>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('TabMain');
          }}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <>
              <LoginTextInput
                placeholderText="User Name"
                showSuccessIcon={true}
                name="username"
                value={values.username}
                onChangeText={handleChange('username')}
              />
              {touched.username && errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
              <LoginTextInput
                placeholderText="Email"
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <LoginTextInput
                placeholderText="Password"
                isPassword={true}
                showPasswordVisibilityButton={true}
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <LoginTextInput
                placeholderText="Confirm Password"
                isPassword={true}
                showPasswordVisibilityButton={true}
                name="confirmPassword"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isChecked}
                  onValueChange={setChecked}
                  tintColors={{true: '#000000', false: '#9B9B9B'}}
                />
                <Text style={styles.lightText}>
                  By creating an account you have to agree with our terms &
                  conditions
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  {backgroundColor: isChecked ? 'black' : '#9B9B9B'},
                ]}
                onPress={() => handleSubmit()}
                disabled={!isChecked}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: wp('55%'),
    height: hp('20%'),
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  textContainer: {
    marginTop: hp('5%'),
    marginLeft: wp('6%'),
  },
  signUpText: {
    fontSize: wp('6%'),
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  lightText: {
    color: '#9B9B9B',
    fontFamily: 'Poppins-Regular',
    fontSize: wp('4%'),
    width: wp('80%'),
  },
  loginButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('7%'),
    width: wp('88%'),
    marginHorizontal: wp('6%'),
    marginVertical: hp('2%'),
    borderRadius: wp('88%') / 2,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: wp('5%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: wp('5.5%'),
    marginVertical: wp('2%'),
    gap: wp('2%'),
  },
  errorText: {
    color: 'red',
    marginLeft: wp('6%'),
    marginTop: -hp('1%'),
  },
});

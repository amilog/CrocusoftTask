import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LoginTextInput from '../components/LoginTextInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.signUpText}>Sign Up</Text>
        <Text style={styles.lightText}>Create an new account</Text>
      </View>
      <LoginTextInput placeholderText="User Name" showSuccessIcon />
      <LoginTextInput placeholderText="Email" />
      <LoginTextInput
        placeholderText="Password"
        isPassword
        showPasswordVisibilityButton
      />
      <LoginTextInput
        placeholderText="Confirm Password"
        isPassword
        showPasswordVisibilityButton
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp('2%'),
        }}>
            
        <Text style={styles.lightText}>
          By creating an account you have to agree with our them & condication
        </Text>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
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
  },
  loginButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('7%'),
    width: wp('88%'),
    marginHorizontal: wp('6%'),
    marginVertical: hp('3%'),
    borderRadius: wp('88%') / 2,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: wp('5%'),
  },
});

import React, {useState} from 'react';
import {
  Button,
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignUp: React.FC = () => {
  const [isChecked, setChecked] = useState<boolean>(false);

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
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setChecked}
            tintColors={{true: '#000000', false: '#9B9B9B'}}
          />
          <Text style={styles.lightText}>
            By creating an account you have to agree with our terms & conditions
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.loginButton,
            {backgroundColor: isChecked ? 'black' : '#9B9B9B'},
          ]}
          onPress={() => {
            if (isChecked) {
              // Koşulları kabul edildiyse işlemleri yap
            } else {
              // Koşulları kabul edilmediyse bir uyarı göster veya başka bir işlem yap
            }
          }}
          disabled={!isChecked}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
});

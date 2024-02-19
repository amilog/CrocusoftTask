import React from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HideIcon from '../assets/svgs/HideIcon';
import ShowIcon from '../assets/svgs/ShowIcon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import VerifiedIcon from '../assets/svgs/VerifiedIcon';

interface LoginTextInputProps {
  isPassword?: boolean;
  placeholderText: string;
  showSuccessIcon?: boolean;
  showPasswordVisibilityButton?: boolean;
  name: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

const LoginTextInput: React.FC<LoginTextInputProps> = ({
  isPassword,
  placeholderText,
  showSuccessIcon,
  showPasswordVisibilityButton,
  value,
  onChangeText,
}) => {

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholder={placeholderText}
        placeholderTextColor="#9B9B9B"
        cursorColor={'black'}
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
      />
      <View style={styles.iconsContainer}>
        {showSuccessIcon && <VerifiedIcon style={styles.icons} />}
        {isPassword && showPasswordVisibilityButton && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <HideIcon style={styles.icons} />
            ) : (
              <ShowIcon style={styles.icons} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9B9B9B',
    marginHorizontal: wp('6%'),
    marginVertical: hp('1.5%'),
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  textInput: {
    flex: 1,
    height: hp('7%'),
    color: 'black',
  },
});

export default LoginTextInput;

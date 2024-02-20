import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const ViewAllButton: React.FC<{navigation: NativeStackNavigationProp<any>}> = ({
  navigation,
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
      <Text style={styles.buttonText}>View All</Text>
    </TouchableOpacity>
  );
};

export default ViewAllButton;

const styles = StyleSheet.create({
  buttonText: {
    color: '#666666',
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp('4%'),
  },
});

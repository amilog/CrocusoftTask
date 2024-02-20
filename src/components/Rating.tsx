import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarIcon from '../assets/svgs/StarIcon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Rating = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </View>
      <Text style={styles.text}>{' (320 Review)'}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp('1%'),
    paddingBottom: 3,
  },
  text: {
    fontSize: hp('1.8%'),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
});

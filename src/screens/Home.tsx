import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MenuIcon from '../assets/svgs/MenuIcon';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <View style={styles.menuIconCircle}>
          <MenuIcon style={styles.menuIcon} />
        </View>
        <View style={styles.profileImgCircle}>
          <Image
            source={require('../assets/images/profile-image.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('6.6%'),
  },
  menuIconCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 18,
    height: 12,
  },
  profileImgCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: '#DDDDDD',
    marginLeft: wp('5%'),
  },
});

import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MenuIcon from '../assets/svgs/MenuIcon';
import SearchIcon from '../assets/svgs/SearchIcon';
import FilterIcon from '../assets/svgs/FilterIcon';

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
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.fashionText}>Our Fashions App</Text>
      </View>
      <View style={styles.searchBarView}>
        <View style={styles.searchBar}>
          <SearchIcon style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Search..."
            placeholderTextColor="#9B9B9B"
          />
        </View>
        <View style={styles.filterIconCircle}>
          <FilterIcon style={styles.filterIcon} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: wp('6.6%'),
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
  fashionText: {
    fontSize: wp('5.3%'),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  textContainer: {
    paddingLeft: wp('6.6%'),
  },
  searchBar: {
    backgroundColor: '#F3F4F5',
    justifyContent: 'center',
    paddingHorizontal: wp('4%'),
    width: wp('72.5%'),
    borderRadius: wp('72.5%') / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    fontSize: wp('3.8%'),
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  searchIcon: {
    marginHorizontal: wp('2%'),
    marginBottom: hp('0.5%'),
  },
  filterIconCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('6.6%'),
    paddingVertical: hp('2.4%'),
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
});

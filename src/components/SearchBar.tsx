import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchIcon from '../assets/svgs/SearchIcon';
import FilterIcon from '../assets/svgs/FilterIcon';

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('6.6%'),
    paddingVertical: hp('2.4%'),
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
  searchIcon: {
    marginHorizontal: wp('2%'),
    marginBottom: hp('0.5%'),
  },
  textInput: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    fontSize: wp('3.8%'),
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  filterIconCircle: {
    width: hp('5.5%'),
    height: hp('5.5%'),
    borderRadius: hp('5.5%') / 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    width: wp('6%'),
    height: hp('6%'),
  },
});

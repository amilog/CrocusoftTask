import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MenuIcon from '../assets/svgs/MenuIcon';
import CampaignCard from '../components/CampaignCard';
import {campaignData} from '../data/campaignData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SearchBar from '../components/SearchBar';
import ProductCategory from '../components/ProductCategory';

const Home: React.FC<{navigation: NativeStackNavigationProp<any>}> = ({
  navigation,
}) => {
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
      <SearchBar />
      <ScrollView>
        <FlatList
          data={campaignData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CampaignCard data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.campaignFlatListContent}
        />
        <ProductCategory navigation={navigation} title="New Arrivals" />
        <ProductCategory navigation={navigation} title="Most Populars" />
        <ProductCategory navigation={navigation} title="For Woman etc" />
      </ScrollView>
    </View>
  );
};

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
  campaignFlatListContent: {
    paddingHorizontal: wp('6.6%'),
    paddingVertical: hp('2%'),
    gap: wp('3%'),
    alignItems: 'center',
  },
});

export default Home;

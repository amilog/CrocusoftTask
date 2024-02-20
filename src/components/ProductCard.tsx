import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FavoritedIcon from '../assets/svgs/FavoritedIcon';
import FavoritIcon from '../assets/svgs/FavoritIcon';
import {ProductData} from '../data/productData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface ProductCardProps {
  navigation: NativeStackNavigationProp<any>;
  data: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({navigation, data}) => {
  const [liked, setLiked] = useState(false);

  const navigateToDetailScreen = () => {
    navigation.navigate('Detail', {data});
  };

  const handleLikePress = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={navigateToDetailScreen} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={data.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{data.title}</Text>
        <Text style={styles.text}>{data.text}</Text>
        <Text style={styles.price}>$ {data.price}</Text>
      </View>
      <TouchableOpacity onPress={handleLikePress} style={styles.likeButton}>
        {liked ? <FavoritedIcon /> : <FavoritIcon />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('40%'),
    height: hp('30%'),
    borderRadius: wp('5%'),
    backgroundColor: '#FFFFFF',
    margin: 10,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    marginBottom: wp('1%'),
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: wp('5%'),
  },
  textContainer: {
    marginBottom: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: wp('4%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  price: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  text: {
    fontSize: wp('3%'),
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  likeButton: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('6%') / 2,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: wp('3%'),
    right: wp('3%'),
  },
});

export default ProductCard;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductData } from '../data/productData';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Rating from '../components/Rating';
import ColorOption from '../components/ColorOption';
import LeftArrowIcon from '../assets/svgs/LeftArrowIcon';
import FavoritedIcon from '../assets/svgs/FavoritedIcon';
import FavoritIcon from '../assets/svgs/FavoritIcon';
import PackageIcon from '../assets/svgs/PackageIcon';
import InPackageIcon from '../assets/svgs/InPackageIcon';

type RootStackParamList = {
  Detail: { data: ProductData };
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Detail: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { data } = route.params;
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleSizeSelection = (size: string) => setSelectedSize(size);
  const handleColorSelection = (color: string) => setSelectedColor(color);
  const handleAddToCart = () => setIsAddedToCart((prev) => !prev);
  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));
  const handleFavoriteToggle = () => setIsFavorited((prev) => !prev);

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[styles.button, styles.backButton]}>
            <LeftArrowIcon />
          </View>
        </TouchableOpacity>
        <View style={styles.rightButtons}>
          <TouchableOpacity style={styles.circleButton} onPress={handleFavoriteToggle}>
            {isFavorited ? <FavoritedIcon width={15} height={15} color={'#000'} /> : <FavoritIcon width={15} height={15} color={'#000'} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton} onPress={handleAddToCart}>
            {isAddedToCart ? <InPackageIcon width={15} height={15} color={'#000'} /> : <PackageIcon width={15} height={15} color={'#000'} />}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={data.image} style={styles.image} resizeMode="cover" />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <Text style={styles.productNameText}>{data.title}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={handleDecreaseQuantity}>
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={handleIncreaseQuantity}>
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text}>{data.text}</Text>
          <View style={styles.row}>
            <Rating />
            <Text style={styles.inStockText}>Available in stock</Text>
          </View>

          <View style={styles.productSpecification}>
            <View>
              <Text style={styles.titleText}>Size</Text>
              <View style={styles.sizeContainer}>
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <TouchableOpacity
                    key={size}
                    style={[
                      styles.sizeButton,
                      selectedSize === size && styles.selectedSizeButton,
                    ]}
                    onPress={() => handleSizeSelection(size)}>
                    <Text
                      style={[
                        styles.sizeText,
                        selectedSize === size && styles.selectedSizeText,
                      ]}>
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.colorContainer}>
              {['#FFFFFF', '#8D8E8D', '#CADCA7', '#F79F1F'].map((color) => (
                <ColorOption
                  key={color}
                  color={color}
                  selected={selectedColor === color}
                  onPress={() => handleColorSelection(color)}
                />
              ))}
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.titleText}>Description:</Text>
            <Text style={styles.text}>
              Get a little lift from these Sam Edelman sandals featuring ruched
              straps and leather lace-up ties, while a braided jute sole makes a
              fresh statement for summer.
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.priceView}>
              <Text style={styles.lightText}>Total Price</Text>
              <Text style={styles.price}>$ {data.price * quantity}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
              <Text style={styles.addButtonText}>
                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingTop: wp('5%'),
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('15%') / 2,
    backgroundColor: '#000000',
  },
  circleButton: {
    width: wp('9%'),
    height: wp('9%'),
    borderRadius: wp('15%') / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginLeft: wp('5%'),
  },
  rightButtons: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: hp('50%'),
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    overflow: 'hidden',
    bottom: 0,
  },
  imageContainer: {
    width: '100%',
    height: hp('50%'),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: wp('5%'),
  },
  productNameText: {
    fontSize: hp('3.5%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  sizeContainer: {
    flexDirection: 'row',
  },
  sizeButton: {
    marginRight: wp('3%'),
    width: wp('10%'),
    height: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: wp('10%') / 2,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  selectedSizeButton: {
    backgroundColor: '#000000',
  },
  descriptionContainer: {
    marginBottom: wp('5%'),
  },
  titleText: {
    fontSize: wp('5%'),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    marginVertical: wp('3%'),
  },
  text: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  sizeText: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#888888',
  },
  selectedSizeText: {
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#000000',
    width: wp('54%'),
    height: hp('7%'),
    borderRadius: wp('60%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  inStockText: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  colorContainer: {
    width: hp('5%'),
    height: hp('14%'),
    borderRadius: wp('15%') / 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productSpecification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: wp('7%'),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  lightText: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins-Light',
    color: '#AAAAAA',
  },
  priceView: {
    flexDirection: 'column',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DEDEDE',
    justifyContent: 'space-between',
    width: hp('10%'),
    height: hp('4%'),
    paddingHorizontal: wp('2%'),
    borderRadius: wp('5%'),
  },
  quantityText: {
    fontSize: hp('2.5%'),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
});

export default Detail;

import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewAllButton from './ViewAllButton';
import ProductCard from './ProductCard';
import {productData} from '../data/productData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ProductCategoryProps {
  navigation: NativeStackNavigationProp<any>;
  title: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  navigation,
  title,
}) => {
  return (
    <>
      <View style={styles.categoryBar}>
        <Text style={styles.categoryName}>{title}</Text>
        <ViewAllButton navigation={navigation} />
      </View>
      <FlatList
        data={productData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard navigation={navigation} data={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productFlatListContent}
      />
    </>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  categoryBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('6.6%'),
  },
  categoryName: {
    fontSize: wp('5.3%'),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  productFlatListContent: {
    paddingHorizontal: wp('5.5%'),
    gap: wp('3%'),
    alignItems: 'center',
  },
});

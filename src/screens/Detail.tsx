import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductData} from '../data/productData';

type RootStackParamList = {
  Detail: {data: ProductData};
};
type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Detail: React.FC<DetailScreenProps> = ({route}) => {
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{data.title}</Text>
      <Text style={styles.text}>{data.text}</Text>
      <Text style={styles.price}>$ {data.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  price: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  text: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
});

export default Detail;

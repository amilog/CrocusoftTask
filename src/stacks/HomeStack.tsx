import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import ProductList from '../screens/ProductList';
import {ProductData} from '../data/productData';

type RootStackParamList = {
  Home: undefined;
  ProductList: undefined;
  Detail: {data: ProductData};
};

import { FC } from 'react';

const HomeStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductList" component={ProductList as FC} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStack;

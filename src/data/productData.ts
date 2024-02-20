export interface ProductData {
  id: number;
  image: any;
  title: string;
  text: string;
  price: string;
}

export const productData: ProductData[] = [
  {
    id: 1,
    image: require('../assets/images/product-img1.png'),
    title: 'The Marc Jacobs',
    text: 'Traveler Tote',
    price: '195',
  },
  {
    id: 2,
    image: require('../assets/images/product-img2.png'),
    title: 'Axel Arigato',
    text: 'Clean 90 Triple Sneakers',
    price: '245',
  },
  {
    id: 3,
    image: require('../assets/images/product-img3.png'),
    title: 'Roller Rabbit',
    text: 'Vado Odelle Dress',
    price: '198',
  },
];

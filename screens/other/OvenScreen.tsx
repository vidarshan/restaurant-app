import React from 'react';
import {FlatList, View} from 'react-native';
import OrderCard from '../../components/OrderCard';

const OvenScreen = () => {
  const orders = [
    {
      id: 1,
      name: 'Whopper',
      size: '2 Ounce',
      qty: 1,
      selectedAddOns: ['🥗Salad', '🍅Sauce', '🧀Cheese'],
      price: 10.0,
      image: require('../../assets/images/burger1.png'),
    },
  ];

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({item}) => <OrderCard item={item} key={item.id} />}
      />
    </View>
  );
};

export default OvenScreen;

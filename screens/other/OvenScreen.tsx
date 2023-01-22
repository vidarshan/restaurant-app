import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import OrderCard from '../../components/OrderCard';
import {IOvenScreen} from '../../models/IOvenScreen';
import {ovenScreenStyles} from '../../styles/OvenScreen';

const OvenScreen: React.FC<IOvenScreen> = ({navigation}) => {
  const orders = [
    {
      id: '1',
      name: 'Whopper',
      size: '2 Ounce',
      qty: 1,
      selectedAddOns: ['🥗Salad', '🍅Sauce', '🧀Cheese'],
      price: 10.0,
      image: require('../../assets/images/burger1.png'),
    },
  ];

  return (
    <View style={ovenScreenStyles.container}>
      <View>
        <FlatList
          data={orders}
          renderItem={({item}) => (
            <OrderCard navigation={navigation} item={item} key={item.id} />
          )}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Order')}
          style={ovenScreenStyles.checkoutBtn}>
          <Text style={ovenScreenStyles.checkoutText}>
            Go to checkout $10.00
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OvenScreen;

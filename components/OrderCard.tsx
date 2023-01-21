import React from 'react';
import {Image, Text, View} from 'react-native';
import {IOrderScreen} from '../models/IOrderCard';

const OrderCard: React.FC<IOrderScreen> = ({item, navigation}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Image style={{width: 30, height: 30}} source={item.image} />
      <Text>{item.size}</Text>
      <View>
        {item.selectedAddOns.map((addOn, key) => (
          <Text key={key}>{addOn}</Text>
        ))}
      </View>
      <Text>{item.price}</Text>
      <Text>{item.qty}</Text>
    </View>
  );
};

export default OrderCard;

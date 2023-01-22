import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IOrderScreen} from '../../models/IOrderCard';
import {orderScreenStyles} from '../../styles/OrderScreen';

const OrderScreen: React.FC<IOrderScreen> = ({navigation}) => {
  return (
    <View style={orderScreenStyles.container}>
      <Text>OrderScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('OrderComplete')}>
        <Text>Completes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreen;

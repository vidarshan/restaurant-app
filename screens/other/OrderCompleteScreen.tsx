import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FaCheck} from 'react-icons/fa';
import {ovenScreenStyles} from '../../styles/OvenScreen';
import {completeScreen} from '../../styles/CompleteScreen';
import {ICompleteScreen} from '../../models/ICompleteScreen';
import {warningColor} from '../../styles/GlobalStyles';
import {useNavigate} from 'react-router';

const OrderComplete: React.FC<ICompleteScreen> = () => {
  const navigate = useNavigate();

  return (
    <View style={completeScreen.container}>
      <FaCheck size={60} color={warningColor} />
      <Text style={completeScreen.title}>Placed Order</Text>
      <Text style={completeScreen.subTitle}>
        Your order will ship in 30 mins. View order in your account
      </Text>
      <TouchableOpacity
        onPress={() => navigate('/')}
        style={ovenScreenStyles.checkoutBtn}>
        <Text style={ovenScreenStyles.checkoutText}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderComplete;

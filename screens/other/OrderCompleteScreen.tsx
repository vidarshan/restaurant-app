import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {warningColor} from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ovenScreenStyles} from '../../styles/OvenScreen';
import {completeScreen} from '../../styles/CompleteScreen';
import {ICompleteScreen} from '../../models/ICompleteScreen';

const OrderComplete: React.FC<ICompleteScreen> = ({navigation}) => {
  return (
    <View style={completeScreen.container}>
      <Icon name="check" size={60} color={warningColor} />
      <Text style={completeScreen.title}>Placed Order</Text>
      <Text style={completeScreen.subTitle}>
        Your order will ship in 30 mins. View order in your account
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={ovenScreenStyles.checkoutBtn}>
        <Text style={ovenScreenStyles.checkoutText}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderComplete;

import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IOrderScreen} from '../../models/IOrderCard';
import {accentColor, warningColor2} from '../../styles/GlobalStyles';
import {orderScreenStyles} from '../../styles/OrderScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ovenScreenStyles} from '../../styles/OvenScreen';

const OrderScreen: React.FC<IOrderScreen> = ({navigation}) => {
  return (
    <SafeAreaView style={orderScreenStyles.container}>
      <View>
        <Text style={orderScreenStyles.headerText}>
          Complete your order details
        </Text>
        <TextInput style={ovenScreenStyles.input} placeholder="Email" />
        <TextInput style={ovenScreenStyles.input} placeholder="Phone number" />
        <TextInput
          style={ovenScreenStyles.input}
          placeholder="Delivery Address"
        />
        <View style={ovenScreenStyles.paymentOptionsRow}>
          <TouchableOpacity style={ovenScreenStyles.paymentOption}>
            <Icon
              style={ovenScreenStyles.iconMargin}
              name="check"
              size={12}
              color={accentColor}
            />
            <Icon name="money" size={26} color={warningColor2} />
          </TouchableOpacity>
          <TouchableOpacity style={ovenScreenStyles.paymentOption}>
            <Icon
              style={ovenScreenStyles.iconMargin}
              name="check"
              size={12}
              color={accentColor}
            />
            <Icon name="cc-mastercard" size={26} color={warningColor2} />
          </TouchableOpacity>
          <TouchableOpacity style={ovenScreenStyles.paymentOption}>
            <Icon
              style={ovenScreenStyles.iconMargin}
              name="check"
              size={12}
              color={accentColor}
            />
            <Icon name="cc-visa" size={26} color={warningColor2} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('OrderComplete')}>
        <Text>Completes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('OrderComplete')}
        style={ovenScreenStyles.checkoutBtn}>
        <Text style={ovenScreenStyles.checkoutText}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderScreen;

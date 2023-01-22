import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IOrderScreen} from '../../models/IOrderCard';
import {
  accentColor,
  cardbgColor,
  defaultTextInputStyles,
  fontColor,
  warningColor,
  warningColor2,
} from '../../styles/GlobalStyles';
import {orderScreenStyles} from '../../styles/OrderScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ovenScreenStyles} from '../../styles/OvenScreen';

const OrderScreen: React.FC<IOrderScreen> = ({navigation}) => {
  return (
    <SafeAreaView style={orderScreenStyles.container}>
      <View>
        <Text style={{color: fontColor, margin: 5, fontWeight: '500'}}>
          Complete your order details
        </Text>
        <TextInput
          style={{
            backgroundColor: cardbgColor,
            borderRadius: 8,
            padding: 10,
            margin: 5,
            color: 'white',
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            backgroundColor: cardbgColor,
            borderRadius: 8,
            padding: 10,
            margin: 5,
            color: 'white',
          }}
          placeholder="Phone number"
        />
        <TextInput
          style={{
            backgroundColor: cardbgColor,
            borderRadius: 8,
            padding: 10,
            margin: 5,
            color: 'white',
          }}
          placeholder="Delivery Address"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            margin: 5,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: cardbgColor,
              padding: 10,
              borderRadius: 8,
              marginRight: 10,
            }}>
            <Icon
              style={{marginRight: 8}}
              name="check"
              size={12}
              color={accentColor}
            />
            <Icon name="money" size={26} color={warningColor2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: cardbgColor,
              padding: 5,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Icon
              style={{marginRight: 8}}
              name="check"
              size={12}
              color={accentColor}
            />
            <Icon name="cc-mastercard" size={26} color={warningColor2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: cardbgColor,
              padding: 5,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Icon
              style={{marginRight: 8}}
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

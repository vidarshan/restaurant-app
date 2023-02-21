import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IOrderScreen} from '../../models/IOrderCard';
import {
  accentColor,
  unselectedStar,
  warningColor2,
} from '../../styles/GlobalStyles';
import {orderScreenStyles} from '../../styles/OrderScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ovenScreenStyles} from '../../styles/OvenScreen';
import {authStyles} from '../../styles/AuthScreens';
import {useDispatch, useSelector} from 'react-redux';
import {addToOrders} from '../../redux/orders/index';
import {AppDispatch, RootState} from '../../redux/store';
import {customButtonStyles} from '../../styles/CustomButton';

const OrderScreen: React.FC<IOrderScreen> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const {ovenList} = useSelector((state: RootState) => state.oven);
  const onPlaceOrder = () => {
    Alert.alert('Place Order', 'Confirm your order', [
      {
        text: 'Yes, proceed',
        onPress: () => {
          navigation.navigate('OrderComplete');
          ovenList.map(item => {
            dispatch(
              addToOrders({
                id: item.id,
                price: item.price,
                name: item.name,
                image: item.image,
                quantity: item.quantity,
                addOns: item.addons,
                date: Date.now(),
                status: 'Preparing',
              }),
            );
          });
        },
      },
      {
        text: 'Dismiss',
      },
    ]);
  };

  return (
    <SafeAreaView style={orderScreenStyles.container}>
      <View>
        <Text style={orderScreenStyles.headerText}>
          Complete your order details
        </Text>
        <TextInput
          editable
          value={number}
          maxLength={40}
          onChangeText={text => setNumber(text)}
          placeholder="House Number"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <TextInput
          editable
          value={street}
          maxLength={40}
          onChangeText={text => setStreet(text)}
          placeholder="Street"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <TextInput
          editable
          value={city}
          maxLength={40}
          onChangeText={text => setCity(text)}
          placeholder="City"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <View style={ovenScreenStyles.paymentOptionsRow}>
          <TouchableOpacity
            style={ovenScreenStyles.paymentOption}
            onPress={() => setPaymentMethod('Cash')}>
            {paymentMethod === 'Cash' && (
              <Icon
                style={ovenScreenStyles.iconMargin}
                name="check"
                size={12}
                color={accentColor}
              />
            )}

            <Icon name="money" size={26} color={warningColor2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={ovenScreenStyles.paymentOption}
            onPress={() => setPaymentMethod('MasterCard')}>
            {paymentMethod === 'MasterCard' && (
              <Icon
                style={ovenScreenStyles.iconMargin}
                name="check"
                size={12}
                color={accentColor}
              />
            )}
            <Icon name="cc-mastercard" size={26} color={warningColor2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={ovenScreenStyles.paymentOption}
            onPress={() => setPaymentMethod('Visa')}>
            {paymentMethod === 'Visa' && (
              <Icon
                style={ovenScreenStyles.iconMargin}
                name="check"
                size={12}
                color={accentColor}
              />
            )}
            <Icon name="cc-visa" size={26} color={warningColor2} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('OrderComplete')}>
        <Text>Complete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={number === '' || street === '' || city === ''}
        onPress={() => onPlaceOrder()}
        style={
          number === '' || street === '' || city === ''
            ? customButtonStyles.disabledBtn
            : ovenScreenStyles.checkoutBtn
        }>
        <Text style={ovenScreenStyles.checkoutText}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderScreen;

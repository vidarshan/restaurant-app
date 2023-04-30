import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {IOrderScreen} from '../../models/IOrderCard';
import {unselectedStar, warningColor2} from '../../styles/GlobalStyles';
import {orderScreenStyles} from '../../styles/OrderScreen';
import {
  RiVisaLine,
  RiMoneyPoundBoxFill,
  RiMastercardFill,
} from 'react-icons/ri';
import {ovenScreenStyles} from '../../styles/OvenScreen';
import {authStyles} from '../../styles/AuthScreens';
import {useDispatch, useSelector} from 'react-redux';
import {addToOrders} from '../../redux/orders/index';
import {AppDispatch, RootState} from '../../redux/store';
import {customButtonStyles} from '../../styles/CustomButton';
import WebHeader from '../../components/WebHeader';
import {useNavigate} from 'react-router-dom';

const OrderScreen: React.FC<IOrderScreen> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const {ovenList} = useSelector((state: RootState) => state.oven);
  const onPlaceOrder = () => {
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
    navigate('/orderComplete');
  };

  return (
    <SafeAreaView style={orderScreenStyles.container}>
      <WebHeader header="Home" type="back" leftPath="/" />
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
            {paymentMethod === 'Cash' && <></>}
            <RiMoneyPoundBoxFill
              size={26}
              color={paymentMethod === 'Cash' ? warningColor2 : unselectedStar}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={ovenScreenStyles.paymentOption}
            onPress={() => setPaymentMethod('MasterCard')}>
            {paymentMethod === 'MasterCard' && <></>}
            <RiMastercardFill
              size={26}
              color={
                paymentMethod === 'MasterCard' ? warningColor2 : unselectedStar
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={ovenScreenStyles.paymentOption}
            onPress={() => setPaymentMethod('Visa')}>
            {paymentMethod === 'Visa' && <></>}
            <RiVisaLine
              size={26}
              color={paymentMethod === 'Visa' ? warningColor2 : unselectedStar}
            />
          </TouchableOpacity>
        </View>
      </View>
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

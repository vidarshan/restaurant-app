import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import OrderCard from '../../../components/OrderCard';
import {
  bgColor,
  cardbgColor,
  dangerColor,
  defaultBorderRadius,
  fontColor,
} from '../../../styles/GlobalStyles';
import {ovenScreenStyles} from '../../../styles/OvenScreen';

const UserScreen = () => {
  const orders = [
    {
      id: '1',
      name: 'Whopper',
      size: '2 Ounce',
      qty: 1,
      selectedAddOns: ['🥗Salad', '🍅Sauce', '🧀Cheese'],
      price: 10.0,
      image: require('../../../assets/images/burger1.png'),
    },
  ];

  return (
    <View style={{backgroundColor: bgColor, minHeight: '100%'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            width: 60,
            borderRadius: 50,
            backgroundColor: '#f27a7a',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text style={{color: fontColor, fontSize: 24}}>A</Text>
        </View>
      </View>

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
        placeholder="Password"
      />
      <TouchableOpacity
        style={{
          backgroundColor: dangerColor,
          margin: 5,
          padding: 10,
          borderRadius: defaultBorderRadius,
        }}>
        <Text style={ovenScreenStyles.checkoutText}>Logout</Text>
      </TouchableOpacity>
      <Text style={{color: 'white'}}>Recent Orders</Text>
      <View style={{height: 300}}>
        <FlatList
          data={orders}
          renderItem={({item}) => <OrderCard item={item} key={item.id} />}
        />
      </View>
    </View>
  );
};

export default UserScreen;

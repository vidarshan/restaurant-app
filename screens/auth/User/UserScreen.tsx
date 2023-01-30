import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import OrderCard from '../../../components/OrderCard';
import {RootState} from '../../../redux/store';
import {accountStyles} from '../../../styles/AccountScreen';
import {ovenScreenStyles} from '../../../styles/OvenScreen';

const UserScreen = () => {
  const {ovenList} = useSelector((state: RootState) => state.oven);
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
    <View style={accountStyles.viewBg}>
      {console.log(ovenList)}
      <View style={accountStyles.viewContent}>
        <View style={accountStyles.avatarContainer}>
          <Text style={accountStyles.avatarText}>A</Text>
        </View>
      </View>
      <TextInput style={accountStyles.noFlexInput} placeholder="Email" />
      <TextInput style={accountStyles.noFlexInput} placeholder="Password" />
      <TouchableOpacity style={accountStyles.dangerBtn}>
        <Text style={ovenScreenStyles.checkoutText}>Logout</Text>
      </TouchableOpacity>
      <Text style={accountStyles.recentTitle}>Recent Orders</Text>
      <View>
        <FlatList
          data={ovenList}
          renderItem={({item}) => <OrderCard item={item} key={item.id} />}
        />
      </View>
    </View>
  );
};

export default UserScreen;

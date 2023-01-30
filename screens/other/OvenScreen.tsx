import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import OrderCard from '../../components/OrderCard';
import {IOvenScreen} from '../../models/IOvenScreen';
import {RootState} from '../../redux/store';
import {ovenScreenStyles} from '../../styles/OvenScreen';

const OvenScreen: React.FC<IOvenScreen> = ({navigation}) => {
  const {ovenList} = useSelector((state: RootState) => state.oven);

  const calculateTotal = () => {
    let total = 0;
    ovenList.map(item => {
      total = total + item.price;
    });
    return total;
  };

  return (
    <View style={ovenScreenStyles.container}>
      <View>
        <FlatList
          data={ovenList}
          renderItem={({item}) => (
            <OrderCard navigation={navigation} item={item} key={item.id} />
          )}
        />
        {ovenList && ovenList.length ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Order')}
            style={ovenScreenStyles.checkoutBtn}>
            <Text style={ovenScreenStyles.checkoutText}>
              {`Go to checkout    $${calculateTotal()}`}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={ovenScreenStyles.noItemsText}>
            You have no items in your oven
          </Text>
        )}
      </View>
    </View>
  );
};

export default OvenScreen;

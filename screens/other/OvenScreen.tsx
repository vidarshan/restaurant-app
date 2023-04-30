import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrderCard from '../../components/OrderCard';
import {IOvenScreen} from '../../models/IOvenScreen';
import {getOven} from '../../redux/oven';
import {AppDispatch, RootState} from '../../redux/store';
import {ovenScreenStyles} from '../../styles/OvenScreen';
import WebHeader from '../../components/WebHeader';
import {useNavigate} from 'react-router';
const OvenScreen: React.FC<IOvenScreen> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {ovenList} = useSelector((state: RootState) => state.oven);

  const calculateTotal = () => {
    let total = 0;
    ovenList.map(item => {
      total = total + item.price;
    });
    return total;
  };

  useEffect(() => {
    dispatch(getOven());
  }, [dispatch]);

  return (
    <View style={ovenScreenStyles.container}>
      <View>
        <WebHeader header="Home" type="back" leftPath="/" />
        <>
          <FlatList
            data={ovenList}
            renderItem={({item}) => (
              <OrderCard navigation={{}} item={item} key={item.id} />
            )}
            ListEmptyComponent={
              <Text style={ovenScreenStyles.noItemsText}>
                You have no items in your oven
              </Text>
            }
            ListFooterComponent={
              <TouchableOpacity
                onPress={() => navigate('/order')}
                style={ovenScreenStyles.checkoutBtn}>
                <Text style={ovenScreenStyles.checkoutText}>
                  {`Go to checkout    $${calculateTotal()}`}
                </Text>
              </TouchableOpacity>
            }
          />
        </>
      </View>
    </View>
  );
};

export default OvenScreen;

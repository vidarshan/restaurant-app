import React, {useEffect} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../redux/auth';
import {getOrders} from '../../../redux/orders';
import {AppDispatch, RootState} from '../../../redux/store';
import {accountStyles} from '../../../styles/AccountScreen';
import {fontColor} from '../../../styles/GlobalStyles';
import {ovenScreenStyles} from '../../../styles/OvenScreen';
import PastOrdersCard from '../../../components/PastOrdersCard';

const UserScreen = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.auth);
  const {ordersList} = useSelector((state: RootState) => state.orders);

  const onUserLogout = () => {
    dispatch(logout(user.phone));
  };

  useEffect(() => {
    if (user.token === '') {
      navigation.navigate('AuthLogin');
    }
    dispatch(getOrders());
  }, [dispatch, navigation, user.token]);

  return (
    <View style={accountStyles.viewBg}>
      <View>
        <FlatList
          data={ordersList}
          ListHeaderComponent={
            <>
              <View style={accountStyles.viewContent}>
                <View style={accountStyles.avatarContainer}>
                  <Text style={accountStyles.avatarText}>
                    {user?.username?.charAt(0)?.toUpperCase() || 'U'}
                  </Text>
                </View>
                <Text style={accountStyles.name}>@{user.username}</Text>
              </View>
              <TextInput
                style={accountStyles.noFlexInput}
                value={user?.phone || ''}
                placeholder="Email"
                editable={false}
              />
              <TouchableOpacity
                style={accountStyles.dangerBtn}
                onPress={() => onUserLogout()}>
                <Text style={ovenScreenStyles.checkoutText}>Logout</Text>
              </TouchableOpacity>
              <Text style={accountStyles.recentTitle}>Recent Orders</Text>
            </>
          }
          ListEmptyComponent={
            <View style={accountStyles.emptyContainer}>
              <Text style={{color: fontColor}}>
                You have not ordered anything yet!
              </Text>
            </View>
          }
          renderItem={({item}) => (
            <PastOrdersCard
              id={item.id}
              image={item.image}
              addOns={item.addOns}
              date={item.date}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              status={item.status}
            />
          )}
        />
      </View>
    </View>
  );
};

export default UserScreen;

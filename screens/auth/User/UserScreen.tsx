import React, {useEffect} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeUserFromLocalStorage} from '../../../redux/auth';
import {AppDispatch, RootState} from '../../../redux/store';
import {accountStyles} from '../../../styles/AccountScreen';
import {fontColor} from '../../../styles/GlobalStyles';
import {ovenScreenStyles} from '../../../styles/OvenScreen';
import PastOrdersCard from '../../../components/PastOrdersCard';
import {getOrders} from '../../../redux/orders';
import {useNavigate} from 'react-router';
import WebHeader from '../../../components/WebHeader';

const UserScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.auth);
  const {ordersList} = useSelector((state: RootState) => state.orders);

  const onUserLogout = () => {
    navigate('/');
    dispatch(removeUserFromLocalStorage());
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <View style={accountStyles.viewBg}>
      <WebHeader type="back" header="Meals" />
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
                placeholder="Phone number"
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
              date={item.date}
              items={item.items}
              price={item.price}
              status={item.status}
            />
          )}
        />
      </View>
    </View>
  );
};

export default UserScreen;

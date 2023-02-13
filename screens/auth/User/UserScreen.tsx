import React, {useEffect} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrderCard from '../../../components/OrderCard';
import {logout} from '../../../redux/auth';
import {AppDispatch, RootState} from '../../../redux/store';
import {accountStyles} from '../../../styles/AccountScreen';
import {ovenScreenStyles} from '../../../styles/OvenScreen';

const UserScreen = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.auth);
  const {ovenList} = useSelector((state: RootState) => state.oven);

  console.log('usersss', user);

  const onUserLogout = () => {
    dispatch(logout(user));
  };

  useEffect(() => {
    if (user.token === '') {
      navigation.navigate('AuthLogin');
    }
  }, [dispatch, navigation, user.token]);

  return (
    <View style={accountStyles.viewBg}>
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

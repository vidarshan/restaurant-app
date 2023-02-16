import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {IOrderScreen} from '../models/IOrderCard';
import {removeOrderFromOven} from '../redux/oven';
import {AppDispatch} from '../redux/store';
import {accentColor, dangerColor} from '../styles/GlobalStyles';
import {orderScreenStyles} from '../styles/OrderScreen';
import {ovenScreenStyles} from '../styles/OvenScreen';

const OrderCard: React.FC<IOrderScreen> = ({
  item = {id: '', price: '', image: '', name: '', quantity: '', addons: []},
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteOvenItem = () => {
    dispatch(removeOrderFromOven(item.id));
  };

  return (
    <TouchableOpacity>
      <View style={ovenScreenStyles.item}>
        <View style={orderScreenStyles.chipPriceRow}>
          <View style={orderScreenStyles.chipRow}>
            <Icon
              style={orderScreenStyles.iconMargin}
              name="circle"
              size={8}
              color={accentColor}
            />
            <Text style={orderScreenStyles.chipText}>Delivered</Text>
          </View>
          <Text style={orderScreenStyles.chipText}>${item.price}</Text>
        </View>
        <View style={orderScreenStyles.imageRow}>
          <Image style={orderScreenStyles.img} source={item.image} />
          <View style={orderScreenStyles.detailsRow}>
            <View>
              <Text style={orderScreenStyles.detailText}>{item.name}</Text>
              <Text style={orderScreenStyles.detailText}>{item.quantity}</Text>
              <Text style={orderScreenStyles.detailText}>
                {item.quantity} x ${item.price}
              </Text>
            </View>
            <TouchableOpacity onPress={() => deleteOvenItem()}>
              <Icon name="trash" size={16} color={dangerColor} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={orderScreenStyles.addOnRow}>
          {item.addons.map((addOn, key) => (
            <View style={orderScreenStyles.addOn}>
              <Text style={orderScreenStyles.addOnText} key={key}>
                {addOn?.toString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;

import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IOrderScreen} from '../models/IOrderCard';
import {accentColor, dangerColor} from '../styles/GlobalStyles';
import {orderScreenStyles} from '../styles/OrderScreen';
import {ovenScreenStyles} from '../styles/OvenScreen';

const OrderCard: React.FC<IOrderScreen> = ({
  item = {
    id: '',
    name: '',
    size: '',
    qty: 1,
    selectedAddOns: [],
    price: 0,
    image: '',
  },
}) => {
  return (
    <TouchableOpacity>
      <View style={ovenScreenStyles.item}>
        <View style={orderScreenStyles.chipRow}>
          <Icon
            style={orderScreenStyles.iconMargin}
            name="circle"
            size={8}
            color={accentColor}
          />
          <Text style={orderScreenStyles.chipText}>Delivered</Text>
        </View>
        <View style={orderScreenStyles.imageRow}>
          <Image style={orderScreenStyles.img} source={item.image} />
          <View style={orderScreenStyles.detailsRow}>
            <View>
              <Text style={orderScreenStyles.detailText}>{item.name}</Text>
              <Text style={orderScreenStyles.detailText}>{item.size}</Text>
              <Text style={orderScreenStyles.detailText}>
                {item.qty} x ${item.price}
              </Text>
            </View>
            <TouchableOpacity>
              <Icon name="trash" size={16} color={dangerColor} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={orderScreenStyles.addOnRow}>
          {item.selectedAddOns.map((addOn, key) => (
            <View style={orderScreenStyles.addOn}>
              <Text style={orderScreenStyles.addOnText} key={key}>
                {addOn}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;

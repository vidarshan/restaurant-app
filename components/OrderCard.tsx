import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IOrderScreen} from '../models/IOrderCard';
import {
  accentColor,
  cardbgColor,
  dangerColor,
  defaultBorderRadius,
  fontColor,
} from '../styles/GlobalStyles';
import {ovenScreenStyles} from '../styles/OvenScreen';

const OrderCard: React.FC<IOrderScreen> = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={ovenScreenStyles.item}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#030303',
            borderRadius: defaultBorderRadius,
            padding: 5,
            marginBottom: 10,
          }}>
          <Icon
            style={{marginRight: 5}}
            name="circle"
            size={8}
            color={accentColor}
          />
          <Text style={{color: fontColor}}>Delivered</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              width: 40,
              resizeMode: 'contain',
              height: 40,
              marginRight: 10,
            }}
            source={item.image}
          />
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontSize: 14, color: fontColor, fontWeight: '500'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 14, color: fontColor, fontWeight: '500'}}>
                {item.size}
              </Text>
              <Text style={{fontSize: 14, color: fontColor, fontWeight: '500'}}>
                {item.qty} x ${item.price}
              </Text>
            </View>
            <TouchableOpacity>
              <Icon name="trash" size={16} color={dangerColor} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          {item.selectedAddOns.map((addOn, key) => (
            <View
              style={{
                backgroundColor: '#3c3c3c',
                marginRight: 10,
                padding: 5,
                borderRadius: 8,
              }}>
              <Text style={{color: 'white'}} key={key}>
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

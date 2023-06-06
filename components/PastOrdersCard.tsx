import moment from 'moment';
import React from 'react';
import {Image, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {IPastOrderCard} from '../ios/IPastOrderCard';
import {accountStyles} from '../styles/AccountScreen';
import {fontColor} from '../styles/GlobalStyles';

const PastOrdersCard: React.FC<IPastOrderCard> = ({
  id,
  date,
  price,
  status,
  items,
}) => {
  return (
    <View key={id} style={accountStyles.pastCardContainer}>
      <View style={accountStyles.itemImageColumn}>
        <Text style={accountStyles.itemPrice}>${price}</Text>
      </View>
      <View style={accountStyles.detailsColumn}>
        <View style={accountStyles.statusBadgeContainer}>
          <Text style={{color: fontColor}}>{status}</Text>
        </View>
        <View style={accountStyles.nameStatusRow}>
          <Text style={accountStyles.itemName}>{id}</Text>
        </View>
        <Text style={accountStyles.date}>
          {moment(date).format('YYYY-MM-DD HH:mm A')}
        </Text>
        <View>
          {items.map(item => {
            return (
              <View style={accountStyles.itemContainer}>
                <View style={accountStyles.itemRow}>
                  {' '}
                  <Image style={accountStyles.itemImage} source={item.image} />
                  <Text style={accountStyles.itemText}> {item.name} | </Text>
                  <Text style={accountStyles.itemText}>{item.price} x </Text>
                  <Text style={accountStyles.itemText}>{item.quantity}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default PastOrdersCard;

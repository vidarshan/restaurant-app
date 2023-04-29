import moment from 'moment';
import React from 'react';
import {Image, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {IPastOrderCard} from '../ios/IPastOrderCard';
import {accountStyles} from '../styles/AccountScreen';
import {fontColor} from '../styles/GlobalStyles';

const PastOrdersCard: React.FC<IPastOrderCard> = ({
  id,
  image,
  addOns,
  date,
  name,
  price,
  quantity,
  status,
}) => {
  console.log('🚀 ~ file: PastOrdersCard.tsx:19 ~ addOns:', addOns);
  return (
    <View key={id} style={accountStyles.pastCardContainer}>
      <View style={accountStyles.itemImageColumn}>
        <Image style={accountStyles.image} source={image} />
        <Text style={accountStyles.itemPrice}>${price}</Text>
      </View>
      <View style={accountStyles.detailsColumn}>
        <View style={accountStyles.nameStatusRow}>
          <Text style={accountStyles.itemName}>{name}</Text>
          <View style={accountStyles.statusBadgeContainer}>
            {/* <Icon
              style={accountStyles.icon}
              name="circle"
              size={8}
              color={accentColor}
            /> */}
            <Text style={{color: fontColor}}>{status}</Text>
          </View>
        </View>
        <Text style={accountStyles.date}>
          {moment(date).format('YYYY-MM-DD HH:mm A')}
        </Text>
        <Text style={accountStyles.date}>{id}</Text>
        <Text style={accountStyles.date}>x {quantity}</Text>
      </View>
    </View>
  );
};

export default PastOrdersCard;

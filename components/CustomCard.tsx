import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ICustomCard} from '../models/ICustomCard';
import {customCardStyles} from '../styles/CustomCard';
import {homeStyles} from '../styles/HomeScreen';
import Rating from './Rating';

const CustomCard: React.FC<ICustomCard> = ({item, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Meal', {meal: item})}>
      <View style={customCardStyles().item}>
        <Image style={customCardStyles().image} source={item.image} />
        <View style={customCardStyles().detailsContainer}>
          <View style={customCardStyles().veganContainer}>
            <Text style={homeStyles().itemText}>{item.name}</Text>
            <View style={homeStyles().veganIconContainer}>
              <Icon
                name="circle"
                size={8}
                color={item.vegan ? 'green' : 'red'}
              />
            </View>
          </View>
          <Rating rating={item.rating} />
          <View style={customCardStyles().priceContainer}>
            <Text style={customCardStyles().priceText}>${item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;

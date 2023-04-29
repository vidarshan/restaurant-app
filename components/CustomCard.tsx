import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {FaCircle} from 'react-icons/fa';
import {ICustomCard} from '../models/ICustomCard';
import {customCardStyles} from '../styles/CustomCard';
import {homeStyles} from '../styles/HomeScreen';
import Rating from './Rating';
import {getPlatform} from '../utils';
import {useNavigate} from 'react-router';

const CustomCard: React.FC<ICustomCard> = ({item, navigation}) => {
  let webNavigate = useNavigate();

  return (
    <TouchableOpacity
      onPress={() => {
        getPlatform() === 'web'
          ? webNavigate(`/meal/${item.id}`)
          : navigation.navigate('Meal');
      }}>
      <View style={customCardStyles().item}>
        <Image style={customCardStyles().image} source={item.image} />
        <View style={customCardStyles().detailsContainer}>
          <View style={customCardStyles().veganContainer}>
            <Text style={homeStyles().itemText}>{item.name}</Text>
            <View style={homeStyles().veganIconContainer}>
              <FaCircle size={8} color={item.vegan ? 'lightGreen' : 'red'} />
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

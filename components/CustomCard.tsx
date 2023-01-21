import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ICustomCard} from '../models/ICustomCard';
import {customCardStyles} from '../styles/CustomCard';
import {accentColor} from '../styles/GlobalStyles';
import {homeStyles} from '../styles/HomeScreen';

const CustomCard: React.FC<ICustomCard> = ({item, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Meal', {meal: item})}>
      <View style={customCardStyles().item}>
        <Image style={customCardStyles().image} source={item.image} />
        <View style={customCardStyles().detailsContainer}>
          <View style={customCardStyles().veganContainer}>
            <Text style={homeStyles().itemText}>{item.name}</Text>
            <View style={homeStyles().veganIconContainer}>
              <View
                style={
                  homeStyles(item.vegan ? 'green' : 'red').veganIconBorder
                }>
                <Icon
                  name="circle"
                  size={8}
                  color={item.vegan ? 'green' : 'red'}
                />
              </View>
            </View>
          </View>
          <View style={customCardStyles().ratingContainer}>
            <Icon name="star" size={12} color={accentColor} />
            <Icon name="star" size={12} color={accentColor} />
            <Icon name="star" size={12} color={accentColor} />
            <Icon name="star" size={12} color={accentColor} />
            <Icon name="star" size={12} color="#b5b5b5" />
          </View>
          <View style={customCardStyles().priceContainer}>
            <Text style={customCardStyles().priceText}>${item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;

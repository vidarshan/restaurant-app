import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IRating} from '../models/IRating';
import {customCardStyles} from '../styles/CustomCard';
import {accentColor, unselectedStar} from '../styles/GlobalStyles';

const Rating: React.FC<IRating> = ({rating}) => {
  const renderRatingsList = () => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(
        <Icon key={`stars:${i}`} name="star" size={12} color={accentColor} />,
      );
    }

    let remainingStars = 5 - stars.length;

    for (let i = 1; i <= remainingStars; i++) {
      stars.push(
        <Icon
          key={`remainingStars:${i}`}
          name="star"
          size={12}
          color={unselectedStar}
        />,
      );
    }

    return <View style={customCardStyles().ratingContainer}>{stars}</View>;
  };

  return <>{renderRatingsList()}</>;
};

export default Rating;

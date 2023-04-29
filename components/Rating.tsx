import React from 'react';
import {View} from 'react-native';
import {FaStar} from 'react-icons/fa';
import {IRating} from '../models/IRating';
import {customCardStyles} from '../styles/CustomCard';
import {accentColor, unselectedStar} from '../styles/GlobalStyles';

const Rating: React.FC<IRating> = ({rating}) => {
  const renderRatingsList = () => {
    const stars: JSX.Element[] = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(
        <FaStar key={`stars:${i}`} name="star" size={12} color={accentColor} />,
      );
    }

    let remainingStars = 5 - stars.length;

    for (let i = 1; i <= remainingStars; i++) {
      stars.push(
        <FaStar
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

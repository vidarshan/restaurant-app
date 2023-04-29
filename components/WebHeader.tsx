import React from 'react';
import {Text, View} from 'react-native';
import {accentColor} from '../styles/GlobalStyles';
import {FaUserAlt, FaShoppingBag} from 'react-icons/fa';
import {webHeaderStyles} from '../styles/WebHeader';

const WebHeader = () => {
  return (
    <View style={webHeaderStyles.container}>
      <FaUserAlt color={accentColor} />
      <Text style={webHeaderStyles.text}>Meals</Text>
      <FaShoppingBag color={accentColor} />
    </View>
  );
};

export default WebHeader;

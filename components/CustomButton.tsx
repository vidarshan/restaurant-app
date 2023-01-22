import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ICustomButton} from '../models/ICustomButton';
import {customButtonStyles} from '../styles/CustomButton';

const CustomButton: React.FC<ICustomButton> = ({
  title = 'Button',
  type = 'default',
  onPress,
}) => {
  return (
    <>
      {type === 'default' ? (
        <TouchableOpacity
          onPress={onPress}
          style={customButtonStyles.defaultBtn}>
          <Text style={customButtonStyles.defaultText}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={customButtonStyles.invertedBtn}>
          <Text style={customButtonStyles.invertedText}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomButton;

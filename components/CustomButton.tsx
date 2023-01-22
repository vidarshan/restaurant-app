import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ICustomButton} from '../models/ICustomButton';
import {customButtonStyles} from '../styles/CustomButton';
import {accentColor, bgColor} from '../styles/GlobalStyles';

const CustomButton: React.FC<ICustomButton> = ({
  title = 'Button',
  type = 'default',
}) => {
  return (
    <>
      {type === 'default' ? (
        <TouchableOpacity style={customButtonStyles.defaultBtn}>
          <Text
            style={{color: bgColor, textAlign: 'center', fontWeight: '600'}}>
            {title}
          </Text>
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

import React from 'react';
import {TextInput} from 'react-native';
import {ICustomInput} from '../models/ICustomInput';
import {customInput} from '../styles/CustomInput';
import {unselectedStar} from '../styles/GlobalStyles';

const CustomInput: React.FC<ICustomInput> = ({placeholder = ''}) => {
  return (
    <TextInput
      style={customInput.input}
      placeholderTextColor={unselectedStar}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;

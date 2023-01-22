import React from 'react';
import {TextInput} from 'react-native';
import {ICustomInput} from '../models/ICustomInput';
import {customInput} from '../styles/CustomInput';

const CustomInput: React.FC<ICustomInput> = ({placeholder = ''}) => {
  return <TextInput style={customInput.input} placeholder={placeholder} />;
};

export default CustomInput;

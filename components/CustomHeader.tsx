import React from 'react';
import {Text} from 'react-native';
import {ICustomHeader} from '../models/ICustomHeader';
import {customHeader} from '../styles/CustomHeader';

const CustomHeader: React.FC<ICustomHeader> = ({title = ''}) => {
  return <Text style={customHeader.header}>{title}</Text>;
};

export default CustomHeader;

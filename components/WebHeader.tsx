import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {accentColor} from '../styles/GlobalStyles';
import {FaUserAlt, FaShoppingBag} from 'react-icons/fa';
import {MdArrowBackIosNew} from 'react-icons/md';
import {webHeaderStyles} from '../styles/WebHeader';
import {IWebHeader} from '../models/IWebHeader';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../hooks';

const WebHeader: FC<IWebHeader> = ({
  header = '',
  //backHeader = '',
  leftPath = '/',
  rightPath = '/',
  type = 'normal',
}) => {
  const navigate = useNavigate();
  const {ovenList} = useAppSelector(state => state.oven);
  return (
    <>
      {type === 'normal' ? (
        <>
          <TouchableOpacity onPress={() => navigate(leftPath)}>
            <View>
              <MdArrowBackIosNew size={18} color="#000" />
            </View>
            <Text>{header}</Text>
          </TouchableOpacity>
        </>
      ) : type === 'back' ? (
        <>
          <TouchableOpacity
            style={webHeaderStyles.backContainer}
            onPress={() => navigate(leftPath)}>
            <View>
              <MdArrowBackIosNew size={18} color={accentColor} />
            </View>
            <Text style={webHeaderStyles.text}>{header}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={webHeaderStyles.container}>
            <TouchableOpacity onPress={() => navigate(leftPath)}>
              <FaUserAlt color={accentColor} />
            </TouchableOpacity>
            <Text style={webHeaderStyles.text}>{header}</Text>
            <TouchableOpacity onPress={() => navigate(rightPath)}>
              <FaShoppingBag color={accentColor} />
              {ovenList && ovenList.length > 0 && (
                <View>
                  <Text>{ovenList.length}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default WebHeader;

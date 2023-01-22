import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ICompleteScreen} from '../../models/ICompleteScreen';
import {fontColor} from '../../styles/GlobalStyles';

const OrderScreen: React.FC<ICompleteScreen> = ({navigation}) => {
  return (
    <View style={{minHeight: '100%', backgroundColor: fontColor}}>
      <Text>OrderScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('OrderComplete')}>
        <Text>Completes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreen;

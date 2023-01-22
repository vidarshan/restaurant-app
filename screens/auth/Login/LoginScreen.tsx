import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import CustomInput from '../../../components/CustomInput';
import {authStyles} from '../../../styles/AuthScreens';
import {viewPadding, warningColor} from '../../../styles/GlobalStyles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={authStyles.authView}>
      <View style={{padding: viewPadding}}>
        <Icon
          style={authStyles.iconSpacing}
          name="hamburger"
          size={60}
          color={warningColor}
        />
        <CustomHeader title="Login to your account" />
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" />
        <CustomButton title="Login" type="default" />
        <CustomButton title="New User?" type="inverted" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

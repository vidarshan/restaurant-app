import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import CustomInput from '../../../components/CustomInput';
import {ILoginScreen} from '../../../models/ILoginScreen';
import {authStyles} from '../../../styles/AuthScreens';
import {warningColor} from '../../../styles/GlobalStyles';

const LoginScreen: React.FC<ILoginScreen> = ({navigation}) => {
  return (
    <SafeAreaView style={authStyles.authView}>
      <View style={authStyles.authViewPadding}>
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
        <CustomButton
          title="New User?"
          type="inverted"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

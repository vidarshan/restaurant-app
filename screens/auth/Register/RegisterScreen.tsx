import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import CustomInput from '../../../components/CustomInput';
import {IRegisterScreen} from '../../../models/IRegisterScreen';
import {authStyles} from '../../../styles/AuthScreens';
import {warningColor} from '../../../styles/GlobalStyles';

const RegisterScreen: React.FC<IRegisterScreen> = ({navigation}) => {
  return (
    <SafeAreaView style={authStyles.authView}>
      <View style={authStyles.authViewPadding}>
        <Icon
          style={authStyles.iconSpacing}
          name="fire"
          size={60}
          color={warningColor}
        />
        <CustomHeader title="Create new account" />
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" />
        <CustomInput placeholder="Confirm Password" />
        <CustomButton
          type="default"
          title="Register"
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          type="inverted"
          title="Have an account?"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import CustomInput from '../../../components/CustomInput';
import {ILoginScreen} from '../../../models/ILoginScreen';
import {loginUser} from '../../../redux/auth';
import {RootState} from '../../../redux/store';
import {authStyles} from '../../../styles/AuthScreens';
import {warningColor} from '../../../styles/GlobalStyles';

const LoginScreen: React.FC<ILoginScreen> = ({navigation}) => {
  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.login);
  console.log('loginState', loginState);
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
        <CustomButton
          title="Login"
          type="default"
          onPress={() =>
            dispatch(
              loginUser({
                username: 'vidarshan',
                email: 'vidarshanadithya3@gmail.com',
                phone: '+94771292000',
                token: 'AdwjffbubEB232bbHBD',
              }),
            )
          }
        />
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

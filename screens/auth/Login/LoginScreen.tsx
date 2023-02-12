import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../../components/CustomHeader';
import {ILoginScreen} from '../../../models/ILoginScreen';
import {getUser, logInUser} from '../../../redux/auth';
import {AppDispatch, RootState} from '../../../redux/store';
import {authStyles} from '../../../styles/AuthScreens';
import {customButtonStyles} from '../../../styles/CustomButton';
import {unselectedStar, warningColor} from '../../../styles/GlobalStyles';

const LoginScreen: React.FC<ILoginScreen> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const loginState = useSelector((state: RootState) => state.auth);
  const [phone, setPhone] = useState('0771234567');
  const [password, setPassword] = useState('123456');

  const submitLoginUser = () => {
    dispatch(logInUser({phone, password}));
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, loginState]);

  return (
    <SafeAreaView style={authStyles.authView}>
      {console.log(loginState)}
      <View style={authStyles.authViewPadding}>
        <Icon
          style={authStyles.iconSpacing}
          name="hamburger"
          size={60}
          color={warningColor}
        />
        <CustomHeader title="Login to your account" />
        <TextInput
          editable
          value={phone}
          maxLength={40}
          onChangeText={text => setPhone(text)}
          placeholder="Phone"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <TextInput
          editable
          value={password}
          maxLength={40}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <TouchableHighlight
          disabled={phone === '' && password === ''}
          style={customButtonStyles.defaultBtn}
          onPress={() => submitLoginUser()}>
          <Text style={customButtonStyles.defaultText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={customButtonStyles.invertedBtn}
          onPress={() => navigation.navigate('AuthRegister')}>
          <Text style={customButtonStyles.invertedText}>New User?</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

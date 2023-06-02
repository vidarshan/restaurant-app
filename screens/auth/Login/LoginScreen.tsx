import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../../components/CustomHeader';
import {ILoginScreen} from '../../../models/ILoginScreen';
import {logInUser} from '../../../redux/auth';
import {AppDispatch, RootState} from '../../../redux/store';
import {authStyles} from '../../../styles/AuthScreens';
import {customButtonStyles} from '../../../styles/CustomButton';
import {unselectedStar, warningColor} from '../../../styles/GlobalStyles';
import {GiFullPizza} from 'react-icons/gi';
const LoginScreen: React.FC<ILoginScreen> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {error} = useSelector((state: RootState) => state.auth);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const submitLoginUser = () => {
    dispatch(logInUser({phone, password}));
    setPhone('');
    setPassword('');
  };

  return (
    <SafeAreaView style={authStyles.authView}>
      <View style={authStyles.authViewPadding}>
        <GiFullPizza size={60} color={warningColor} />
        <CustomHeader title="Login to your account" />
        <Text style={authStyles.error}>{error}</Text>
        <TextInput
          editable
          value={phone}
          maxLength={10}
          onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
          placeholder="Phone"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <TextInput
          editable
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholder="Password"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <TouchableHighlight
          disabled={phone === '' && password === ''}
          style={
            phone === '' || password === ''
              ? customButtonStyles.disabledBtn
              : customButtonStyles.defaultBtn
          }
          onPress={() => submitLoginUser()}>
          <Text style={customButtonStyles.defaultText}>Login</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

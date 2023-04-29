import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../../components/CustomHeader';
import {ILoginScreen} from '../../../models/ILoginScreen';
import {getUser, logInUser, resetError} from '../../../redux/auth';
import {AppDispatch, RootState} from '../../../redux/store';
import {authStyles} from '../../../styles/AuthScreens';
import {customButtonStyles} from '../../../styles/CustomButton';
import {unselectedStar} from '../../../styles/GlobalStyles';

const LoginScreen: React.FC<ILoginScreen> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {error, user} = useSelector((state: RootState) => state.auth);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const submitLoginUser = () => {
    dispatch(logInUser({phone, password}));
    setPhone('');
    setPassword('');
  };

  useEffect(() => {
    dispatch(getUser());
    if (user.token) {
      navigation.navigate('Home');
      dispatch(resetError());
    }
  }, [dispatch, navigation, user]);

  return (
    <SafeAreaView style={authStyles.authView}>
      <View style={authStyles.authViewPadding}>
        {/* <Icon
          style={authStyles.iconSpacing}
          name="hamburger"
          size={60}
          color={warningColor}
        /> */}
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

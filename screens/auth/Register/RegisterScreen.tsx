import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../../components/CustomHeader';
import {IRegisterScreen} from '../../../models/IRegisterScreen';
import {getUser, registerUser, resetError} from '../../../redux/auth/index';
import {AppDispatch, RootState} from '../../../redux/store';
import {authStyles} from '../../../styles/AuthScreens';
import {unselectedStar, warningColor} from '../../../styles/GlobalStyles';
import {setInitialUsers} from '../../../redux/auth/index';
import {customButtonStyles} from '../../../styles/CustomButton';

const RegisterScreen: React.FC<IRegisterScreen> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {error, user} = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitRegisterUser = () => {
    dispatch(registerUser({username, phone, password, confirmPassword}));
    setUsername('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
  };
  useEffect(() => {
    dispatch(setInitialUsers());
  }, [user, dispatch]);

  useEffect(() => {
    dispatch(getUser());
    if (user.token !== '') {
      navigation.navigate('Home');
      dispatch(resetError());
    } else {
      navigation.navigate('AuthLogin');
    }
  }, [dispatch, navigation, user]);

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
        <Text style={authStyles.error}>{error}</Text>
        <TextInput
          editable
          value={username}
          maxLength={40}
          onChangeText={text => setUsername(text)}
          placeholder="Username"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <TextInput
          editable
          value={phone}
          onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
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
        <TextInput
          editable
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          maxLength={40}
          placeholder="Confirm Password"
          style={authStyles.input}
          placeholderTextColor={unselectedStar}
        />
        <TouchableHighlight
          disabled={
            (username === '' &&
              password === '' &&
              phone === '' &&
              confirmPassword === '') ||
            password !== confirmPassword
          }
          style={
            username === '' &&
            password === '' &&
            phone === '' &&
            confirmPassword === ''
              ? customButtonStyles.disabledBtn
              : customButtonStyles.defaultBtn
          }
          onPress={() => submitRegisterUser()}>
          <Text style={customButtonStyles.defaultText}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={customButtonStyles.invertedBtn}
          onPress={() => navigation.navigate('AuthLogin')}>
          <Text style={customButtonStyles.invertedText}>Have an account?</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

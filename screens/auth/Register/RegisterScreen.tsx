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
import {registerUser} from '../../../redux/auth/index';
import {AppDispatch, RootState} from '../../../redux/store';
import {authStyles} from '../../../styles/AuthScreens';
import {unselectedStar, warningColor} from '../../../styles/GlobalStyles';
import {setInitialUsers} from '../../../redux/auth/index';
import {customButtonStyles} from '../../../styles/CustomButton';

const RegisterScreen: React.FC<IRegisterScreen> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = useState('johndoe');
  const [phone, setPhone] = useState('0771234567');
  const [password, setPassword] = useState('123456');
  const [confirmPassword, setConfirmPassword] = useState('123456');

  const submitRegisterUser = () => {
    dispatch(registerUser({username, phone, password, confirmPassword}));
  };
  useEffect(() => {
    dispatch(setInitialUsers());
  }, [user, dispatch]);

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
          style={customButtonStyles.defaultBtn}
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

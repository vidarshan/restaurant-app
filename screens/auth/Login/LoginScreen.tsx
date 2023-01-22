import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomInput from '../../../components/CustomInput';
import {
  accentColor,
  bgColor,
  cardbgColor,
  viewPadding,
  warningColor,
} from '../../../styles/GlobalStyles';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: bgColor,
      }}>
      <View style={{padding: viewPadding}}>
        <Icon
          style={{marginBottom: 10}}
          name="hamburger"
          size={60}
          color={warningColor}
        />
        <Text
          style={{
            color: accentColor,
            fontSize: 20,
            marginBottom: 10,
            fontWeight: '600',
          }}>
          Login to your account
        </Text>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: cardbgColor,
            borderRadius: 8,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 20,
            color: 'white',
            marginTop: 10,
            marginBottom: 10,
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            flex: 1,
            backgroundColor: cardbgColor,
            borderRadius: 8,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 20,
            color: 'white',
            marginTop: 10,
            marginBottom: 10,
          }}
          placeholder="Password"
        />
        <TouchableOpacity
          style={{
            backgroundColor: accentColor,
            borderRadius: 8,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 10,
          }}>
          <Text
            style={{color: bgColor, textAlign: 'center', fontWeight: '600'}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: accentColor,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            New User?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

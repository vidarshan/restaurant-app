import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Button,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  accentColor,
  bgColor,
  cardbgColor,
  largerFontSize,
  viewPadding,
  warningColor,
} from '../../../styles/GlobalStyles';

const RegisterScreen = ({navigation}) => {
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
          name="fire"
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
          Create new account
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
          placeholder="Confirm Password"
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
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
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
            Have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

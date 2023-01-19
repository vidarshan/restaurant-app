import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import CustomInput from '../../../components/CustomInput';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Sample</Text>
      <CustomInput />
      <CustomInput />
      <CustomInput />
      <Button
        onPress={() => navigation.navigate('Register')}
        title="Navigate"
      />
      <Button
        onPress={() => navigation.navigate('Register')}
        title="Navigate"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

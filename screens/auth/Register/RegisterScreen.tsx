import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Sample</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Navigate" />
    </SafeAreaView>
  );
};

export default LoginScreen;

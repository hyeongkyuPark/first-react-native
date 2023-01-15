import React from 'react';
import {Button, Text, View} from 'react-native';
import useStackNavigaion from 'src/hooks/useStackNavigation';

const LoginPage = () => {
  const {navigation} = useStackNavigaion('Login');

  return (
    <View>
      <Text>Login Page</Text>
      <Button title="로그인" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default LoginPage;

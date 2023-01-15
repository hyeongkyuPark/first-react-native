import React from 'react';
import {Button, Text, View} from 'react-native';
import useStackNavigaion from 'src/hooks/useStackNavigation';

const TutorialPage = () => {
  const {navigation} = useStackNavigaion('Tutorial');

  return (
    <View>
      <Text>튜토리얼</Text>
      <Button title="다음" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default TutorialPage;

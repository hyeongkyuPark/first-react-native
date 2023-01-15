import React from 'react';
import {Button, Text, View} from 'react-native';
import useTabNavigaion from 'src/hooks/useTabNavigation';

const UserPage = () => {
  const {
    route: {params},
    navigation,
  } = useTabNavigaion('User');

  return (
    <View>
      <Text>user Page</Text>
      <Button
        title="go home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text>{params?.name}</Text>
      <Text>{params?.age}</Text>
    </View>
  );
};

export default UserPage;

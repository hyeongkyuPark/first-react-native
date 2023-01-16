/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import HomePage from 'src/pages/Home';
import UserPage from 'src/pages/User';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TutorialPage from 'src/pages/Tutorial';
import LoginPage from 'src/pages/Login';
import MainTab from 'src/routes/tabNavigations/MainTabs';
import ImagePikerPage from 'src/pages/ImagePick';
import AnimationPage from 'src/pages/Animation';

export type RootStackParamList = {
  Tutorial: undefined;
  Login: undefined;
  Main: undefined;
  ImagePicker: undefined;
  AnimationPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimationPage">
        <Stack.Screen name="Tutorial" component={TutorialPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen
          name="Main"
          component={MainTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ImagePicker" component={ImagePikerPage} />
        <Stack.Screen name="AnimationPage" component={AnimationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

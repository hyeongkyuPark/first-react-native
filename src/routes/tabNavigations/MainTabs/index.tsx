import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from 'src/pages/Home';
import UserPage from 'src/pages/User';

export type MainTabParamList = {
  Home: undefined;
  User: {name: string; age: number};
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="User" component={UserPage} />
    </Tab.Navigator>
  );
};

export default MainTab;

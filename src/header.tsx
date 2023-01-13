import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface HeaderProps {
  name: string;
}

const Header = ({name}: HeaderProps) => (
  <TouchableOpacity style={sytles.headerView}>
    <View>
      <Text style={sytles.headerText}>{name}</Text>
    </View>
  </TouchableOpacity>
);

const sytles = StyleSheet.create({
  headerView: {
    width: '100%',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    padding: 5,
  },
});

export default Header;

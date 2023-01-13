import React from 'react';
import {
  Button as ReactButton,
  StyleSheet,
  View,
  ButtonProps as ReactButtonProps,
} from 'react-native';

interface ButtonProps extends ReactButtonProps {}

const Button = (props: ButtonProps) => {
  return (
    <View style={sytles.buttonView}>
      <ReactButton {...props} />
    </View>
  );
};

const sytles = StyleSheet.create({
  buttonView: {
    width: '100%',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;

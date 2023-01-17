import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

const AnimationPage = () => {
  const animation = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            opacity: animation,
            top: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [200, 0],
            }),
          },
        ]}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          console.log('test>>>>');

          Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: false,
          }).start();
        }}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default AnimationPage;

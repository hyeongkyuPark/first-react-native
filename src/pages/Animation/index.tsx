import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

const AnimationPage = () => {
  const animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.x,
              },
              {
                translateY: animation.y,
              },
            ],
          },
        ]}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          Animated.timing(animation, {
            toValue: {x: 100, y: 100},
            useNativeDriver: true,
          }).start();
        }}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          Animated.timing(animation, {
            toValue: {x: 0, y: 0},
            useNativeDriver: true,
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

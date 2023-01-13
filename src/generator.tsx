import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface GeneratorProps {
  onPress: () => void;
}

const Generator = ({onPress}: GeneratorProps) => (
  <View style={styles.generator}>
    <Button title="버튼 테스트" onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  generator: {
    width: '100%',
    backgroundColor: '#312dd2',
  },
});

export default Generator;

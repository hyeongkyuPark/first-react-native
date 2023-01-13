/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Steak from 'assets/images/img-steak.jpg';
import ModalCompnent from '@components/Modal';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const HomeScreen = () => {
  // const [inputState, steInputState] = useState('');
  // const [texts, setTexts] = useState<string[]>([]);
  const [pickerValue, setPickerValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  // const handleInputChange = (event: string) => {
  //   steInputState(event);
  // };

  // const handleAddClick = () => {
  //   setTexts(prev => [...prev, inputState]);
  //   steInputState('');
  // };

  // const handleTextClick = (idx: number) => {
  //   setTexts(prev => prev.filter((text, index) => index !== idx));
  // };

  return (
    <ScrollView style={styles.mainView}>
      <ActivityIndicator
        style={styles.loadingContainer}
        animating={isLoading}
      />
      <Picker
        selectedValue={pickerValue}
        onValueChange={value => setPickerValue(value)}>
        <Picker.Item label="test" value="test" />
        <Picker.Item label="test2" value="test2" />
        <Picker.Item label="test3" value="test3" />
        <Picker.Item label="test4" value="test4" />
        <Picker.Item label="test5" value="test5" />
      </Picker>
      <View style={styles.sliderView}>
        <Slider
          value={sliderValue}
          onValueChange={value => setSliderValue(value)}
          minimumValue={0}
          maximumValue={100}
          step={1}
        />
        <Text style={styles.sliderText}>{sliderValue}</Text>
      </View>
      <Image style={styles.imageStyle} source={Steak} resizeMode={'contain'} />
      <ModalCompnent />
      {/* <TextInput
      style={styles.input}
      value={inputState}
      onChangeText={handleInputChange}
      onSubmitEditing={handleAddClick}
      blurOnSubmit={false}
    />
    <Button title="입력" onPress={handleAddClick} />
    <ScrollView style={styles.subView}>
      {texts.map((text, idx) => (
        <Text style={styles.subText} onPress={() => handleTextClick(idx)}>
          {text}
        </Text>
      ))}
    </ScrollView> */}
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 300,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sliderView: {
    width: '100%',
    padding: 20,
  },
  sliderText: {
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  mainView: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  textView: {
    marginBottom: 8,
  },
  subView: {
    width: '100%',
    marginTop: 10,
  },
  subText: {
    color: '#fff',
    backgroundColor: '#7e73ff',
    padding: 10,
    marginBottom: 10,
  },
  mainText: {
    fontSize: 30,
    fontWeight: '700',
  },
  flexRowView: {
    flexDirection: 'row',
  },
  contentView: {
    padding: 20,
    margin: 4,
    flex: 1,
    backgroundColor: 'yellow',
  },
  fistContentView: {
    padding: 20,
    margin: 4,
    marginLeft: 0,
    flex: 1,
    backgroundColor: 'yellow',
  },
  secondContentView: {
    padding: 20,
    margin: 4,
    marginRight: 0,
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default App;

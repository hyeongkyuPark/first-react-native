import React, {useState} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const ImagePikerPage = () => {
  const [avatar, setAvatar] = useState(
    'https://as1.ftcdn.net/v2/jpg/00/79/36/04/1000_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg',
  );

  const addImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      setAvatar(response?.assets?.[0]?.uri || '');
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.mainImage} source={{uri: avatar}} />
      <Button title="add image.." onPress={addImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efff5e',
  },
  mainImage: {
    width: '100%',
    height: 400,
  },
});

export default ImagePikerPage;

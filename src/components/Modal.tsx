import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import Button from './atom/Button';

const ModalCompnent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModalOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <View style={{width: '100%'}}>
      <Button title="open modal" onPress={toggleModalOpen} />
      <Modal visible={isOpen}>
        <View style={{marginTop: 60}}>
          <Text>test</Text>
          <Button title="close modal" onPress={toggleModalOpen} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalCompnent;

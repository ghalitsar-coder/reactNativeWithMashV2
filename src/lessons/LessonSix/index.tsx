import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';

const LessonSix = ({navigation}) => {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handlePress = () => {
    if (name.length > 3) {
      setIsSubmitted(prev => !prev);
    } else {
      setShowModal(true);
      //* REACT NATIVE ALERT
      //   reactNativeAlert();
      // * REACT NATIVE TOAST
    }
  };
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png',
      }}>
      <Modal
        visible={showModal}
        animationType="slide"
        hardwareAccelerated
        transparent
        onRequestClose={() => setShowModal(false)}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text>The name must be longer than 3 characters! </Text>
                <Button onPress={() => setShowModal(false)} text={'Oke'} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Text>Please Write your name</Text>
      <TextInput
        onChangeText={val => setName(val)}
        placeholder="e.g John Doe"
        style={styles.textInput}
        multiline
        value={name}
        //   keyboardType=''
        // maxLength={4}
        // editable={false}
        //   secureTextEntry=false
      />

      <Button text={isSubmitted ? 'Clear' : 'Submit'} onPress={handlePress} />

      {isSubmitted ? (
        <>
          <Text>Your are registered as {name} </Text>
          <Image
            source={require('../../assets/person.jpg')}
            style={styles.image}
            resizeMode={'cover'}
          />
        </>
      ) : (
        <Image
          source={require('../../assets/person-2.jpg')}
          style={styles.image}
          resizeMode={'contain'}
        />
      )}
      <Button
        text={'Go To Details'}
        onPress={() => navigation.navigate('Details')}
      />
    </ImageBackground>
  );
};

export default LessonSix;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FCFFf5',
    rowGap: 10,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 200,
  },
  modalOverlay: {
    backgroundColor: '#00000099',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    flex: 0.3,
    backgroundColor: '#fcfff5',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    rowGap: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

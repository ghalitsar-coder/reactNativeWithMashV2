import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const LessonOne = () => {
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(0);
  const handleCounter = () => {
    setCounter(prev => prev + 5);
    setIndex(prev => ++prev);
  };

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <TouchableOpacity style={styles.button} onPress={handleCounter}>
        <Text>Add Counter</Text>
      </TouchableOpacity>
      <Text>You clicked {index} times </Text>
    </View>
  );
};

export default LessonOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355c7d',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  button: {
    paddingHorizontal: 17,
    paddingVertical: 7,
    backgroundColor: '#faadcc',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
  },
});

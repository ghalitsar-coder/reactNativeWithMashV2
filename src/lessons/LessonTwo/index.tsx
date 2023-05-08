import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const LessonTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LessonTwo</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text>Update State</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LessonTwo;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#f5a7cc',
    borderWidth: 10,
    borderColor: '#ac8bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#ac8bbb',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

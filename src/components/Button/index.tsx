import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({onPress, text}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}> {text} </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#355c7d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

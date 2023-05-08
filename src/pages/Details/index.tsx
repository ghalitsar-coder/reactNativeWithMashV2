import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {LessonFive} from '../../lessons';

const Details = () => {
  return (
    <View style={styles.container}>
      <LessonFive />
      
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

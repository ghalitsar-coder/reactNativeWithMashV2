import {View, StyleSheet} from 'react-native';
import React from 'react';
import {LessonSix} from '../../lessons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LessonSix navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

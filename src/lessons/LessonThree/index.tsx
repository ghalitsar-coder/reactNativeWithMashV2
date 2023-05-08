import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const LessonThree = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentOne}>
        <View style={{...styles.textOneContentOne}}>
          <Text> 1</Text>
        </View>
        <View style={{...styles.textTwoContentOne}}>
          <Text> 2</Text>
        </View>
        <View style={{...styles.textThreeContentOne}}>
          <Text> 3</Text>
        </View>
      </View>
      <View style={styles.contentTwo}>
        <View style={styles.textOneContentTwo}>
          <Text>4</Text>
        </View>
        <View style={styles.textTwoContentTwo}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.contentThree}>
        <View style={styles.viewOneContentThree}>
          <Text>6</Text>
        </View>
        <View style={styles.viewTwoContentThree}>
          <Text>7</Text>
        </View>
      </View>
    </View>
  );
};

export default LessonThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentOne: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#f1ffc2',
  },
  textOneContentOne: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#ecc3fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTwoContentOne: {
    flex: 2,
    fontSize: 20,
    backgroundColor: '#bcc3fa',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textThreeContentOne: {
    flex: 3,
    fontSize: 20,
    backgroundColor: '#dcc3fa',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTwo: {
    flex: 1,
    flexDirection: 'column',
  },
  textOneContentTwo: {
    flex: 1,
    backgroundColor: '#faa3fa',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTwoContentTwo: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#bba3fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentThree: {
    flex: 3,
    flexDirection: 'row',
  },
  viewOneContentThree: {
    flex: 1,
    backgroundColor: '#a3fa',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTwoContentThree: {
    flex: 1,
    backgroundColor: '#daa3fa',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

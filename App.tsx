import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LessonSeven} from './src/lessons';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LessonSeven />
    </NavigationContainer>
  );
}

export default App;

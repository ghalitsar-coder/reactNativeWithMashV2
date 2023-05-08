import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, HomeScreen, OnBoardingScreen} from '../../pages';

const Stack = createNativeStackNavigator();

const LessonSeven = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        options={{
          headerShown: false,
        }}
        component={OnBoardingScreen}
      />
      <Stack.Screen
        name="Home"
        // options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default LessonSeven;

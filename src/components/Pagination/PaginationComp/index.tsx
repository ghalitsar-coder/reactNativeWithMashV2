import {View, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const PaginationComp = ({i, x}: {i: number; x: SharedValue<number>}) => {
  const {width} = useWindowDimensions();
  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [(i - 1) * width, i * width, (i + 1) * width],
      [10, 20, 10],
      Extrapolate.CLAMP,
    );
    const opacityAnimation = interpolate(
      x.value,
      [(i - 1) * width, i * width, (i + 1) * width],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

  return <View style={[styles.dots, animatedDotStyle]} />;
};

export default PaginationComp;

const styles = StyleSheet.create({
  dots: {
    width: 10,
    height: 10,
    backgroundColor: 'orange',
    marginHorizontal: 10,
    borderRadius: 5,
  },
});

import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export type OnBoardingObj = {image: any; title: string; text: string};

type ItemContainer = {
  item: OnBoardingObj;
  index: number;
  x: SharedValue<number>;
};

const OnBoardingItem = ({item, index, x}: ItemContainer) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const imageAnimationStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP,
    );
    return {
      opacity: opacityAnimation,
      width: SCREEN_WIDTH * 0.8,
      height: SCREEN_WIDTH * 0.8,
      backgroundColor: 'red',
      transform: [
        {
          translateY: translateYAnimation,
        },
      ],
    };
  });
  const textAnimationStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP,
    );
    return {
      opacity: opacityAnimation,
      transform: [
        {
          translateY: translateYAnimation,
        },
      ],
    };
  });
  return (
    <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
      <Animated.Image source={item.image} style={[imageAnimationStyle]} />
      <Animated.View style={[textAnimationStyle]}>
        <Text style={styles.itemTitle}> {item.title} </Text>
        <Text style={styles.itemText}> {item.text} </Text>
      </Animated.View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f8e9b0',
  },
  itemTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  itemText: {
    color: 'black',
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 35,
  },
});

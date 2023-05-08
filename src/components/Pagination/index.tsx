import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {OnBoardingObj} from '../OnBoardingItem';
import {SharedValue} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper';
import PaginationComp from './PaginationComp';

const Pagination = ({
  data,
  x,
}: {
  data: Array<OnBoardingObj>;
  x: SharedValue<number>;
}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.paginationContainer}>
      {data?.map((_, idx) => (
        <PaginationComp x={x} i={idx} key={idx} />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

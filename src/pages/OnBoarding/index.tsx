import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import data from '../../constants';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {OnBoardingItem, Pagination} from '../../components';

const Onboarding = () => {
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
      console.log('THIS IS   event.contentOffset.x:', event.contentOffset.x);
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        onScroll={onScroll}
        data={data}
        renderItem={({item, index}) => (
          <OnBoardingItem index={index} item={item} x={x} />
        )}
        horizontal
        keyExtractor={item => String(item.id)}
        scrollEventThrottle={16}
        pagingEnabled
        // bounces={false}
        showsHorizontalScrollIndicator={false}
      />
      {/* <View style={styles.bottomContainer}>
        <Pagination data={data} x={x} />
      </View> */}
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8e9b0',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00ffcc',
    margin: 20,
  },
});

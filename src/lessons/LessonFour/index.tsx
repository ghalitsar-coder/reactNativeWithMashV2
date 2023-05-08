import {View, Text, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import {useGetRandomData} from '../../utils/useGetRandomData';

interface RandomItem {
  name: string;
  key: number;
}

interface getRandomDataProps {
  randomItems: RandomItem[];
  setRandomItems(prev: (prevItems: RandomItem[]) => RandomItem[]): void;
}

const LessonFour = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {randomItems, setRandomItems} =
    useGetRandomData() as getRandomDataProps;

  const onRefresh = () => {
    const lastRandomItem = randomItems.slice(-1)[0];
    setIsRefreshing(true);
    setRandomItems(prev => [
      ...prev,
      {name: `Item ${lastRandomItem.key + 1}`, key: lastRandomItem.key + 1},
    ]);
    setIsRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      {randomItems?.map(item => (
        <View key={item.key} style={styles.contentItem}>
          <Text> {item.name} </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default LessonFour;

const styles = StyleSheet.create({
  contentItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#355acd',
  },
});

import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  SectionList,
} from 'react-native';
import React, {useState} from 'react';
import {
  RandomDataItemSection,
  useGetRandomData,
} from '../../utils/useGetRandomData';

interface getRandomDataProps {
  randomItems: RandomDataItemSection[];
  setRandomItems(
    prev: (prevItems: RandomDataItemSection[]) => RandomDataItemSection[],
  ): void;
}

const LessonFive = () => {
  const {randomItems, setRandomItems} = useGetRandomData(
    true,
  ) as getRandomDataProps;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    let obj = [...randomItems].slice(-1)[0];
    const newIdx = Number(obj.title.split('-')[1]) + 1;
    const newData = [...Array(2).keys()].map(
      (item, idx) => `Item ${newIdx}-${++idx}`,
    );
    setRandomItems(prev => [
      ...prev,
      {title: `Title-${newIdx}`, data: newData},
    ]);
    setIsRefreshing(false);
  };

  return (
    <SectionList
      sections={randomItems}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={isRefreshing} />
      }
      keyExtractor={(item, idx) => idx.toString()}
      renderItem={({item}) => (
        <View>
          <Text>{item} </Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.headContent}>
          <Text>{section.title} </Text>
        </View>
      )}
    />
  );
};

export default LessonFive;

const styles = StyleSheet.create({
  headContent: {
    padding: 10,
    backgroundColor: '#355cd1',
  },
});

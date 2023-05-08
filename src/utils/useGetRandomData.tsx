import {useEffect, useState} from 'react';
export interface RandomDataItemSection {
  title: string;
  data: string[];
}

// Code to generate random data goes here

export const useGetRandomData = (isForSection = false) => {
  const [randomItems, setRandomItems] = useState<
    (RandomDataItemSection | {name: string; key: number})[]
  >([]);
  useEffect(() => {
    let arr = [];
    if (isForSection) {
      for (let i = 1; i <= 3; i++) {
        const data = [];
        const numItems = Math.floor(Math.random() * 10) + 1; // Generate a random number of items between 1 and 10
        for (let j = 1; j <= numItems; j++) {
          data.push(`Item ${i}-${j}`);
        }
        arr.push({title: `Title-${i}`, data});
      }
    } else {
      for (let i = 1; i <= 20; i++) {
        const item = {
          name: `Item ${i}`,
          key: i,
        };
        arr.push(item);
      }
    }

    setRandomItems(arr);
  }, [isForSection]);
  return {randomItems, setRandomItems};
};

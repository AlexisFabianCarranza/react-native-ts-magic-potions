import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import IPotion from '../interfaces/IPotion';
import styles from '../style/PotionCardStyle';
import Counter from './Counter';
import IPotionAccumulator from '../interfaces/IPotionAccumulator';

export interface Props {
  potion: IPotion;
  addPotion: (potion: IPotion) => void;
  removePotion: (potionId: IPotion) => void;
  potionsAccumulator: IPotionAccumulator[];
}

const PotionCard: React.FC<Props> = ({
  potion,
  addPotion,
  removePotion,
  potionsAccumulator,
}) => {
  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    if (potionsAccumulator.length === 0) {
      setNumber(0);
    }
    const potionAccumulator = potionsAccumulator.find(
      value => value.potion.id === potion.id,
    );
    if (potionAccumulator) {
      setNumber(potionAccumulator.quantity);
    }
  }, [potionsAccumulator]);
  return (
    <View
      style={{
        backgroundColor: potion.color,
        ...styles.container,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={potion.image}
          style={styles.image}
          testID={'potion-image'}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Counter
          currentNumber={number}
          nextNumber={() => addPotion(potion)}
          prevNumber={() => removePotion(potion)}
          testIDIndex={potion.id}
        />
      </View>
    </View>
  );
};

export default PotionCard;

import React from 'react';
import styles from '../style/CounterStyle';
import {Text, TouchableOpacity, View} from 'react-native';

export interface Props {
  currentNumber: number;
  nextNumber: () => void;
  prevNumber: () => void;
  testIDIndex?: number;
}

const Counter: React.FC<Props> = ({
  currentNumber,
  nextNumber,
  prevNumber,
  testIDIndex = 1,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          currentNumber === 0
            ? {
                opacity: 1,
                ...styles.sectionContainer,
              }
            : {
                ...styles.sectionContainer,
              }
        }
        onPress={prevNumber}
        disabled={currentNumber === 0}
        testID={`button-prev-number${testIDIndex}`}>
        <Text
          style={
            currentNumber === 0
              ? {
                  opacity: 0.5,
                  ...styles.text,
                }
              : {
                  ...styles.text,
                }
          }>
          {'-'}
        </Text>
      </TouchableOpacity>
      <View style={styles.sectionContainer}>
        <Text style={styles.text} testID={`current-number${testIDIndex}`}>
          {currentNumber}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.sectionContainer}
        onPress={nextNumber}
        testID={`button-next-number${testIDIndex}`}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

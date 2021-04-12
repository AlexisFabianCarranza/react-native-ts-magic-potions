import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import RootStackParamList from '../screens/RootStackParamList';
import {RouteProp} from '@react-navigation/native';
import {getMessageAttack} from '../utils/messages';
import styles from '../style/ResultScreenStyle';

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'ResultScreen'>;

export interface Props {
  route: ResultScreenRouteProp;
}

const ResultScreen: React.FC<Props> = ({route}) => {
  const {optimalAttacks} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.infoContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/wizard.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.defaultContainer}>
            <Text style={styles.descriptionText} testID={'text-result'}>
              {`Gracias al uso de pociones, el mago ha causado ${optimalAttacks.damageTotal}% de daño a su enemigo`}
            </Text>
          </View>
        </View>
        <View style={styles.defaultContainer}>
          <ScrollView>
            {optimalAttacks.usedPotions.map((potionsAccumulator, index) => (
              <View style={styles.attackContainer} key={index}>
                <Text
                  style={styles.subtitleText}
                  testID={`title-attack${index + 1}`}>
                  Ataque {index + 1}:
                </Text>
                <View style={styles.potionsContainer}>
                  {potionsAccumulator.map(({potion}, imageIndex) => (
                    <Image
                      source={potion.image}
                      style={styles.potionImage}
                      key={index}
                      testID={`image-attack${index + 1}${imageIndex + 1}`}
                    />
                  ))}
                </View>
                <Text
                  style={styles.descriptionText}
                  testID={`message-attack${index + 1}`}>
                  {getMessageAttack(potionsAccumulator)}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResultScreen;

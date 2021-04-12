import React, {useContext, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import Potions from '../constants/Potions';
import IPotion from '../interfaces/IPotion';
import PotionCard from '../components/PotionCard';
import styles from '../style/PotionsScreenStyle';
import {bestAttack} from '../controllers/AttackManager';
import RootStack from './RootStack';
import IAttacks from '../interfaces/IAttacks';
import IPotionAccumulator from '../interfaces/IPotionAccumulator';
import {LoadingContext} from '../contexts/LoadingContext';

export interface Props {
  navigation: any;
}

const PotionsScreen: React.FC<Props> = ({navigation}) => {
  const [potionsAccumulator, setPotionsAccumulator] = useState<
    IPotionAccumulator[]
  >([]);
  const potions = Potions;
  const {setLoading} = useContext(LoadingContext);

  const generateAttack = () => {
    if (potionsAccumulator.length === 0) {
      return ToastAndroid.show(
        'Por favor, seleccione por lo menos 1 poción para continuar',
        ToastAndroid.SHORT,
      );
    }
    setLoading(true);
    setTimeout(() => {
      const optimalAttacks: IAttacks = bestAttack(potionsAccumulator);
      setPotionsAccumulator([]);
      setLoading(false);
      navigation.navigate(RootStack.ResultScreen.name, {
        optimalAttacks: optimalAttacks,
      });
    }, 1);
  };

  const addPotion = (potion: IPotion) => {
    changePotionQuantiy(potion, 1);
  };

  const removePotion = (potion: IPotion) => {
    changePotionQuantiy(potion, -1);
  };

  const changePotionQuantiy = (potion: IPotion, quantity: number) => {
    setPotionsAccumulator(prevState => {
      const potionAccumulator = prevState.find(
        value => value.potion.id === potion.id,
      );
      if (potionAccumulator) {
        potionAccumulator.quantity += quantity;
        if (potionAccumulator.quantity === 0) {
          prevState = prevState.filter(
            value => value.potion.id !== potionAccumulator.potion.id,
          );
        }
        return [...prevState];
      } else {
        return [...prevState, {potion, quantity: 1}];
      }
    });
  };

  const renderItem = ({item}: {item: IPotion}) => (
    <PotionCard
      potion={item}
      addPotion={addPotion}
      removePotion={removePotion}
      potionsAccumulator={potionsAccumulator}
    />
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={potions}
          testID={'potions-list'}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={renderItem}
          keyExtractor={(item: IPotion) => item.id.toString()}
        />
      </View>
      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={generateAttack}
        testID={'button-attack'}>
        <Text style={styles.buttonText}>Atacar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default PotionsScreen;

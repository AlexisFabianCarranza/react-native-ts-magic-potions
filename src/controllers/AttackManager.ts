import IPotion from '../interfaces/IPotion';
import IPotionAccumulator from '../interfaces/IPotionAccumulator';
import {Weights} from '../constants/Weights';
import IAttacks from '../interfaces/IAttacks';

const possibleAttacks = (length: number) => {
  let availableCombinations: number[] = [];
  for (let i = length; i >= 0; i--) {
    availableCombinations.push(i);
  }
  return availableCombinations;
};

export const combinePotions = (
  potionAccumulators: IPotionAccumulator[],
  attackType: number,
  prevDamage: number,
) => {
  let nextStatePotions = [];
  let potionsAccumulatorTmp: IPotionAccumulator[] = [...potionAccumulators];
  let usedPotions: any[] = [];

  for (var i = 0; i < potionsAccumulatorTmp.length; i++) {
    const potionAccumulator: IPotionAccumulator = {...potionsAccumulatorTmp[i]};
    if (i < attackType) {
      usedPotions = usedPotions.concat({...potionAccumulator, quantity: 1});
      potionAccumulator.quantity -= 1;
    }
    if (potionAccumulator.quantity !== 0) {
      nextStatePotions.push(potionAccumulator);
    }
  }
  return {
    potions: nextStatePotions,
    damageTotal: prevDamage + Weights[attackType],
    usedPotions,
  };
};

export const bestAttack = (
  potionAccumulators: IPotionAccumulator[],
  damageTotal: number = 0,
  usedPotions: IPotionAccumulator[][] = [],
) => {
  const potionsLength: number = potionAccumulators.length;

  if (potionsLength === 0) {
    return {damageTotal, usedPotions};
  }

  const possibleAttacksArray = possibleAttacks(potionsLength);

  let possibleNextPotions: any[] = [];
  for (var i = 0; i < potionsLength; i++) {
    possibleNextPotions = possibleNextPotions.concat(
      combinePotions(potionAccumulators, possibleAttacksArray[i], damageTotal),
    );
  }

  possibleNextPotions = possibleNextPotions.map(state =>
    bestAttack(state.potions, state.damageTotal, [
      ...usedPotions,
      state.usedPotions,
    ]),
  );

  let optimalAttacks: IAttacks = {damageTotal: 0, usedPotions: []};
  for (let i = 0; i < possibleNextPotions.length; i++) {
    if (optimalAttacks.damageTotal < possibleNextPotions[i].damageTotal) {
      optimalAttacks = possibleNextPotions[i];
    }
  }
  return optimalAttacks;
};

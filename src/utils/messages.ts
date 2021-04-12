import {Weights} from '../constants/Weights';
import IPotionAccumulator from '../interfaces/IPotionAccumulator';

export const getMessageAttack = (usedPotions: IPotionAccumulator[]) => {
  const attackType: number = usedPotions.length;
  if (attackType === 1) {
    return `Utilizó una unica poción y causó ${Weights[attackType]}% de daño`;
  } else {
    return `Mezcló ${attackType} pociones y causó ${Weights[attackType]}% de daño`;
  }
};

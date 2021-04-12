import IPotionAccumulator from './IPotionAccumulator';

export default interface IAttacks {
  damageTotal: number;
  usedPotions: IPotionAccumulator[][];
}

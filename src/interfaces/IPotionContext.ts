import IPotion from './IPotion';

export default interface IPotionContext {
  potions: IPotion[];
  addPotion: (potion: IPotion) => void;
}

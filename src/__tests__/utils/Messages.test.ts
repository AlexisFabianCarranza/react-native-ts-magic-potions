import 'react-native';
import {getMessageAttack} from '../../utils/messages';
import IPotionAccumulator from '../../interfaces/IPotionAccumulator';
import {bluePotion, redPotion} from '../../constants/Potions';

describe('Messages tests', () => {
  describe('Message attack test', () => {
    it('should return a message when attack type is 1', () => {
      const potionAccumulator: IPotionAccumulator[] = [
        {
          quantity: 5,
          potion: redPotion,
        },
      ];
      const message: string = getMessageAttack(potionAccumulator);

      expect(message).toBe('Utilizó una unica poción y causó 3% de daño');
    });
    it('should return a different message when attack type more than 1', () => {
      const potionAccumulator: IPotionAccumulator[] = [
        {
          quantity: 1,
          potion: redPotion,
        },
        {
          quantity: 1,
          potion: bluePotion,
        },
      ];
      const message: string = getMessageAttack(potionAccumulator);

      expect(message).toBe('Mezcló 2 pociones y causó 5% de daño');
    });
  });
});

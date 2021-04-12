import 'react-native';
import {bestAttack, combinePotions} from '../../controllers/AttackManager';
import IPotionAccumulator from '../../interfaces/IPotionAccumulator';
import {
  bluePotion,
  greenPotion,
  purplePotion,
  redPotion,
  yellowPotion,
} from '../../constants/Potions';
import IAttacks from '../../interfaces/IAttacks';

describe('Best attack tests', () => {
  it('should calculate optimal attack with 2 red, 1 blue and 1 green potions', () => {
    const potionsAccumulator: IPotionAccumulator[] = [
      {
        potion: redPotion,
        quantity: 2,
      },
      {
        potion: bluePotion,
        quantity: 1,
      },
      {
        potion: greenPotion,
        quantity: 1,
      },
    ];
    const optimalAttacks: IAttacks = bestAttack(potionsAccumulator);

    expect(optimalAttacks.damageTotal).toBe(13);
  });

  it('should calculate optimal attack with 2 red, 2 blue, 1 green , 1 yellow and 1 purple potions', () => {
    const potionsAccumulator: IPotionAccumulator[] = [
      {
        potion: redPotion,
        quantity: 2,
      },
      {
        potion: bluePotion,
        quantity: 2,
      },
      {
        potion: greenPotion,
        quantity: 1,
      },
      {
        potion: yellowPotion,
        quantity: 1,
      },
      {
        potion: purplePotion,
        quantity: 1,
      },
    ];
    const optimalAttacks: IAttacks = bestAttack(potionsAccumulator);

    expect(optimalAttacks.damageTotal).toBe(31);
  });

  it('should calculate optimal attack with 2 red, 2 blue, 2 green , 1 yellow and 1 purple potions', () => {
    const potionsAccumulator: IPotionAccumulator[] = [
      {
        potion: redPotion,
        quantity: 2,
      },
      {
        potion: bluePotion,
        quantity: 2,
      },
      {
        potion: greenPotion,
        quantity: 2,
      },
      {
        potion: yellowPotion,
        quantity: 1,
      },
      {
        potion: purplePotion,
        quantity: 1,
      },
    ];
    const optimalAttacks: IAttacks = bestAttack(potionsAccumulator);

    expect(optimalAttacks.damageTotal).toBe(40);
  });
});

describe('Combine potions tests', () => {
  it('should combine 2 different potions', () => {
    const potionsAccumulator: IPotionAccumulator[] = [
      {
        potion: redPotion,
        quantity: 2,
      },
      {
        potion: bluePotion,
        quantity: 1,
      },
      {
        potion: greenPotion,
        quantity: 1,
      },
    ];
    const attackType: number = 2;
    const prevDamage: number = 5;
    const result: any = combinePotions(
      potionsAccumulator,
      attackType,
      prevDamage,
    );

    expect(result.damageTotal).toBe(10);
  });
  it('should combine 3 different potions', () => {
    const potionsAccumulator: IPotionAccumulator[] = [
      {
        potion: redPotion,
        quantity: 2,
      },
      {
        potion: bluePotion,
        quantity: 1,
      },
      {
        potion: greenPotion,
        quantity: 1,
      },
    ];
    const attackType: number = 3;
    const prevDamage: number = 5;
    const result: any = combinePotions(
      potionsAccumulator,
      attackType,
      prevDamage,
    );

    expect(result.damageTotal).toBe(15);
  });

  it('should combine 4 different potions', () => {
    const potionsAccumulator: IPotionAccumulator[] = [
      {
        potion: redPotion,
        quantity: 2,
      },
      {
        potion: bluePotion,
        quantity: 1,
      },
      {
        potion: greenPotion,
        quantity: 1,
      },
      {
        potion: yellowPotion,
        quantity: 1,
      },
    ];
    const attackType: number = 4;
    const prevDamage: number = 5;
    const result: any = combinePotions(
      potionsAccumulator,
      attackType,
      prevDamage,
    );

    expect(result.damageTotal).toBe(25);
  });
  it('should combine 5 different potions', () => {
    const potionsAccumulator: IPotionAccumulator[] = [
      {
        potion: redPotion,
        quantity: 2,
      },
      {
        potion: bluePotion,
        quantity: 1,
      },
      {
        potion: greenPotion,
        quantity: 1,
      },
      {
        potion: yellowPotion,
        quantity: 1,
      },
      {
        potion: purplePotion,
        quantity: 1,
      },
    ];
    const attackType: number = 5;
    const prevDamage: number = 5;
    const result: any = combinePotions(
      potionsAccumulator,
      attackType,
      prevDamage,
    );

    expect(result.damageTotal).toBe(30);
  });
});

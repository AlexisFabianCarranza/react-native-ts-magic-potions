import React from 'react';
import {render} from '@testing-library/react-native';
import IPotion from '../../interfaces/IPotion';
import {bluePotion, redPotion} from '../../constants/Potions';
import PotionCard from '../../components/PotionCard';
import IPotionAccumulator from '../../interfaces/IPotionAccumulator';

describe('Potion Card', () => {
  let potion: IPotion = redPotion;
  let potionsAccumulator: IPotionAccumulator[] = [
    {
      potion,
      quantity: 2,
    },
    {
      potion: bluePotion,
      quantity: 3,
    },
  ];
  let getByTestId: any;
  let queryByText: any;

  beforeEach(() => {
    ({getByTestId, queryByText} = render(
      <PotionCard
        addPotion={() => {}}
        removePotion={() => {}}
        potion={potion}
        potionsAccumulator={potionsAccumulator}
      />,
    ));
  });

  it('should show image correctly', () => {
    expect(getByTestId('potion-image').props.source).toEqual(potion.image);
  });
  it('should show current number correctly', () => {
    expect(queryByText('2')).not.toBeNull();
    expect(queryByText('3')).toBeNull();
  });
});

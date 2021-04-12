import React from 'react';
import {render} from '@testing-library/react-native';
import {RouteProp} from '@react-navigation/native';
import ResultScreen from '../../screens/ResultScreen';
import RootStackParamList from '../../screens/RootStackParamList';
import {redPotion} from '../../constants/Potions';
import IAttacks from '../../interfaces/IAttacks';

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'ResultScreen'>;

describe('Potions Screen', () => {
  let getByTestId: any;
  const optimalAttacks: IAttacks = {
    damageTotal: 3,
    usedPotions: [[{potion: redPotion, quantity: 1}]],
  };

  const route: ResultScreenRouteProp = {
    key: 'ResultScreen',
    name: 'ResultScreen',
    params: {
      optimalAttacks,
    },
  };

  beforeEach(() => {
    ({getByTestId} = render(<ResultScreen route={route} />));
  });

  it('should render result message', () => {
    expect(getByTestId('text-result').props.children).toEqual(
      'Gracias al uso de pociones, el mago ha causado 3% de daño a su enemigo',
    );
  });

  it('should render attacks list', () => {
    expect(getByTestId('title-attack1').props.children).toEqual([
      'Ataque ',
      1,
      ':',
    ]);
    expect(getByTestId('image-attack11').props.source).toEqual(redPotion.image);
    expect(getByTestId('message-attack1').props.children).toEqual(
      'Utilizó una unica poción y causó 3% de daño',
    );
  });
});

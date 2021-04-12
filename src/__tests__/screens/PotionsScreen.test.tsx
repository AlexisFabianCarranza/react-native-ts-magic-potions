import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import PotionsScreen from '../../screens/PotionsScreen';
import Potions from '../../constants/Potions';

describe('Potions Screen', () => {
  let getByTestId: any;
  const navigate = jest.fn();

  beforeEach(() => {
    ({getByTestId} = render(<PotionsScreen navigation={{navigate}} />));
  });

  it('should pass potions to list of potion', () => {
    expect(getByTestId('potions-list').props.data).toEqual(Potions);
  });

  it('should show 1 when button next number is clicked', () => {
    fireEvent.press(getByTestId('button-next-number1'));
    expect(getByTestId('current-number1').props.children).toEqual(1);
  });

  it('should subtract 1 when button prev number is clicked', () => {
    fireEvent.press(getByTestId('button-next-number1'));
    fireEvent.press(getByTestId('button-next-number1'));
    expect(getByTestId('current-number1').props.children).toEqual(2);
    fireEvent.press(getByTestId('button-prev-number1'));
    expect(getByTestId('current-number1').props.children).toEqual(1);
  });

  it('should not subtract when the number is 0', () => {
    fireEvent.press(getByTestId('button-prev-number1'));
    expect(getByTestId('current-number1').props.children).toEqual(0);
  });
});

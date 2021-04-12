import React from 'react';
import Counter from '../../components/Counter';
import {render, fireEvent} from '@testing-library/react-native';

describe('Counter', () => {
  let currentNumber = 2;
  let nextNumber: any;
  let prevNumber: any;
  let getByTestId: any;

  beforeEach(() => {
    nextNumber = jest.fn();
    prevNumber = jest.fn();
    ({getByTestId} = render(
      <Counter
        currentNumber={currentNumber}
        prevNumber={prevNumber}
        nextNumber={nextNumber}
      />,
    ));
  });

  it('should show current number', () => {
    expect(getByTestId('current-number1').props.children).toEqual(2);
  });

  it('should execute nextNumber on click next', () => {
    fireEvent.press(getByTestId('button-next-number1'));
    expect(nextNumber).toHaveBeenCalled();
    expect(prevNumber).not.toHaveBeenCalled();
  });

  it('should execute prevNumber on click previous', () => {
    fireEvent.press(getByTestId('button-prev-number1'));
    expect(prevNumber).toHaveBeenCalled();
    expect(nextNumber).not.toHaveBeenCalled();
  });
});

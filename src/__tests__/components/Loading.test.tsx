import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from '../../components/Loading';
import {LoadingContext, ContextProps} from '../../contexts/LoadingContext';

describe('Loading Component', () => {
  it('should not render activity indicator on true state', () => {
    let getByTestId: any;
    let contextProps: ContextProps = {isLoading: true, setLoading: () => {}};
    ({getByTestId} = render(
      <LoadingContext.Provider value={contextProps}>
        <Loading />
      </LoadingContext.Provider>,
    ));
    expect(getByTestId('modal-activity-indicator').props.visible).toEqual(true);
  });

  it('should render activity indicator on true state', () => {
    let getByTestId: any;
    let contextProps: ContextProps = {isLoading: false, setLoading: () => {}};
    ({getByTestId} = render(
      <LoadingContext.Provider value={contextProps}>
        <Loading />
      </LoadingContext.Provider>,
    ));
    expect(getByTestId('modal-activity-indicator').props.visible).toEqual(
      false,
    );
  });
});

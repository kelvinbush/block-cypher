import reducer from '../charts/reducer';
import { FETCH_CHART_ERROR, FETCH_CHART_LOADING, FETCH_CHART_SUCCESS } from '../charts/actions';

describe('Testing charts store', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      prices: [],
      loading: false,
      error: null,
    });
  });

  it('should update state when loading', () => {
    expect(
      reducer(undefined, {
        type: FETCH_CHART_LOADING,
      }),
    ).toEqual({
      prices: [],
      loading: true,
      error: null,
    });
  });

  it('should update state when an error occurs', () => {
    expect(
      reducer(undefined, {
        type: FETCH_CHART_ERROR,
        payload: 'NullPointerException',
      }),
    ).toEqual({
      prices: [],
      loading: false,
      error: 'NullPointerException',
    });
  });

  it('should update state when new data is added', () => {
    expect(
      reducer(undefined, {
        type: FETCH_CHART_SUCCESS,
        payload: [{ time: '08:00', price: '$2000' }],
      }),
    ).toEqual({
      prices: [{ time: '08:00', price: '$2000' }],
      loading: false,
      error: null,
    });
  });
});

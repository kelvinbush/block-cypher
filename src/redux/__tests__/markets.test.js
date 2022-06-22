import reducer from '../markets/reducer';
import { FETCH_MARKETS_ERROR, FETCH_MARKETS_LOADING, FETCH_MARKETS_SUCCESS } from '../markets/actions';

describe('Testing markets store', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      markets: [],
      loading: false,
      error: null,
    });
  });

  it('should update state when loading', () => {
    expect(
      reducer(undefined, {
        type: FETCH_MARKETS_LOADING,
      }),
    ).toEqual({
      markets: [],
      loading: true,
      error: null,
    });
  });

  it('should update state when an error occurs', () => {
    expect(
      reducer(undefined, {
        type: FETCH_MARKETS_ERROR,
        payload: 'NullPointerException',
      }),
    ).toEqual({
      markets: [],
      loading: false,
      error: 'NullPointerException',
    });
  });

  it('should update state when new data is added', () => {
    expect(
      reducer(undefined, {
        type: FETCH_MARKETS_SUCCESS,
        payload: [{ id: 'bitcoin', currentPrice: '$20,000' }],
      }),
    ).toEqual({
      markets: [{ id: 'bitcoin', currentPrice: '$20,000' }],
      loading: false,
      error: null,
    });
  });
});

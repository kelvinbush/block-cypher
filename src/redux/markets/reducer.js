import { FETCH_MARKETS_ERROR, FETCH_MARKETS_LOADING, FETCH_MARKETS_SUCCESS } from './actions';

const initialState = {
  markets: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKETS_SUCCESS:
      return {
        ...state,
        markets: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MARKETS_ERROR:
      return {
        ...state,
        markets: [],
        loading: false,
        error: action.payload,
      };
    case FETCH_MARKETS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

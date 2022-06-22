import { FETCH_CHART_SUCCESS, FETCH_CHART_ERROR, FETCH_CHART_LOADING } from './actions';

const initialState = {
  prices: [],
  loading: false,
  error: null,
};

export default function chartsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHART_SUCCESS:
      return {
        ...state,
        prices: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CHART_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CHART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        prices: [],
      };
    default:
      return state;
  }
}

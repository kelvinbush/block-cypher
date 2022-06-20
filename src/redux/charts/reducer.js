import {FETCH_CHART_DATA, FETCH_CHART_DATA_ERROR, FETCH_CHART_DATA_LOADING} from "./actions";

const initialState = {
  prices: [],
  loading: false,
  error: null
}

export default function chartsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHART_DATA:
      return {
        ...state,
        prices: action.payload,
        loading: false,
        error: null
      }
    case FETCH_CHART_DATA_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_CHART_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

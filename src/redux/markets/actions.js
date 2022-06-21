import axios from 'axios';

const baseUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h`;
export const FETCH_MARKETS_SUCCESS = 'marketsStore/markets/FETCH_MARKETS_SUCCESS';
export const FETCH_MARKETS_ERROR = 'marketsStore/markets/FETCH_MARKETS_ERROR';
export const FETCH_MARKETS_LOADING = 'marketsStore/markets/FETCH_MARKETS_LOADING';

const fetchMarketsDataAction = (markets) => ({
  type: FETCH_MARKETS_SUCCESS,
  payload: markets,
});

const fetchMarketsDataErrorAction = (error) => ({
  type: FETCH_MARKETS_ERROR,
  payload: error,
});

const fetchMarketsDataLoading = () => ({
  type: FETCH_MARKETS_LOADING,
});

export const fetchMarketsData = () => async (dispatch) => {
  dispatch(fetchMarketsDataLoading());
  try {
    const response = await axios.get(baseUrl);
    dispatch(fetchMarketsDataAction(response.data));
  } catch (error) {
    dispatch(fetchMarketsDataErrorAction(error));
  }
};

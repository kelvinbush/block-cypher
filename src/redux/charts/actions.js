import axios from 'axios';
import { refinePrices } from '../../utils/refinePrices';

const baseUrl = 'https://api.coingecko.com/api/v3/coins/';
export const FETCH_CHART_SUCCESS = 'chartsStore/charts/FETCH_CHART_SUCCESS';
export const FETCH_CHART_ERROR = 'chartsStore/charts/FETCH_CHART_ERROR';
export const FETCH_CHART_LOADING = 'chartsStore/charts/FETCH_CHART_LOADING';

const fetchChartDataAction = (prices) => ({
  type: FETCH_CHART_SUCCESS,
  payload: prices,
});

const fetchChartDataErrorAction = (error) => ({
  type: FETCH_CHART_ERROR,
  payload: error,
});

const fetchChartDataLoading = () => ({
  type: FETCH_CHART_LOADING,
});

export const fetchChartData = (coinId, days) => async (dispatch) => {
  dispatch(fetchChartDataLoading());
  try {
    const response = await axios.get(`${baseUrl}${coinId}/market_chart?vs_currency=usd&days=${days}`);
    dispatch(fetchChartDataAction(refinePrices(response.data.prices, days)));
  } catch (error) {
    dispatch(fetchChartDataErrorAction(error));
  }
};

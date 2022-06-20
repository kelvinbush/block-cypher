import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3/coins/";
export const FETCH_CHART_DATA = 'chartsStore/charts/FETCH_CHART_DATA';
export const FETCH_CHART_DATA_ERROR = 'chartsStore/charts/FETCH_CHART_DATA_ERROR';
export const FETCH_CHART_DATA_LOADING = 'chartsStore/charts/FETCH_CHART_DATA_LOADING';


const fetchChartDataAction = (prices) => ({
  type: FETCH_CHART_DATA,
  payload: prices
});

const fetchChartDataErrorAction = (error) => ({
  type: FETCH_CHART_DATA_ERROR,
  payload: error
});

const fetchChartDataLoading = () => ({
  type: FETCH_CHART_DATA_LOADING
});


export const fetchChartData = (coinId, days) => async (dispatch) => {
  dispatch(fetchChartDataLoading());
  try {
    const response = await axios.get(`${baseUrl}${coinId}/market_chart?vs_currency=usd&days=${days}`);
    dispatch(fetchChartDataAction(response.data.prices));
  } catch (error) {
    dispatch(fetchChartDataErrorAction(error));
  }
}

import { convertTimeHoursMinutes, timeToDate } from './date-utils';

export const lowestPrice = (prices) => {
  if (prices.length === 0) {
    return 0;
  }
  return prices.reduce((acc, curr) => Math.min(acc, curr[1]));
};

const refineOneDayPrices = (prices) => {
  const data = prices.filter((item, index) => index % 2 === 0);
  return data.map((item) => ({
    time: convertTimeHoursMinutes(item[0]),
    price: Math.round(item[1] * 100) / 100,
  }));
};

const refineOneWeekPrices = (prices) => prices.map((item) => ({
  time: timeToDate(item[0]),
  price: Math.round(item[1] * 100) / 100,
}));

export const refineOneMonthPrices = (data) => {
  const myData = data.filter((item, index) => index % 24 === 0);
  return myData.map((item) => ({
    time: timeToDate(item[0]),
    price: Math.round(item[1] * 100) / 100,
  }));
};

export const refineSixMonthPrices = (data) => {
  const myData = data.filter((item, index) => index % 6 === 0);
  return myData.map((item) => ({
    time: timeToDate(item[0]),
    price: Math.round(item[1] * 100) / 100,
  }));
};

export const refineOneYearPrices = (data) => {
  const myData = data.filter((item, index) => index % 6 === 0);
  return myData.map((item) => ({
    time: timeToDate(item[0]),
    price: Math.round(item[1] * 100) / 100,
  }));
};
export const formatPrice = (price) => `$${price.toLocaleString()}`;

export const percentChange = (percentage) => `${Math.round(+percentage * 1000000) / 1000000}%`;

export const getDayString = (days) => {
  switch (+days) {
    case 1:
      return '1D';
    case 7:
      return '1W';
    case 30:
      return '1M';
    case 180:
      return '6M';
    case 365:
      return '1Y';
    default:
      return '1M';
  }
};

export function refinePrices(prices, days) {
  switch (+days) {
    case 7:
      return refineOneWeekPrices(prices);
    case 30:
      return refineOneMonthPrices(prices);
    case 180:
      return refineSixMonthPrices(prices);
    case 365:
      return refineOneYearPrices(prices);
    default:
      return refineOneDayPrices(prices);
  }
}

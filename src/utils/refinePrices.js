import { convertTimeHoursMinutes, timeToDate } from './date-utils';

export function refinePrices(prices, days) {
  switch (+days) {
    case 1:
      return refineOneDayPrices(prices);
    case 7:
      return refineOneWeekPrices(prices);
    default:
      break;
  }
}

export const lowestPrice = (prices) => {
  if (prices.length === 0) {
    return 0;
  }
  return prices.reduce((acc, curr) => {
    return Math.min(acc, curr[1]);
  });
};

const refineOneDayPrices = (prices) =>
  prices.map((item) => {
    return {
      time: convertTimeHoursMinutes(item[0]),
      price: Math.round(item[1] * 100) / 100,
    };
  });

const refineOneWeekPrices = (prices) =>
  prices.map((item) => {
    return {
      time: timeToDate(item[0]),
      price: Math.round(item[1] * 100) / 100,
    };
  });

export const skipDayIntervals = (data) => {
  let myData = data.filter((item, index) => index % 24 === 0);
  return myData.map((item) => {
    return {
      time: timeToDate(item[0]),
      price: Math.round(item[1] * 100) / 100,
    };
  });
};

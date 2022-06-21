import { convertTimeHoursMinutes, timeToDate } from './date-utils';

const daysOptions = [1, 7, 30, 180, 365];

export function refinePrices(prices, days) {
  switch (+days) {
    case 1:
      return refineOneDayPrices(prices);
    case 7:
      console.log('refineOneWeekPrices', days);
      return refineOneWeekPrices(prices);
    default:
      break;
  }
}

export const lowestPrice = (prices) => prices.reduce((acc, curr) => (acc.price < curr.price ? acc : curr));

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

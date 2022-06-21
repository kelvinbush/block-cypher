import { dateMonthTicker } from '../utils/data7';

const options = {
  day: {
    interval: 48,
  },
  week: {
    interval: 36,
    axisFormatter: (value) => dateMonthTicker(value),
  },
  month: {
    interval: 6,
    axisFormatter: (value) => dateMonthTicker(value),
  },
};

export const controls = (days) => {
  switch (+days) {
    case 1:
      return options.day;
    case 7:
      return options.week;
    default:
      return options.month;
  }
};

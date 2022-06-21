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

export const get_x_Controls = (days) => {
  switch (+days) {
    case 1:
      return options.day;
    case 7:
      return options.week;
    default:
      return options.month;
  }
};

export const toolTipStyle = {
  wrapper: {
    padding: '0',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,.2)',
    borderRadius: '5px',
  },
  item: {
    fontWeight: 'bold',
  },
  label: {
    order: '1',
  },
  content: {
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    columnGap: '7px',
    border: 'none',
    borderRadius: '5px',
  },
};

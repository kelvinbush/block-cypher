import { formatPrice, percentChange } from '../../utils/refinePrices';

const dateMonthTicker = (date) => {
  const mDate = date.split(' ');
  return `${mDate[2]} ${mDate[1]}`;
};

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
  sixMonth: {
    interval: 6,
    axisFormatter: (value) => dateMonthTicker(value),
  },
  year: {
    interval: 12,
    axisFormatter: (value) => dateMonthTicker(value),
  },
};

const getXAxisControls = (days) => {
  switch (+days) {
    case 1:
      return options.day;
    case 7:
      return options.week;
    case 180:
      return options.sixMonth;
    case 365:
      return options.year;
    default:
      return options.month;
  }
};

const coinData = (market) => ({
  isUp: +market.price_change_percentage_24h > 0,
  change: percentChange(market.price_change_percentage_24h),
  price: formatPrice(market.current_price),
  image: market.image,
  symbol: `${market.symbol}-USD`,
  name: `${market.name} USD`,
  mktCap: market.market_cap,
  rank: market.market_cap_rank,
  supply: market.circulating_supply,
  mCap: market.market_cap_change_percentage_24h,
  high: market.high_24h,
  low: market.low_24h,
  volume: market.total_volume,
});

const toolTipStyle = {
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
export {
  toolTipStyle, coinData, getXAxisControls, dateMonthTicker,
};

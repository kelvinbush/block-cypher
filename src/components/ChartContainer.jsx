import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from '../redux/charts/actions';
import styles from './ChartContainer.module.scss';
import { formatPrice, percentChange } from '../utils/refinePrices';
import { BsArrowDownRightCircleFill, BsArrowUpRightCircleFill } from 'react-icons/bs';

const ChartContainer = ({ coinId, isLoading, markets }) => {
  const [days, setDays] = useState('1');
  const charts = useSelector((state) => state.charts);
  const bitcoin = markets.find((market) => market.id === 'bitcoin');
  const { loading, error } = charts;
  const dispatch = useDispatch();
  const daysOptions = [1, 7, 30, 180, 365];

  useEffect(() => {
    dispatch(fetchChartData(coinId, days));
  }, [dispatch, coinId, days]);

  const coinData = bitcoin && {
    price: formatPrice(bitcoin.current_price),
    change: percentChange(bitcoin.price_change_percentage_24h),
    isUp: +bitcoin.price_change_percentage_24h > 0,
  };

  return (
    <div className={styles.chart}>
      <div className={styles.chart__header}>
        {bitcoin && (
          <div className={styles.chart__header__title}>
            <p>{coinData.price}</p>
            <span className={`${coinData.isUp ? styles.up : ''}`}>{coinData.change}</span>
            {coinData.isUp ? <BsArrowUpRightCircleFill className={styles.svg__up} /> : <BsArrowDownRightCircleFill />}
          </div>
        )}
        <p className={styles.chart__header__coin}>Bitcoin USD(BTC-USD)</p>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {charts.prices && <Chart prices={charts.prices} days={days} />}
      <select value={days} onChange={(e) => setDays(e.target.value)}>
        {daysOptions.map((item) => (
          <option key={item} value={item}>
            {item} days
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChartContainer;

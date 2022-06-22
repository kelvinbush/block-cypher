import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from '../../redux/charts/actions';
import styles from './ChartContainer.module.scss';
import { getDayString } from '../../utils/refinePrices';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import { coinData } from '../Chart/chart-config';

const ChartContainer = ({ coinId, markets }) => {
  const [days, setDays] = useState('1');
  const charts = useSelector((state) => state.charts);
  const bitcoin = markets.find((market) => market.id === 'bitcoin');
  const { loading, error } = charts;
  const dispatch = useDispatch();
  const daysOptions = [1, 7, 30, 180, 365];

  useEffect(() => {
    dispatch(fetchChartData(coinId, days));
  }, [dispatch, coinId, days]);

  const data = bitcoin && coinData(bitcoin);

  return (
    <div className={styles.chart}>
      <div className={styles.chart__header}>
        {bitcoin && (
          <div className={styles.chart__header__title}>
            <p>{data.price}</p>
            <ChangeIndicator coinData={data} isList={false} />
          </div>
        )}
        <p className={styles.chart__header__coin}>Bitcoin USD(BTC-USD)</p>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {charts.prices && (
        <div className={styles.container}>
          <div className={styles.container__chips}>
            {daysOptions.map((day) => (
              <button
                key={day}
                className={`${styles.container__chips__chip} ${days === day.toString() ? styles.active : ''}`}
                onClick={() => setDays(day.toString())}
              >
                {getDayString(day)}
              </button>
            ))}
          </div>
          <Chart prices={charts.prices} days={days} />
        </div>
      )}
    </div>
  );
};

export default ChartContainer;

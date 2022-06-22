import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Chart from '../Chart/Chart';
import { fetchChartData } from '../../redux/charts/actions';
import styles from './ChartContainer.module.scss';
import { getDayString } from '../../utils/refinePrices';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import { coinData } from '../Chart/chart-config';

const ChartContainer = ({ coin }) => {
  const [days, setDays] = useState('1');
  const charts = useSelector((state) => state.charts);
  const { loading, error } = charts;
  const dispatch = useDispatch();
  const daysOptions = [1, 7, 30, 180, 365];

  useEffect(() => {
    dispatch(fetchChartData(coin.id, days));
  }, [dispatch, coin.id, days]);

  const data = coin && coinData(coin);

  return (
    <div className={styles.chart}>
      <div className={styles.chart__header}>
        {coin && (
          <div className={styles.chart__header__title}>
            <p>{data.price}</p>
            <ChangeIndicator coinData={data} isList={false} />
          </div>
        )}
        <p className={styles.chart__header__coin}>
          {coin.name}
          {' '}
          (
          <span>
            {coin.symbol}
            -usd
          </span>
          )
        </p>
      </div>
      {loading && <p>Loading...</p>}
      {error && (
        <p>
          Error:
          {error}
        </p>
      )}
      {charts.prices && (
        <div className={styles.container}>
          <div className={styles.container__chips}>
            {daysOptions.map((day) => (
              <button
                type="button"
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

ChartContainer.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

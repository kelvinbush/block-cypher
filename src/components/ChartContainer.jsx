import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from '../redux/charts/actions';

const ChartContainer = ({ coinId }) => {
  const [days, setDays] = useState('1');
  const charts = useSelector((state) => state.charts);
  console.log(charts);
  const { loading, error } = charts;
  const dispatch = useDispatch();
  const daysOptions = [1, 7, 30, 180, 365];

  useEffect(() => {
    dispatch(fetchChartData(coinId, days));
  }, [dispatch, coinId, days]);

  return (
    <div>
      <h1>Chart</h1>
      <p>This is the chart page</p>
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

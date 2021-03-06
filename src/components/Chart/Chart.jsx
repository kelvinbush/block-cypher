/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from './Chart.module.scss';
import { getXAxisControls, toolTipStyle } from './chart-config';
import { lowestPrice } from '../../utils/refinePrices';

export default function Chart({ days, prices }) {
  const xAxisControls = getXAxisControls(days);

  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  return (
    <div className={styles.chart}>
      <ResponsiveContainer>
        <AreaChart data={prices}>
          <defs>
            <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(100,212,253,0.8)" />
              <stop offset="95%" stopColor="rgba(212,246,255, 0.5)" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          {xAxisControls.interval === 48 ? (
            <XAxis padding={{ left: 10 }} dataKey="time" interval={xAxisControls.interval} />
          ) : (
            <XAxis
              padding={{ left: 10 }}
              dataKey="time"
              interval={xAxisControls.interval}
              tickFormatter={xAxisControls.axisFormatter}
            />
          )}
          <YAxis
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
            domain={[lowestPrice(prices), 'auto']}
            tickCount={4}
            tickFormatter={(value) => `$${
              width > 600
                ? value.toLocaleString()
                : `${value < 1000 ? value.toFixed(2) : `${value.toLocaleString().slice(0, -4)}k`}`
            }`}
          />
          <Tooltip
            separator={' '}
            wrapperStyle={toolTipStyle.wrapper}
            labelStyle={toolTipStyle.label}
            itemStyle={toolTipStyle.item}
            contentStyle={toolTipStyle.content}
            formatter={(value) => [`$${value.toLocaleString()}`, '']}
            cursor={{ stroke: '#264ea8', strokeWidth: 1, strokeDasharray: '3 3' }}
          />
          <Area
            fillOpacity="1"
            strokeWidth="3"
            type="monotone"
            dataKey="price"
            stroke="#264ea8"
            fill="url(#MyGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

Chart.propTypes = {
  days: PropTypes.string.isRequired,
  prices: PropTypes.array.isRequired,
};

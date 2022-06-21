import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './Chart.module.scss';
import { lowestPrice } from '../utils/data7';
import { get_x_Controls, toolTipStyle } from './chart-config';

export default function Chart({ days, prices }) {
  const x_controls = get_x_Controls(days);
  return (
    <div className={styles.chart}>
      <ResponsiveContainer>
        <AreaChart data={prices}>
          <defs>
            <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(0, 136, 254, 0.8)" />
              <stop offset="95%" stopColor="rgba(0, 136, 254, 0)" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          {x_controls.interval === 48 ? (
            <XAxis padding={{ left: 10 }} dataKey="time" interval={x_controls.interval} />
          ) : (
            <XAxis
              padding={{ left: 10 }}
              dataKey="time"
              interval={x_controls.interval}
              tickFormatter={x_controls.axisFormatter}
            />
          )}
          <YAxis
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
            domain={[lowestPrice, 'auto']}
            tickCount={5}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip
            separator={' '}
            wrapperStyle={toolTipStyle.wrapper}
            labelStyle={toolTipStyle.label}
            itemStyle={toolTipStyle.item}
            contentStyle={toolTipStyle.content}
            formatter={(value, name, props) => [`$${value.toLocaleString()}`, '']}
            cursor={{ strokeWidth: 1, strokeDasharray: '3 3' }}
          />
          <Area
            fillOpacity="1"
            strokeWidth="3"
            type="monotone"
            dataKey="price"
            stroke={'#8884d8'}
            fill="url(#MyGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

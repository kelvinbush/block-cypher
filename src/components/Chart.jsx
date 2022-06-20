import React, {useState} from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import styles from './Chart.module.scss'
import {dateMonthTicker, lowestPrice, skipIntervals} from "../utils/data7";

export default function Chart({days, prices}) {
  let settings = {
    day: {
      interval: 48,
      formatter: (value, name, props) => [`$${value.toLocaleString()}`, ""]
    }
    , week: {
      interval: 36,
      xAxisFormatter: (value) => dateMonthTicker(value),
    },
    month: {
      interval: 6,
      xAxisFormatter: (value) => dateMonthTicker(value),
    }
  }
  let controls;
  if (+days >= 7) {
    controls = settings.week;
  } else if (+days >= 30) {
    controls = settings.month;
  } else {
    controls = settings.day;
  }


  return (
    <div className={styles.chart
    }>
      <ResponsiveContainer>
        <AreaChart data={prices}>
          <defs>
            <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(0, 136, 254, 0.8)" />
              <stop offset="95%" stopColor="rgba(0, 136, 254, 0)" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis padding={{left: 10}} dataKey="time" interval={controls.interval} />
          <YAxis axisLine={false} tickLine={false} interval="preserveStartEnd" domain={[lowestPrice, 'auto']}
                 tickCount={5}
                 tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip
            separator={' '}
            wrapperStyle={{
              padding: '0',
              background: '#fff',
              boxShadow: '0 0 10px rgba(0,0,0,.2)',
              borderRadius: '5px',
            }}
            labelStyle={{

              order: '1',
            }}
            itemStyle={{
              fontWeight: 'bold',
            }}
            contentStyle={{
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              columnGap: '7px',
              border: "none",
              borderRadius: '5px',
            }}
            formatter={(value, name, props) => [`$${value.toLocaleString()}`, ""]}
            cursor={{strokeWidth: 1, strokeDasharray: "3 3"}} />
          <Area fillOpacity="1" strokeWidth="3" type="monotone" dataKey="price" stroke={"#8884d8"}
                fill="url(#MyGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>);
}

import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, YAxis} from "recharts";
import styles from './Chart.module.scss'
import {lowestPrice} from "../utils/data7";
import CustomXAxis from "./CustomXAxis";

export default function Chart({days, prices}) {
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
          <CustomXAxis days={days} />
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

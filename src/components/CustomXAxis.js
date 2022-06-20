import React from 'react';
import {XAxis} from "recharts";
import {dateMonthTicker} from "../utils/data7";

const CustomXAxis = ({days}) => {
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
    }
  }
  console.log("days");
  let controls;
  switch (+days) {
    case 1:
      controls = options.day;
      break;
    case 7:
      controls = options.week;
      break;
    default:
      controls = options.month;
      break;
  }
  if (+days === 1) {
    console.log("controls");
    return <XAxis padding={{left: 10}} dataKey="time" interval={controls.interval} />
  }
  return <XAxis padding={{left: 10}} dataKey="time" interval={controls.interval}
                tickFormatter={controls.axisFormatter} />
};

export default CustomXAxis;

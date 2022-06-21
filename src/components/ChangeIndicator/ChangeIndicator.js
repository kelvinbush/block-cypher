import React from 'react';
import styles from '../ChartContainer/ChartContainer.module.scss';
import { BsArrowDownRightCircleFill, BsArrowUpRightCircleFill } from 'react-icons/bs';

const ChangeIndicator = ({ coinData }) => {
  return (
    <>
      <span className={`${coinData.isUp ? styles.up : ''}`}>{coinData.change}</span>
      {coinData.isUp ? <BsArrowUpRightCircleFill className={styles.svg__up} /> : <BsArrowDownRightCircleFill />}
    </>
  );
};

export default ChangeIndicator;

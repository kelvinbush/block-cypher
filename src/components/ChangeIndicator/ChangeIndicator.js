import React from 'react';
import styles from './ChangeIndicator.module.scss';
import { BsArrowDownRightCircleFill, BsArrowUpRightCircleFill } from 'react-icons/bs';

const ChangeIndicator = ({ coinData }) => {
  return (
    <div className={styles.indicator}>
      <span className={`${styles.change} ${coinData.isUp ? styles.up : ''}`}>{coinData.change}</span>
      {coinData.isUp ? <BsArrowUpRightCircleFill className={styles.svg__up} /> : <BsArrowDownRightCircleFill />}
    </div>
  );
};

export default ChangeIndicator;

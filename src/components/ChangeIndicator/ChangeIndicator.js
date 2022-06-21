import React from 'react';
import styles from './ChangeIndicator.module.scss';
import { BsArrowDownRightCircleFill, BsArrowUpRightCircleFill } from 'react-icons/bs';

const ChangeIndicator = ({ coinData, isList }) => {
  return (
    <div className={`${styles.indicator} ${isList ? styles.indicator_isList : ''}`}>
      <span className={`${styles.change} ${isList ? styles.change_isList : ''} ${coinData.isUp ? styles.up : ''}`}>
        {coinData.change}
      </span>
      {coinData.isUp ? <BsArrowUpRightCircleFill className={styles.svg__up} /> : <BsArrowDownRightCircleFill />}
    </div>
  );
};

export default ChangeIndicator;

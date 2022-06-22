/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowDownRightCircleFill, BsArrowUpRightCircleFill } from 'react-icons/bs';
import styles from './ChangeIndicator.module.scss';

const ChangeIndicator = ({ coinData, isList }) => (
  <div className={`${styles.indicator} ${isList ? styles.indicator_isList : ''}`}>
    <span className={`${styles.change} ${isList ? styles.change_isList : ''} ${coinData.isUp ? styles.up : ''}`}>
      {coinData.change}
    </span>
    {coinData.isUp ? <BsArrowUpRightCircleFill className={styles.svg__up} /> : <BsArrowDownRightCircleFill />}
  </div>
);

export default ChangeIndicator;

ChangeIndicator.propTypes = {
  coinData: PropTypes.shape({
    isUp: PropTypes.bool,
    change: PropTypes.string,
  }).isRequired,
  isList: PropTypes.bool.isRequired,
};

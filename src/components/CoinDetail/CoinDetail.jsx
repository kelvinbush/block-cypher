import React from 'react';
import styles from './CoinDetail.module.scss';
import { coinData } from '../Chart/chart-config';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const CoinDetail = ({ coin }) => {
  const { image, isUp, name, change, price, rank, symbol, mktCap, high, low, volume } = coinData(coin);

  return (
    <div className={styles.detail}>
      <div className={styles.detail_header}>
        <img src={image} alt={name} />
        <div>
          <p>{symbol.slice(0, -4)}</p>
          <p>Price statistics</p>
        </div>
      </div>
      <div className={styles.detail_container}>
        <div>
          <p>Price</p>
          <p>{price}</p>
        </div>
        <div>
          <p>Price Change</p>
          <p className={styles.detail_price}>
            <span className={`${isUp ? '' : styles.isDown}`}>
              {isUp ? <AiFillCaretUp /> : <AiFillCaretDown />}
              {change}
            </span>
          </p>
        </div>
        <div>
          <p>24 High</p>
          <p>${high.toLocaleString()}</p>
        </div>
        <div>
          <p>24 Low</p>
          <p>${low.toLocaleString()}</p>
        </div>
        <div>
          <p>Volume</p>
          <p>{volume.toLocaleString()}</p>
        </div>
        <div>
          <p>Rank</p>
          <p>{rank}</p>
        </div>
        <div>
          <p>Market Cap</p>
          <p>${mktCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;

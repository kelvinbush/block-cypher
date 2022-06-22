import React from 'react';
import styles from './CoinDetail.module.scss';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const CoinDetail = ({ coin }) => {
  return (
    <div className={styles.detail}>
      <div className={styles.detail_header}>
        <img src={coin.image} alt={coin.name} />
        <div>
          <p className={styles.detail_stats}>
            {coin.name}
            <span>#{coin.rank}</span>
          </p>
          <p className={styles.detail_price}>
            {coin.price}{' '}
            <span>
              {coin.isUp ? <AiFillCaretUp /> : <AiFillCaretDown />}
              {coin.change}
            </span>
          </p>
        </div>
      </div>
      <div className={styles.detail_stats}></div>
      <div className={styles.detail_price}></div>
    </div>
  );
};

export default CoinDetail;

import React from 'react';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import styles from './Coin.module.scss';
import { coinData } from '../Chart/chart-config';

const Coin = ({ market, navigate }) => {
  const data = coinData(market);

  return (
    <div className={styles.crypto} onClick={() => navigate(market.id)}>
      <div className={styles.crypto_header}>
        <img src={data.image} alt={data.name} />
        <div>
          <p className={styles.crypto_header_symbol}>{data.symbol}</p>
          <p className={styles.crypto_header_name}>{data.name}</p>
        </div>
      </div>
      <ChangeIndicator coinData={data} isList={true} />
      <p className={styles.crypto_price}>{data.price}</p>
    </div>
  );
};

export default Coin;

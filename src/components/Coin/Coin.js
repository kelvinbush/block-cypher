import React from 'react';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import { formatPrice, percentChange } from '../../utils/refinePrices';
import styles from './Coin.module.scss';

const Coin = ({ market, navigate }) => {
  const coinData = {
    isUp: +market.price_change_percentage_24h > 0,
    change: percentChange(market.price_change_percentage_24h),
    price: formatPrice(market.current_price),
    image: market.image,
    symbol: `${market.symbol}-USD`,
    name: `${market.name} USD`,
  };

  return (
    <div className={styles.crypto} onClick={() => navigate(market.id)}>
      <div className={styles.crypto_header}>
        <img src={coinData.image} alt={coinData.name} />
        <div>
          <p className={styles.crypto_header_symbol}>{coinData.symbol}</p>
          <p className={styles.crypto_header_name}>{coinData.name}</p>
        </div>
      </div>
      <ChangeIndicator coinData={coinData} isList={true} />
      <p className={styles.crypto_price}>{coinData.price}</p>
    </div>
  );
};

export default Coin;

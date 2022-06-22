/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import styles from './Coin.module.scss';
import { coinData } from '../Chart/chart-config';

const Coin = ({ market, navigate }) => {
  const data = coinData(market);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.crypto} onClick={() => navigate(market.id)}>
      <div className={styles.crypto_header}>
        <img src={data.image} alt={data.name} />
        <div>
          <p className={styles.crypto_header_symbol}>{data.symbol}</p>
          <p className={styles.crypto_header_name}>{data.name}</p>
        </div>
      </div>
      <ChangeIndicator coinData={data} isList />
      <p className={styles.crypto_price}>{data.price}</p>
    </div>
  );
};

export default Coin;

Coin.propTypes = {
  navigate: PropTypes.func.isRequired,
  market: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

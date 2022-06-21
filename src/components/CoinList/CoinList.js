import React from 'react';
import Coin from '../Coin/Coin';
import styles from './CoinList.module.scss';

const CoinList = ({ markets, loading }) => {
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className={styles.coin}>
      <h4>CoinList</h4>
      <div className={styles.coin__list}>
        {markets.map((market) => (
          <Coin key={market.id} market={market} />
        ))}
      </div>
    </div>
  );
};

export default CoinList;

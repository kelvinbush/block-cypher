import React, { useState } from 'react';
import Coin from '../Coin/Coin';
import styles from './CoinList.module.scss';

const CoinList = ({ markets, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  if (loading) {
    return <h4>Loading...</h4>;
  }
  const filteredCoins = markets.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

  let data;
  if (searchTerm === '') {
    data = markets;
  } else {
    data = filteredCoins;
  }

  return (
    <div className={styles.coin}>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className={styles.coin__list}>
        {data.length > 0 && data.map((market) => <Coin key={market.id} market={market} />)}
      </div>
    </div>
  );
};

export default CoinList;

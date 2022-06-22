/* eslint-disable react/prop-types,max-len */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Coin from '../Coin/Coin';
import styles from './CoinList.module.scss';

const CoinList = ({ markets, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
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

  const goToDetail = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <div className={styles.coin}>
      <input
        placeholder="Search coin"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.coin__list}>
        {data.length > 0 ? (
          data.map((market) => <Coin navigate={goToDetail} key={market.id} market={market} />)
        ) : (
          <h4>No results</h4>
        )}
      </div>
    </div>
  );
};

export default CoinList;

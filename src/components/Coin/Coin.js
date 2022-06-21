import React from 'react';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import { formatPrice, percentChange } from '../../utils/refinePrices';

const Coin = ({ market }) => {
  const coinData = {
    isUp: +market.price_change_percentage_24h > 0,
    change: percentChange(market.price_change_percentage_24h),
    price: formatPrice(market.current_price),
    image: market.image,
    symbol: `${market.symbol}-USD`,
    name: `${market.name} USD`,
  };

  return (
    <div>
      <div>
        <img src={coinData.image} alt={coinData.name} />
        <div>
          <p>{coinData.symbol}</p>
          <p>{coinData.name}</p>
        </div>
      </div>
      <div>
        <div>
          <ChangeIndicator coinData={coinData} />
          <p>{coinData.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

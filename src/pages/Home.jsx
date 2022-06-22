import React, { useEffect } from 'react';
import ChartContainer from '../components/ChartContainer/ChartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarketsData } from '../redux/markets/actions';
import CoinList from '../components/CoinList/CoinList';

const Home = () => {
  const { markets } = useSelector((state) => state.markets);
  const { loading } = markets;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketsData());
  }, [dispatch]);

  const bitcoin = markets.find((market) => market.id === 'bitcoin');

  return (
    <div>
      {bitcoin && <ChartContainer coin={bitcoin} />}
      <CoinList markets={markets} loading={loading} />
    </div>
  );
};

export default Home;

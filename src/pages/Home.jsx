import React, { useEffect } from 'react';
import ChartContainer from '../components/ChartContainer';
import HomeHero from '../components/HomeHero/HomeHero';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarketsData } from '../redux/markets/actions';

const Home = (props) => {
  const { markets } = useSelector((state) => state.markets);
  const { loading } = markets;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketsData());
  }, []);

  return (
    <div>
      <HomeHero />
      <ChartContainer coinId={'bitcoin'} isLoading={loading} markets={markets} />
    </div>
  );
};

export default Home;

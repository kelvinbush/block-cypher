import React from 'react';
import ChartContainer from '../components/ChartContainer';
import HomeHero from '../components/HomeHero/HomeHero';

const Home = (props) => (
  <div>
    <HomeHero />
    <ChartContainer coinId={'bitcoin'} />
  </div>
);

export default Home;

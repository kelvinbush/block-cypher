import React from 'react';
import ChartContainer from "../components/ChartContainer";

const Home = (props) => (
  <div>
    <h1>Home</h1>
    <p>This is the home page</p>
    <ChartContainer coinId={'bitcoin'}/>
  </div>
);

export default Home;

import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.home_hero}>
      <h1>
        <span>Crypto</span>
        <span>Tracker</span>
      </h1>
      <p>View market charts of your favorite cryptocurrencies</p>
    </div>
  );
};

export default Hero;

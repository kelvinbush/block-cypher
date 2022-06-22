import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import Chart from '../Chart/Chart';
import CoinList from '../CoinList/CoinList';
import Hero from '../Hero/Hero';

describe('Test presence of Components', () => {
  it('should render Navbar component', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <ChangeIndicator coinData={{}} isList={true} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should render Chart component', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Chart prices={[]} days={'1'} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should render Hero component', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should render CoinList component', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <CoinList markets={[]} loading={false} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

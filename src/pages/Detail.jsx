import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarketsData } from '../redux/markets/actions';
import ChartContainer from '../components/ChartContainer/ChartContainer';
import CoinDetail from '../components/CoinDetail/CoinDetail';

const Detail = () => {
  let { coinId } = useParams();
  const { markets } = useSelector((state) => state.markets);
  const { loading } = markets;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (markets.length <= 0) {
      dispatch(fetchMarketsData());
    }
  }, [dispatch, markets]);

  const coin = markets.find((market) => market.id === coinId);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {coin && <ChartContainer coin={coin} />}
      {coin && <CoinDetail coin={coin} />}
    </div>
  );
};

export default Detail;

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import { fetchMarketsData } from '../redux/markets/actions';
import ChartContainer from '../components/ChartContainer/ChartContainer';
import CoinDetail from '../components/CoinDetail/CoinDetail';

const Detail = () => {
  const { coinId } = useParams();
  const { markets } = useSelector((state) => state.markets);
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
      <div className="back">
        <button type="button" onClick={() => navigate(-1)}>
          {' '}
          <BiArrowBack />
          {' '}
          <span>Back</span>
        </button>
      </div>
      {coin && <ChartContainer coin={coin} />}
      {coin && <CoinDetail coin={coin} />}
    </div>
  );
};

export default Detail;

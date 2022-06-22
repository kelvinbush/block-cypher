import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarketsData } from '../redux/markets/actions';
import ChartContainer from '../components/ChartContainer/ChartContainer';

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

  return (
    <div>
      <h1>Detail</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <ChartContainer coinId={coinId} markets={markets} />
    </div>
  );
};

export default Detail;

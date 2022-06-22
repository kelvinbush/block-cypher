import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import chartsReducer from './charts/reducer';
import marketReducer from './markets/reducer';

const rootReducer = combineReducers({
  charts: chartsReducer,
  markets: marketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

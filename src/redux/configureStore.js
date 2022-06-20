import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import chartsReducer from "./charts/reducer";

const rootReducer = combineReducers({
  charts: chartsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
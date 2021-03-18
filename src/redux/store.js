/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:08:52
 * @LastEditTime: 2021-03-19 01:16:29
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);
export default store;

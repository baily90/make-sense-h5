/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:16:33
 * @LastEditTime: 2021-03-19 00:32:53
 * @LastEditors: zhangyanlong
 * @Description:
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

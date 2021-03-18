/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:17:16
 * @LastEditTime: 2021-03-19 01:34:35
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { Provider } from 'react-redux';
// import { hot } from 'react-hot-loader/root';
// import { Button } from 'antd';
import store from './redux/store';
import Router from './router/index';
// import './assets/css/app';
// import './assets/css/common';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;

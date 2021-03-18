/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:39:51
 * @LastEditTime: 2021-03-19 00:51:17
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AuthRouter from '../views/auth';
import Login from '../views/login';
import Layout from '../views/layout';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route component={Login} exact path="/login" />
      <AuthRouter path="/" component={Layout} />
    </Switch>
  </HashRouter>
);

export default Router;

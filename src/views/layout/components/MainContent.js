/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-19 02:22:21
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import {
  Redirect, withRouter, Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import routes from '../../../router/routes';

const { Content } = Layout;

const MainContent = () => (
  <Content style={{ padding: '15px' }}>
    <Switch>
      {routes.map((ele) => <Route render={() => <ele.component />} key={ele.path} path={ele.path} />)}
      <Redirect from="/" exact to="/home" />
      <Redirect to="/404" />
    </Switch>
  </Content>
);

const mapStateToProps = (state) => ({ userInfo: state.userInfo });
export default withRouter(connect(mapStateToProps)(MainContent));

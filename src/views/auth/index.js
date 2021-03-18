/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:51:28
 * @LastEditTime: 2021-03-19 02:16:14
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRouter = ({ component: Component, ...rest }) => {
  const isLogged = localStorage.getItem('isLogin') !== '1';
  return <Route {...rest} render={(props) => (isLogged ? <Component {...props} /> : <Redirect to="/login" />)} />;
};
AuthRouter.propTypes = {
  component: PropTypes.any.isRequired,
};
export default withRouter(AuthRouter);

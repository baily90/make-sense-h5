/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-19 10:26:18
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Content } = Layout;

const MainContent = ({ children }) => (
  <Content style={{ padding: '15px' }}>
    {children}
  </Content>
);

MainContent.propTypes = {
  children: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ userInfo: state.userInfo });
export default withRouter(connect(mapStateToProps)(MainContent));

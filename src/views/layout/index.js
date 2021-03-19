/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:13
 * @LastEditTime: 2021-03-19 10:28:14
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import PropTypes from 'prop-types';
import SideMenu from './components/SideMenu';
import TopHeader from './components/TopHeader';
import MainContent from './components/MainContent';

// import BreadCrumb from './components/BreadCrumb';

const Index = ({ routesConfig, children }) => (
  <Layout style={{ height: '100vh' }}>
    <SideMenu routesConfig={routesConfig} />
    <Layout>
      <TopHeader />
      {/* <BreadCrumb /> */}
      <MainContent>{children}</MainContent>
    </Layout>
  </Layout>
);

Index.propTypes = {
  routesConfig: PropTypes.array.isRequired,
  children: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (data) => {
    dispatch(data);
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);

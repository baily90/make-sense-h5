/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:13
 * @LastEditTime: 2021-03-19 02:19:26
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { connect } from 'react-redux';
// import { setUserInfo } from '@/redux/actions/userInfo';
import { Layout } from 'antd';
// import SideMenu from './components/SideMenu';
// import TopHeader from './components/TopHeader';
import MainContent from './components/MainContent';

debugger;
// import BreadCrumb from './components/BreadCrumb';

const Index = () => (
  <div className="layout">
    <Layout style={{ minHeight: '100vh' }}>
      {/* <SideMenu /> */}
      <Layout>
        {/* <TopHeader /> */}
        {/* {breadCrumb.show ? <BreadCrumb /> : null} */}
        <MainContent />
      </Layout>
    </Layout>
  </div>
);

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

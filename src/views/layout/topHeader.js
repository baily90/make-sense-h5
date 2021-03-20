/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-20 02:37:45
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { setCollapse, setBreadCrumb } from '../../redux/actions/setting';

const { Header } = Layout;
const TopHeader = () => {
  const toggle = () => {};
  return (
    <Header className="top-header">
      {true ? <MenuFoldOutlined onClick={toggle} /> : <MenuUnfoldOutlined />}
      <div className="header-title">后台管理系统</div>
    </Header>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setCollapse: (data) => {
    dispatch(setCollapse(data));
  },
  setBreadCrumb: (data) => {
    dispatch(setBreadCrumb(data));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(TopHeader));

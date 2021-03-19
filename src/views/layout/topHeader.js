/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-20 02:37:45
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setCollapse, setBreadCrumb } from '../../redux/actions/setting';

const TopHeader = () => {
  const toggle = () => {};
  return (
    <div className="top-header">
      <div className="top-header-inner">
        <Icon className="trigger" type={true ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
        <div className="header-title">后台管理系统</div>
      </div>
    </div>
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

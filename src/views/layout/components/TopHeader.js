/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-19 10:38:08
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { setUserInfo } from '@/redux/actions/userInfo';
// import { emptyTag, addTag } from '@/redux/actions/tagList';
import { setCollapse, setBreadCrumb } from '../../../redux/actions/setting';
// import routes from '../../../router/routes';
// import FullScreen from '@/components/FullScreen';
// import Tags from './Tags';
// import BasicDrawer from '@/components/BasicDrawer';

const TopHeader = () => {
  const toggle = () => {};
  return (
    <div className="top-header">
      <div className="top-header-inner">
        <Icon className="trigger" type={true ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
        <div className="header-title">React-antd-admin 通用后台管理系统</div>
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

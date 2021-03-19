/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-19 10:48:45
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
// import { setUserInfo } from '@/redux/actions/userInfo';
// import { addTag } from '@/redux/actions/tagList';
import menus from '../../../router/menus';
// import routes from '../../../router/routes';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = () => {
  // const state = { menuSelected: history.location.pathname };
  // 递归渲染菜单
  const renderMenu = (data) => data.map((item) => {
    if (item.children) {
      return (
        <SubMenu
          key={item.path}
          title={item.title}
        >
          {renderMenu(item.children)}
        </SubMenu>
      );
    }
    return (
      (
        <Menu.Item key={item.psath}>
          <Link to={item.path}>
            {item.icon ? <Icon type={item.icon} /> : ''}
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
      )
    );
  });

  return (
    <Sider trigger={null} collapsible className="app-sider">
      <div className="logo">
        Logo
      </div>
      <Menu style={{ height: '50px' }} smode="inline">
        {renderMenu(menus)}
      </Menu>
    </Sider>
  );
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
)(withRouter(SideMenu));

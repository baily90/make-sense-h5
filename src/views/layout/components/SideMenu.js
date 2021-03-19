/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-19 10:58:11
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const { Sider } = Layout;
const { SubMenu } = Menu;

const renderMenu = (config) => {
  config.map((item, index) => {
    const { children, icon, title } = item;
    if (children) {
      const unicode = get(children, '0.path', index);
      return (
        <SubMenu
          key={unicode}
          title={(
            <>
              <Icon type={icon} />
              <span>
                {title}
              </span>
            </>
          )}
        >
          {
            children.map((childrenItem) => renderMenuItem(childrenItem))
          }
        </SubMenu>
      );
    }
    return renderMenuItem(item);
  });
};
const renderMenuItem = (item) => {
  const { path, title, icon } = item;
  // 过滤非菜单路由
  if (!item.isMenu) {
    return <></>;
  }
  return (
    <Menu.Item key={path}>
      <Link to={path}>
        <Icon type={icon} />
        <span>
          {title}
        </span>
      </Link>
    </Menu.Item>
  );
};

const SideMenu = ({ routesConfig }) => (
  <Sider trigger={null} collapsible className="app-sider">
    <div className="logo">
      Logo
    </div>
    <Menu style={{ height: '50px' }} theme="dark">
      {renderMenu(routesConfig)}
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Sider>
);
SideMenu.propTypes = {
  routesConfig: PropTypes.array.isRequired,
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

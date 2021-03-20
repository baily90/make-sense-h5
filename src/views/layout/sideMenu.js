/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-20 02:46:00
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const { Sider } = Layout;
const { SubMenu } = Menu;

const renderMenu = (config) => config.map((item, index) => {
  const { children, icon, title } = item;
  if (children) {
    const unicode = get(children, '0.path', index);
    return (
      <SubMenu
        key={unicode}
        title={(
          <>
            {icon}
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
const renderMenuItem = (item) => {
  const { path, title, icon } = item;
  // 过滤非菜单路由
  if (!item.isMenu) {
    return <></>;
  }
  return (
    <Menu.Item key={path}>
      <Link to={path}>
        {icon}
        <span>
          {title}
        </span>
      </Link>
    </Menu.Item>
  );
};

const SideMenu = ({ routesConfig }) => {
  const history = useHistory();
  const defaultSelectedKeys = history.location.pathname;
  const defaultOpenKeys = `/${defaultSelectedKeys.split('/')[1]}`;
  return (
    <Sider trigger={null} collapsible className="app-sider">
      <div className="logo">
        Logo
      </div>
      <Menu
        defaultOpenKeys={[defaultOpenKeys]}
        defaultSelectedKeys={[defaultSelectedKeys]}
        selectedKeys={[defaultSelectedKeys]}
        theme="dark"
      >
        {renderMenu(routesConfig)}
      </Menu>
    </Sider>
  );
};
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

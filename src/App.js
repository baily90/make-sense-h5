/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:17:16
 * @LastEditTime: 2021-03-20 02:47:49
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Login from './views/login';
import './assets/css/app.scss';
import './assets/css/common.scss';
import TopHeader from './views/layout/topHeader';
import SideMenu from './views/layout/sideMenu';
import routers from './router';

const { Content } = Layout;
const App = () => {
  const [routes, setRoutes] = useState([]);
  const [menuConfig, setMenus] = useState([]);
  useEffect(() => {
    initAuthority();
  }, []);
  const initAuthority = () => {
    const arr = [];
    routers.forEach((item) => {
      if (item.path) {
        arr.push(item);
      } else {
        arr.push(...item.children);
      }
    });
    const getRoutes = routers;
    setRoutes(arr);
    setMenus(getRoutes);
  };
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Layout style={{ height: '100vh' }}>
          <SideMenu routesConfig={menuConfig} />
          <Layout>
            <TopHeader />
            {/* <BreadCrumb /> */}
            <Content style={{ padding: '15px' }}>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                  render={(props) => <route.component {...props} />}
                />
              ))}
            </Content>
          </Layout>
        </Layout>
      </Switch>
    </HashRouter>
  );
};

export default App;

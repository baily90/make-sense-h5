/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:17:16
 * @LastEditTime: 2021-03-19 10:42:05
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './views/login';
import Layout from './views/layout';
import './assets/css/app.scss';
import './assets/css/common.scss';

import routers from './router';

const App = () => {
  const [routes, setRoutes] = useState([]);
  const [menuConfig, setMenu] = useState([]);
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
    setMenu(getRoutes);
  };
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Layout routesConfig={menuConfig}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Layout>
      </Switch>
    </HashRouter>
  );
};

export default App;

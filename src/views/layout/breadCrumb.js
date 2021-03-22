/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-20 02:37:36
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import menus from '../../router';

const createBreadCrumbData = (data) => {
  const location = useLocation();
  const arrA = [];
  const arrB = [];
  const arrC = [];
  data.forEach((a) => {
    if (location.pathname === a.path) {
      arrA.push(a);
    }
    if (a.children && a.children.length > 0) {
      a.children.forEach((b) => {
        if (location.pathname === b.path) {
          arrB.push(b);
          arrA.push({
            icon: a.icon || '',
            path: a.path,
            title: a.title,
          });
        }
        if (b.children && b.children.length > 0) {
          b.children.forEach((c) => {
            if (location.pathname === c.path) {
              arrC.push(c);
              arrB.push({
                icon: b.icon || '',
                path: b.path,
                title: b.title,
              });
              arrA.push({
                icon: a.icon || '',
                path: a.path,
                title: a.title,
              });
            }
          });
        }
      });
    }
  });
  return [...arrA, ...arrB, ...arrC];
};

const BreadCrumb = () => {
  const routes = createBreadCrumbData(menus);
  if (!routes.length) return null;
  const itemRender = (route) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <Link key={route.path} to={route.path}>
        {route.icon}
        {' '}
        {route.title}
      </Link>
    ) : (
      <span key={route.path}>
        {route.icon}
        {' '}
        {route.title}
      </span>
    );
  };
  return (
    <div className="breadCrumb">
      <Breadcrumb routes={routes} itemRender={itemRender} />
    </div>
  );
};

export default BreadCrumb;

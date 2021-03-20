/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:41:40
 * @LastEditTime: 2021-03-20 02:37:45
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { setCollapse } from '../../redux/actions/setting';

const { Header } = Layout;

const TopHeader = () => {
  const isCollapsed = useSelector((state) => state.collapse.isCollapsed);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(setCollapse({ isCollapsed: !isCollapsed }));
  };

  return (
    <Header className="top-header">
      {isCollapsed ? <MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />}
      <div className="header-title">后台管理系统</div>
    </Header>
  );
};

export default TopHeader;

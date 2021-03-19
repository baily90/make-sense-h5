/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 10:29:52
 * @LastEditTime: 2021-03-19 10:30:27
 * @LastEditors: zhangyanlong
 * @Description:
 */
import * as actionTypes from '../actionTypes';

const setBreadCrumb = (data) => ({
  type: actionTypes.SET_BREADCRUMB,
  data,
});
const setCollapse = (data) => ({
  type: actionTypes.SET_COLLAPSE,
  data,
});

export {
  setBreadCrumb, setCollapse,
};

/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import * as actionTypes from '../actionTypes';

const breadCrumbState = localStorage.getItem('breadCrumb') ? JSON.parse(localStorage.getItem('breadCrumb')) : { show: true };

const breadCrumb = (state = breadCrumbState, action) => {
  switch (action.type) {
    case actionTypes.SET_BREADCRUMB:
      return action.data;
    default:
      return state;
  }
};
const collapse = (state = { isCollapsed: false }, action) => {
  switch (action.type) {
    case actionTypes.SET_COLLAPSE:
      return action.data;
    default:
      return state;
  }
};

export { breadCrumb, collapse };

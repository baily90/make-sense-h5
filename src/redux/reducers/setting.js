/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { SET_COLLAPSE } from '../actionTypes';

export default (state = { isCollapsed: false }, action) => {
  switch (action.type) {
    case SET_COLLAPSE:
      return action.data;
    default:
      return state;
  }
};

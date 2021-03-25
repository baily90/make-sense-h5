/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { GET_LIST_ENGINEER, SET_LOADING_ENGINEER } from '../actionTypes';

const defaultState = {
  dataSource: {},
  loading: false,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST_ENGINEER:
      return { ...state, ...action.data };
    case SET_LOADING_ENGINEER:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

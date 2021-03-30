/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import {
  GET_DATA_SUBPATCH, SET_LOADING_SUBPATCH, SET_SEARCH_PARAMS_SUBPATCH,
} from '../actionTypes';

const defaultState = {
  searchParams: {
    page: 1,
    perPage: 10,
    code: '',
    name: '',
    phone: '',
  },
  dataSource: {},
  loading: false,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_SUBPATCH:
      return { ...state, ...action.data };
    case SET_LOADING_SUBPATCH:
      return { ...state, ...action.data };
    case SET_SEARCH_PARAMS_SUBPATCH:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

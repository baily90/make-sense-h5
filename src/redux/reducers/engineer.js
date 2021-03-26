/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { GET_LIST_ENGINEER, SET_LOADING_ENGINEER, SET_SEARCH_PARAMS_ENGINEER } from '../actionTypes';

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
    case GET_LIST_ENGINEER:
      return { ...state, ...action.data };
    case SET_LOADING_ENGINEER:
      return { ...state, ...action.data };
    case SET_SEARCH_PARAMS_ENGINEER:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

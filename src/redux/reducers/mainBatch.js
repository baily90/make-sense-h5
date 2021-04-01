/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import {
  GET_DATA_MAINBATCH, SET_LOADING_MAINBATCH, SET_SEARCH_PARAMS_MAINBATCH, GET_CONFIG_MAINBATCH, SET_POSITIONS_MAINBATCH,
} from '../actionTypes';

const defaultState = {
  searchParams: {
    page: 1,
    perPage: 10,
    code: '',
    regionId: '',
    status: '',
  },
  dataSource: {},
  loading: false,
  config: { products: [], roles: [] },
  positions: [],
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_MAINBATCH:
      return { ...state, ...action.data };
    case SET_LOADING_MAINBATCH:
      return { ...state, ...action.data };
    case SET_SEARCH_PARAMS_MAINBATCH:
      return { ...state, ...action.data };
    case GET_CONFIG_MAINBATCH:
      return { ...state, ...action.data };
    case SET_POSITIONS_MAINBATCH:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

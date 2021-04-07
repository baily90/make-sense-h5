/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import {
  GET_DATA_SUBBATCH, SET_LOADING_SUBBATCH, SET_SEARCH_PARAMS_SUBBATCH, SET_DETAIL_SUBBATCH, SET_FORM_VISIABLE_SUBBATCH,
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
  detail: {
    batch: {},
    properties: [],
    markInfo: {},
  },
  isFormDetailVisiable: false,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_SUBBATCH:
      return { ...state, ...action.data };
    case SET_LOADING_SUBBATCH:
      return { ...state, ...action.data };
    case SET_SEARCH_PARAMS_SUBBATCH:
      return { ...state, ...action.data };
    case SET_DETAIL_SUBBATCH:
      return { ...state, ...action.data };
    case SET_FORM_VISIABLE_SUBBATCH:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

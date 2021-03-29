/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import {
  GET_LIST_ENGINEER, SET_LOADING_ENGINEER, SET_SEARCH_PARAMS_ENGINEER, GET_CONFIG_ENGINEER, SET_FORM_VISIABLE_ENGINEER, ADD_USER_ENGINEER,
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
  isFormVisible: false,
  detail: {
  },
  config: { products: [], roles: [] },
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST_ENGINEER:
      return { ...state, ...action.data };
    case SET_LOADING_ENGINEER:
      return { ...state, ...action.data };
    case SET_SEARCH_PARAMS_ENGINEER:
      return { ...state, ...action.data };
    case GET_CONFIG_ENGINEER:
      return { ...state, ...action.data };
    case SET_FORM_VISIABLE_ENGINEER:
      return { ...state, ...action.data };
    case ADD_USER_ENGINEER:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

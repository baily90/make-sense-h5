/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:13:18
 * @LastEditTime: 2021-03-19 01:38:59
 * @LastEditors: zhangyanlong
 * @Description:
 */
import {
  GET_DATA_MAINBATCH, SET_LOADING_MAINBATCH, SET_SEARCH_PARAMS_MAINBATCH, GET_CONFIG_MAINBATCH, SET_POSITIONS_MAINBATCH, SET_MAXNUMBERS_MAINBATCH, SET_FORM_ADD_VISIABLE_MAINBATCH, SET_DETAIL_MAINBATCH, SET_FORM_DETAIL_VISIABLE_MAINBATCH, SET_FORM_EDIT_VISIABLE_MAINBATCH, SET_EDIT_DETAIL_MAINBATCH,
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
  maxNumbers: undefined,
  isFormAddVisiable: false,
  isFormDetailVisiable: false,
  isFormEditVisiable: false,
  detail: {
    batch: {},
    selected: {},
    template: [],
    allocInfo: [],
  },
  editDetail: {

  },
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
    case SET_MAXNUMBERS_MAINBATCH:
      return { ...state, ...action.data };
    case SET_FORM_ADD_VISIABLE_MAINBATCH:
      return { ...state, ...action.data };
    case SET_DETAIL_MAINBATCH:
      return { ...state, ...action.data };
    case SET_FORM_DETAIL_VISIABLE_MAINBATCH:
      return { ...state, ...action.data };
    case SET_FORM_EDIT_VISIABLE_MAINBATCH:
      return { ...state, ...action.data };
    case SET_EDIT_DETAIL_MAINBATCH:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

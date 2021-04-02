import {
  GET_DATA_TEMPLATE, SET_LOADING_TEMPLATE, SET_SEARCH_PARAMS_TEMPLATE, SET_CONFIG_TEMPLATE, SET_FORM_VISIABLE_TEMPLATE, SET_FORM_TYPE_TEMPLATE, SET_DETAIL_TEMPLATE,
} from '../actionTypes';

const defaultState = {
  searchParams: {
    page: 1,
    perPage: 10,
    regionId: '',
    status: '',
  },
  dataSource: {},
  loading: false,
  config: { products: [], roles: [] },
  isFormVisible: false,
  formType: 'add', // add-新增，edit-编辑
  detail: {},
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_TEMPLATE:
      return { ...state, ...action.data };
    case SET_LOADING_TEMPLATE:
      return { ...state, ...action.data };
    case SET_SEARCH_PARAMS_TEMPLATE:
      return { ...state, ...action.data };
    case SET_CONFIG_TEMPLATE:
      return { ...state, ...action.data };
    case SET_FORM_VISIABLE_TEMPLATE:
      return { ...state, ...action.data };
    case SET_FORM_TYPE_TEMPLATE:
      return { ...state, ...action.data };
    case SET_DETAIL_TEMPLATE:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

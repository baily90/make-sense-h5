import {
  GET_DATA_MAINBATCH, SET_LOADING_MAINBATCH, SET_SEARCH_PARAMS_MAINBATCH, GET_CONFIG_MAINBATCH, SET_POSITIONS_MAINBATCH, SET_MAXNUMBERS_MAINBATCH, SET_FORM_ADD_VISIABLE_MAINBATCH, SET_DETAIL_MAINBATCH, SET_FORM_DETAIL_VISIABLE_MAINBATCH, SET_FORM_EDIT_VISIABLE_MAINBATCH, SET_EDIT_DETAIL_MAINBATCH,
} from '../actionTypes';

const getListAction = (data) => ({
  type: GET_DATA_MAINBATCH,
  data,
});
const setLoadingAction = (data) => ({
  type: SET_LOADING_MAINBATCH,
  data,
});
const setSearchParamsAction = (data) => ({
  type: SET_SEARCH_PARAMS_MAINBATCH,
  data,
});
const getConfigAction = (data) => ({
  type: GET_CONFIG_MAINBATCH,
  data,
});

const setPostionAction = (data) => ({
  type: SET_POSITIONS_MAINBATCH,
  data,
});

const setMaxNumbersAction = (data) => ({
  type: SET_MAXNUMBERS_MAINBATCH,
  data,
});

const setFormAddVisiableAction = (data) => ({
  type: SET_FORM_ADD_VISIABLE_MAINBATCH,
  data,
});

const setDetailAction = (data) => ({
  type: SET_DETAIL_MAINBATCH,
  data,
});

const setFormDetailVisiableAction = (data) => ({
  type: SET_FORM_DETAIL_VISIABLE_MAINBATCH,
  data,
});

const setFormEditVisiableAction = (data) => ({
  type: SET_FORM_EDIT_VISIABLE_MAINBATCH,
  data,
});

const setEditDetailAction = (data) => ({
  type: SET_EDIT_DETAIL_MAINBATCH,
  data,
});

export {
  getListAction,
  setLoadingAction,
  setSearchParamsAction,
  getConfigAction,
  setPostionAction,
  setMaxNumbersAction,
  setFormAddVisiableAction,
  setDetailAction,
  setFormDetailVisiableAction,
  setFormEditVisiableAction,
  setEditDetailAction,
};

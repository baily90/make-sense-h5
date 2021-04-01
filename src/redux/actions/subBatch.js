import {
  GET_DATA_SUBBATCH, SET_LOADING_SUBBATCH, SET_SEARCH_PARAMS_SUBBATCH,
} from '../actionTypes';

const getListAction = (data) => ({
  type: GET_DATA_SUBBATCH,
  data,
});
const setLoadingAction = (data) => ({
  type: SET_LOADING_SUBBATCH,
  data,
});
const setSearchParamsAction = (data) => ({
  type: SET_SEARCH_PARAMS_SUBBATCH,
  data,
});

export {
  getListAction,
  setLoadingAction,
  setSearchParamsAction,
};

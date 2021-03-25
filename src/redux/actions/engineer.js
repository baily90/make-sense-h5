import { GET_LIST_ENGINEER, SET_LOADING_ENGINEER } from '../actionTypes';

const getListAction = (data) => ({
  type: GET_LIST_ENGINEER,
  data,
});
const setLoadingAction = (data) => ({
  type: SET_LOADING_ENGINEER,
  data,
});

export {
  getListAction,
  setLoadingAction,
};

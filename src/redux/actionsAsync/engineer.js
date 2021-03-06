import {
  getListAction, setLoadingAction, getConfigAction, getDetailAction,
} from '../actions/engineer';
import {
  getEngineerListService, getEngineerConfigService, addUserService, updateUserService, getEngineerDetailService, destoryEngineerService, resetPasswordService,
} from '../../service/engineer';

export const getEngineerList = (params) => async (dispatch) => {
  // dispatch(getListAction({ dataSource: {} }));
  try {
    dispatch(setLoadingAction({ loading: true }));
    const dataSource = await getEngineerListService(params);
    dispatch(getListAction({
      dataSource,
    }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingAction({ loading: false }));
  }
};
export const getConfig = () => async (dispatch) => {
  try {
    const config = await getEngineerConfigService();
    dispatch(getConfigAction({ config }));
  } catch (error) {
    console.log(error);
  }
};

export const addUser = (data, successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await addUserService(data);
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

export const updateUser = (data, successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await updateUserService(data);
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

export const getDetail = (params) => async (dispatch) => {
  try {
    const detail = await getEngineerDetailService(params);
    dispatch(getDetailAction({ detail }));
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = (data) => async () => {
  try {
    await resetPasswordService(data);
  } catch (error) {
    console.log(error);
  }
};

export const destoryEngineer = (data, successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await destoryEngineerService(data);
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

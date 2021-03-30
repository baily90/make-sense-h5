import {
  getListAction, setLoadingAction, getConfigAction, getDetailAction,
} from '../actions/engineer';
import {
  getEngineerListService, getEngineerConfigService, addUserService, updateUserService, getEngineerDetailService,
} from '../../service/engineer';

export const getEngineerList = (params) => async (dispatch) => {
  // dispatch(getListAction({ dataSource: {} }));
  dispatch(setLoadingAction({ loading: true }));
  try {
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

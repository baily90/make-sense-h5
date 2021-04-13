import {
  setLoadingAction,
  getListAction,
  setConfigAction,
  setDetailAction,
} from '../actions/template';
import {
  getTemplateListService,
  addTemplateService,
  updateTemplateService,
  getTemplateDetailService,
  changeStatusService,
} from '../../service/template';
import { getEngineerConfigService } from '../../service/engineer';

export const getTemplateList = (params) => async (dispatch) => {
  try {
    dispatch(setLoadingAction({ loading: true }));
    const dataSource = await getTemplateListService(params);
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
    dispatch(setConfigAction({ config }));
  } catch (error) {
    console.log(error);
  }
};

export const addTemplate = (data, successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await addTemplateService(data);
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

export const updateTemplate = (data, successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await updateTemplateService(data);
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

export const getDetail = (params) => async (dispatch) => {
  try {
    const detail = await getTemplateDetailService(params);
    dispatch(setDetailAction({ detail }));
  } catch (error) {
    console.log(error);
  }
};

export const changeStatus = (data, successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await changeStatusService(data);
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

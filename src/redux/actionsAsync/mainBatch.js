import {
  setLoadingAction,
  getListAction,
  getConfigAction,
  setPostionAction,
  setMaxNumbersAction,
  setDetailAction,
  setFormDetailVisiableAction,
  setEditDetailAction,
  setFormEditVisiableAction,
} from '../actions/mainBatch';
import {
  getMainBatchListService, getPositionListService, getCheckNumbersService, addBatchService, getBatchDetailService, getEditInfoService, batchAllotService,
} from '../../service/mainBatch';
import { getEngineerConfigService } from '../../service/engineer';

export const getMainBatchList = (params) => async (dispatch) => {
  try {
    dispatch(setLoadingAction({ loading: true }));
    const dataSource = await getMainBatchListService(params);
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

export const getPosition = () => async (dispatch) => {
  try {
    const positions = await getPositionListService();
    dispatch(setPostionAction({ positions }));
  } catch (error) {
    console.log(error);
  }
};

export const getMaxNumbers = (params) => async (dispatch) => {
  try {
    const { numbers } = await getCheckNumbersService(params);
    dispatch(setMaxNumbersAction({ maxNumbers: numbers }));
  } catch (error) {
    console.log(error);
  }
};

export const addBatch = (data, successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await addBatchService(data);
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

export const getBatchDetail = (params) => async (dispatch) => {
  try {
    const detail = await getBatchDetailService(params);
    dispatch(setDetailAction({ detail }));
    dispatch(setFormDetailVisiableAction({ isFormDetailVisible: true }));
  } catch (error) {
    console.log(error);
  }
};

export const getEditDetail = (params) => async (dispatch) => {
  // debugger;
  try {
    const editDetail = await getEditInfoService(params);
    dispatch(setEditDetailAction({ editDetail: { ...editDetail, batchId: params.params.batchId } }));
    dispatch(setFormEditVisiableAction({ isFormEditVisiable: true }));
  } catch (error) {
    console.log(error);
  }
};

export const batchAllot = (data, successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await batchAllotService(data);
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

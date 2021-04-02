import {
  setLoadingAction,
  getListAction,
  getConfigAction,
  setPostionAction,
  setMaxNumbersAction,
} from '../actions/mainBatch';
import {
  getMainBatchListService, getPositionListService, getCheckNumbersService, addBatchService,
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

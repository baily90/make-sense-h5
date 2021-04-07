import {
  setLoadingAction,
  getListAction,
  setDetailAction,
  setFormVisiableAction,
} from '../actions/subBatch';
import { getSubBatchListService, getSubBatchDetailService } from '../../service/subBatch';

export const getSubBatchList = (params) => async (dispatch) => {
  try {
    dispatch(setLoadingAction({ loading: true }));
    const dataSource = await getSubBatchListService(params);
    dispatch(getListAction({ dataSource }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingAction({ loading: false }));
  }
};

export const getSubBatchDetail = (params) => async (dispatch) => {
  try {
    const detail = await getSubBatchDetailService(params);
    dispatch(setDetailAction({ detail }));
    dispatch(setFormVisiableAction({ isFormDetailVisiable: true }));
  } catch (error) {
    console.log(error);
  }
};

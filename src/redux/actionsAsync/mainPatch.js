import {
  setLoadingAction,
  getListAction,
} from '../actions/mainPatch';
import { getMainBatchListService } from '../../service/mainBatch';

export const getMainPatchList = (params) => async (dispatch) => {
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

export const test = '';

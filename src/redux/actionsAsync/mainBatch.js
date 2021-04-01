import {
  setLoadingAction,
  getListAction,
  getConfigAction,
  setPostionAction,
} from '../actions/mainBatch';
import { getMainBatchListService, getPositionListService } from '../../service/mainBatch';
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

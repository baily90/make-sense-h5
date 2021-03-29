import { getListAction, setLoadingAction, getConfigAction } from '../actions/engineer';
import { getEngineerListService, getEngineerConfigService, addUserService } from '../../service/engineer';

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

export const addUser = (successCB = () => {}, faileCB = () => {}) => async () => {
  try {
    await addUserService();
    successCB();
  } catch (error) {
    faileCB();
    console.log(error);
  }
};

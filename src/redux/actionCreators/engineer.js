import { getListAction, setLoadingAction } from '../actions/engineer';
import { getEngineerListService } from '../../service/engineer';

export const getEngineerList = (params) => async (dispatch) => {
  dispatch(getListAction({ dataSource: {} }));
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
export const test = '';

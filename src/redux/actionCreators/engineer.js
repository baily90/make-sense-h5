import { getListAction, setLoadingAction } from '../actions/engineer';
import { getEngineerListService } from '../../service/engineer';

export const getEngineerList = (params) => async (dispatch) => {
  dispatch(setLoadingAction({ loading: true }));
  try {
    const res = await getEngineerListService(params);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  setTimeout(() => {
    const users = [];
    '1234567890qwertyuioasdfghjklzxcvbnm'.split('').forEach((item, index) => {
      users.push({
        key: index,
        code: 'BZS0000001',
        name: '吴彦祖',
        phone: '186****3660',
        products: '甲状腺、颈动脉',
        settledDate: '2020-10-24',
        statusDesc: '正常',
      });
    });
    dispatch(getListAction({
      dataSource: {
        users, total: '4', currentPage: '1', perPage: '10',
      },
    }));
    dispatch(setLoadingAction({ loading: false }));
  }, 1000);
};
export const test = '';

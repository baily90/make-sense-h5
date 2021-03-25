import { getListAction, setLoadingAction } from '../actions/engineer';

export const getEngineerList = () => (dispatch) => {
  dispatch(setLoadingAction({ loading: true }));
  setTimeout(() => {
    const users = [];
    '1234567890qwertyuioasdfghjklzxcvbnm'.split('').forEach((item, index) => {
      users.push({
        key: index,
        c1: 'BZS0000001',
        c2: '吴彦祖',
        c3: '186****3660',
        c4: '甲状腺、颈动脉',
        c5: '2020-10-24',
        c6: '正常',
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
